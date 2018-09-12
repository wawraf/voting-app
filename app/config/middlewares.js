import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';

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
};