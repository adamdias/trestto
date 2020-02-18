import React, { useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';

import Header from '~/components/Layout/Header';
import Container from '~/components/Layout/Grid/Container';
import Content from '~/components/Layout/Grid/Content';
import Card from '~/components/Card';
import CardButtonClose from '~/components/Card/CardButtonClose';
import CardTitle from '~/components/Card/CardTitle';
import CardDescription from '~/components/Card/CardDescription';
import BoxTag from '~/components/BoxTag';
import Input from '~/components/Form/Input';
import Label from '~/components/Form/Label';
import Modal from '~/components/Modal';
import iconClose from '~/assets/img/icon-close.svg';
import Textarea from '~/components/Form/Textarea';
import CreatableSelect from '~/components/Form/CreatableSelect';
import ButtonForm from '~/components/Form/ButtonForm';
import api from '~/services/api';
import sleep from '~/utils/sleep';
import capitalizeFirstLetter from '~/utils/capitalizeFirstLetter';
import CardButtonEdit from '~/components/Card/CardButtonEdit';

export default function Professional() {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [createModal, setCreateModal] = useState('create');
  const [titleRequired, setTitleRequired] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [tagsSelect, setTagsSelect] = useState();
  const [form, setForm] = useState({
    id: '',
    title: '',
    description: '',
    tags: [],
  });

  async function getAllTasks() {
    const { data } = await api.get('/v1/tasks');

    setTasks(data.items);
  }

  useEffect(() => {
    getAllTasks();
  }, []);

  function handleOpenCreateModal() {
    setCreateModal(true);
    setTagsSelect([]);

    setForm({
      id: '',
      title: '',
      description: '',
      tags: [],
    });

    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  async function handleRemoveTask(idTask) {
    // eslint-disable-next-line no-alert
    const result = window.confirm('Do you want to remove this task?');

    if (result) {
      try {
        await api.delete(`/v1/tasks/${idTask}`);

        getAllTasks();

        toast.success(
          <CardDescription mb={0} color="#FFF" fontSize={1.5}>
            Task has been successfully deleted!
          </CardDescription>,
          {
            autoClose: 4000,
          }
        );
      } catch (error) {
        toast.error(
          <CardDescription mb={0} color="#FFF" fontSize={1.5}>
            {error.response.data.fields
              ? capitalizeFirstLetter(error.response.data.fields[0].message)
              : capitalizeFirstLetter(error.response.data.message)}
          </CardDescription>,
          {
            autoClose: 3000,
          }
        );
      }
    }
  }

  function handleChange(newValue, { action }) {
    setTagsSelect();

    if (action === 'clear') {
      setForm({ ...form, tags: [] });
    }

    const newTags = [];

    newValue.map(val => {
      return newTags.push(val.label);
    });

    setForm({ ...form, tags: newTags });
  }

  async function handleEditModalTask({ id, title, description, Tags }) {
    const newTags = [];
    const selectTags = [];

    if (Tags) {
      Tags.map(tag => {
        newTags.push(tag.title);
        selectTags.push({ value: tag.id, label: tag.title });
        return true;
      });
    }

    setTagsSelect(selectTags);
    setForm({ id, title, description, tags: newTags });
    setCreateModal(false);
    setOpenModal(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(form.tags);

      if (!createModal) {
        await api.put(`/v1/tasks/${form.id}`, {
          title: form.title,
          description: form.description,
          tags: form.tags,
        });
      } else {
        await api.post('/v1/tasks', {
          title: form.title,
          description: form.description,
          tags: form.tags,
        });
      }

      sleep(1500);

      toast.success(
        <CardDescription mb={0} color="#FFF" fontSize={1.5}>
          Task has been successfully {createModal ? 'created' : 'updated'}!
        </CardDescription>,
        {
          autoClose: 4000,
        }
      );

      getAllTasks();
      setForm({ title: '', description: '', tags: [] });
      setTagsSelect([]);
      setIsLoading(false);
      setOpenModal(false);
    } catch (error) {
      sleep(1000);
      setIsLoading(false);
      setTitleRequired(true);

      toast.error(
        <CardDescription mb={0} color="#FFF" fontSize={1.5}>
          {error.response.data.fields
            ? capitalizeFirstLetter(error.response.data.fields[0].message)
            : capitalizeFirstLetter(error.response.data.message)}
        </CardDescription>,
        {
          autoClose: 3000,
        }
      );
    }
  }

  return (
    <>
      <Header clickBtnAdd={handleOpenCreateModal} />

      <Container>
        <Content>
          {tasks.length ? (
            tasks.map(task => (
              <Card key={task.id}>
                <CardButtonClose
                  src={iconClose}
                  title="Close Button"
                  alt="[Close Button]"
                  onClick={() => handleRemoveTask(task.id)}
                />

                <CardButtonEdit
                  title="Edit Button"
                  alt="[Edit Button]"
                  onClick={() => handleEditModalTask(task)}
                />

                <CardTitle mb={task.description || task.Tags.length ? 2 : 0}>
                  {task.title}
                </CardTitle>

                {task.description && (
                  <CardDescription mb={task.Tags.length ? 2 : 0}>
                    {task.description}
                  </CardDescription>
                )}

                <BoxTag>
                  {task.Tags.map(tag => (
                    <li key={tag.id}>{tag.title}</li>
                  ))}
                </BoxTag>
              </Card>
            ))
          ) : (
            <Card
              style={{
                backgroundColor: '#B1ADB9',
                color: '#FFF',
              }}
            >
              <CardTitle
                mb={0}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <FaInfoCircle style={{ marginRight: '2rem' }} /> We didnt find
                any task :(
              </CardTitle>
            </Card>
          )}
        </Content>
      </Container>

      <Modal open={openModal}>
        <Container>
          <Content>
            <Card>
              <CardButtonClose
                src={iconClose}
                title="Close Button"
                alt="[Close Button]"
                onClick={handleCloseModal}
              />

              <CardTitle>
                {createModal ? 'Create new task' : 'Update task'}
              </CardTitle>

              <CardDescription
                style={{
                  paddingBottom: '2rem',
                  borderBottom: '1px solid #eee',
                }}
              >
                Inform the necessary fields to{' '}
                {createModal ? 'Create new task' : 'Update task'}
              </CardDescription>

              <form onSubmit={e => handleSubmit(e)}>
                <Label error={titleRequired}>
                  <p>
                    Task Title: <span>&#9733;</span>
                  </p>
                  <Input
                    onKeyDown={() => setTitleRequired(false)}
                    error={titleRequired}
                    type="text"
                    value={form.title}
                    placeholder="Enter the title of the task..."
                    onChange={e => setForm({ ...form, title: e.target.value })}
                  />
                </Label>

                <Label>
                  <p>Task Description:</p>
                  <Textarea
                    rows="3"
                    value={form.description}
                    placeholder="Enter the description of the Task..."
                    onChange={e =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </Label>

                <Label>
                  <p>Task Tags:</p>
                  <CreatableSelect
                    options={[
                      { value: 'Back-end', label: 'Back-end' },
                      { value: 'Front-end', label: 'Front-end' },
                      { value: 'Web', label: 'Web' },
                      { value: 'Mobile', label: 'Mobile' },
                    ]}
                    placeholder="Enter or select the tag of the task..."
                    onChange={handleChange}
                    value={tagsSelect}
                  />
                </Label>

                <div style={{ float: 'right' }}>
                  <ButtonForm type={isLoading ? 'button' : 'submit'}>
                    <span style={{ paddingRight: isLoading ? '1.5rem' : '' }}>
                      {createModal ? 'Create' : 'Update'} Now
                    </span>{' '}
                    <ClipLoader size={15} color="#fff" loading={isLoading} />
                  </ButtonForm>
                </div>
              </form>
            </Card>
          </Content>
        </Container>
      </Modal>

      <ToastContainer position={toast.POSITION.TOP_CENTER} />
    </>
  );
}
