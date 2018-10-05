export default (app) => {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    
    if (err.name == 'MongoError') {
    return res.json({
      error: {
        message: err.message,
        code: err.code,
        name: err.name
      }
    })
    }
    
    res.json({
      error: {
        message: err.message,
        name: err.name
      },
    });
  });
}