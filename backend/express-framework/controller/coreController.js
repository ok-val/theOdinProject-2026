//

const home_render = (req, res) => {
  res.render('home', { title: 'Home' });
};

const home_redirect = (req, res) => {
  res.redirect('/home');
};

const about_render = (req, res) => {
  res.render('about', { title: 'About' });
};

const about_redirect = (req, res) => {
  res.redirect('/about');
};

export { home_render, home_redirect, about_render, about_redirect };
