import app from './app';

app.listen(process.env.PORT || 3333, () =>
  // eslint-disable-next-line no-console
  console.log(
    `running at ${process.env.APP_URL} in '${process.env.NODE_ENV}' mode`
  )
);
