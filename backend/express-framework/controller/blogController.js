/**
 * In MVC, a controller can do two things:
 *
 * 1. Update View if data stays the same
 * 2. Inform Model to update data if data needs update
 */

/**
 * Here are the functions that we want to include
 *
 * 1. blog_index: Get info of all blogs
 * 2. blog_details: Get info of single blog
 * 3. blog_create_get: Get the view of blog creation page
 * 4. blog_create_post: Add a blog to our collection
 */

/**
 * Each controller handler is a function expression that will get passed
 * into the express routes.
 */

/**
 * The core idea for implementing a controller is that: the route
 * handlers' callbacks are decoupled from the handlers themselves.
 *
 * Such that, it exists a separate controller file for all the
 * functionalities for a particular route param.
 */

import Blog from '../model/blog.js';

const blog_index = async (req, res) => {
  try {
    // This find has a sort attached to it
    const blogs = await Blog.find().sort({ createdAt: -1 }).exec();
    res.render('blogs/blogs', { title: 'Blogs', blogs: blogs });
  } catch (err) {
    console.error(err);
    res.redirect('404');
  }
};

const blog_create_get = (req, res) => {
  res.render('blogs/create', { title: 'Create a blog' });
};

const blog_create_post = async (req, res) => {
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
};

const blog_details = async (req, res) => {
  const id = req.params.id;
  const foundDoc = await Blog.findById(id);
  res.render('blogs/single-blog', { title: 'Blog', data: foundDoc });
};

const blog_delete = async (req, res) => {
  const id = req.params.id;
  try {
    await Blog.findByIdAndDelete(id);
    // await Blog.findById(id);
    res.json({ redirect: 'blogs//blogs' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ redirect: '/404' });
  }
};

export {
  blog_index,
  blog_details,
  blog_create_post,
  blog_create_get,
  blog_delete
};
