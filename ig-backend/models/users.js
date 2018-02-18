import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  username:{
    type: String,
    unique: true,
    required: [true, "username is required"]
  },
  password: String,
  desc: String,
  bio: String,
  email: String,
  thumbnail: String,
  posts:{
    type: [],
    default:[]
  },
  following:{
    type: [],
    default:[]
  },
  followers:{
    type:[],
    default:[]
  }
})
const userModel = mongoose.model('User', userSchema)
export default userModel