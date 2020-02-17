import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      tags: Yup.array().of(Yup.string()),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (error) {
    return next(error);
  }
};
