import React from 'react';
import ReactCreatableSelect from 'react-select/creatable';

export default function CreatableSelect({ handleChange, options, ...props }) {
  const customStyles = {
    option: provided => ({
      ...provided,
      padding: 15,
      fontSize: '14px',
    }),
    control: provided => ({
      ...provided,
      width: '100%',
      padding: '0.5rem 0',
      backgroundColor: '#f5f4f6',
      border: '1px solid #ebeaed',
      fontSize: '1.6rem',
      outline: 'none',
    }),
    multiValueLabel: provided => ({
      ...provided,
      backgroundColor: '#fff',
      border: '1px solid #ebeaed',
      borderRight: 0,
    }),
    multiValueRemove: provided => ({
      ...provided,
      backgroundColor: '#fff',
      border: '1px solid #ebeaed',
      borderLeft: 0,
    }),
    multiValue: provided => ({
      ...provided,
      fontSize: '1.9rem',
      color: '#170C3A',
    }),
  };

  return (
    <ReactCreatableSelect
      isMulti
      styles={customStyles}
      onChange={handleChange}
      options={options}
      {...props}
    />
  );
}
