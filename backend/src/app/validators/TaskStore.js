import * as Yup from 'yup';
import SendError from '../services/SendError';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string(),
      tags: Yup.array(),
    });

    await schema.validate(req.body, { abortEarly: false });

    if (req.body.tags) {
      req.body.tags.map(tag => {
        if (typeof tag !== 'string') {
          throw new SendError('Invalid Tag', 'The tag must be a string', 400);
        }

        return true;
      });
    }

    return next();
  } catch (error) {
    return next(error);
  }
};
