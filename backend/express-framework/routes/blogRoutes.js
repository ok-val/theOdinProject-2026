import express from 'express';
import Blog from '../model/blog.js';

const blogRouter = express.Router();

blogRouter.use(express.urlencoded({ extended: true }));

/**
 * Pay attention to the order of middleware handlers since URLs such as
 * `blogs/create` and `blogs/:id` maybe conflated.
 *
 * As a rule of thumb, the path WITHOUT params should be prioritized!
 * Demonstrated below;
 */

blogRouter.get('/', async (req, res) => {
  try {
    // This find has a sort attached to it
    const blogs = await Blog.find().sort({ createdAt: -1 }).exec();
    res.render('blogs', { title: 'Blogs', blogs: blogs });
  } catch (err) {
    console.error(err);
    res.redirect('404');
  }
});

blogRouter.get('/create', (req, res) => {
  res.render('create', { title: 'Create a blog' });
});

blogRouter.post('/create', async (req, res) => {
  try {
    await Blog.create({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content
    });
    res.redirect('/blogs/create');
  } catch (error) {
    console.error(error);
    res.redirect('/404');
  }
});

blogRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  const foundDoc = await Blog.findById(id);
  res.render('single-blog', { title: 'Blog', data: foundDoc });
});

blogRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await Blog.findByIdAndDelete(id);
    // await Blog.findById(id);
    res.json({ redirect: '/blogs' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ redirect: '/404' });
  }
});

export default blogRouter;
