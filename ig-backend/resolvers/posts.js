export default {
  Query:{
    getPost: (parent, args, {models})=>models.Post.find()
  },
  Mutation:{
    createPost: (parent, args, {models, user})=>models.Post.create({...args.post, by: user})
  }
}