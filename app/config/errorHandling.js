export default (app) => {
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      error: {
        message: err.message,
      },
    });
  });
}