import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const userSchema = new Schema({
  local: {
    username: { type: String, required: true, unique: true },
    password: String
  },
  github: {
    username: String,
    id: String
  }
})

userSchema.plugin(uniqueValidator)

userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, 14)
}

userSchema.methods.passwordValid = function(password) {
  return bcrypt.compareSync(password, this.local.password)
}

const User = mongoose.model('Users',  userSchema)

export default User