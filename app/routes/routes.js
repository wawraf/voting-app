import express from 'express'
import passport from 'passport'

const router = express.Router()

// router.get('/', (req, res) => {
//   res.status(200).json({
//     response: 'GET for home route',
//     body: req.body
//   })
// })

/* Polls handling */
const Polls = require('./polls')(router)

/* Authentication handling*/
const Auth = require('./auth')(router, passport)

export default router