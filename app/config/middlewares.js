// Import dep
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import passport from 'passport'
import session from 'express-session'
import MongoStore from 'connect-mongo'

// Import modules
import routes from '../routes/routes'
import db from '../config/database'
import passportConfig from '../config/passport'

const MongoConnection = MongoStore(session)

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
  
  if (isDev) {
    app.use(morgan('dev'));
  }
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new MongoConnection({mongooseConnection: db})
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  
  passportConfig(passport)
  
  // Middleware for handling routes and errors
  app.use('/', routes);
  
};