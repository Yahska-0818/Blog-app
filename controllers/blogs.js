const blogsRouter=require('express').Router()
const Blog=require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json((blogs))
})

blogsRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body)
  const savedBlog = await blog.save()
  response.status(201).json(savedBlog)
})

blogsRouter.delete('/:id', async (request,response) => {
  await Blog.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

blogsRouter.get('/:id', async (request,response) => {
  const blog = await Blog.findById(request.params.id)
  response.json((blog))
})

module.exports = blogsRouter