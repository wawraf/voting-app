// Import dep
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';

// Import modules
import routes from '../routes'

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

/* 
Morgan jako logger jest uzywany tylko w wersji developerskiej 
W wersji produkcyjnej dodatkowo nalezy uruchomic helmet i compression

W obu przypadkach uzywac body-parser
*/
export default (app) => {
  if (isProd) {
    app.use(compression());
    app.use(helmet());
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  if (isDev) {
    app.use(morgan('dev'));
  }
  
  // Middleware for handling routes and errors
  app.use('/', routes);
  
  app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  });
  
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      error: {
        message: err.message,
      },
    });
    next(err);
  });
};