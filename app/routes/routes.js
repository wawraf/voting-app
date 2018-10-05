import express from 'express'
import passport from 'passport'

const router = express.Router()

/* Polls handling */
const Polls = require('./polls')(router)

/* Authentication handling*/
const Auth = require('./auth')(router, passport)

export default router