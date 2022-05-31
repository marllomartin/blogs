require('dotenv').config();
const app = require('./api');

const { login, createUser, getAllUsers, getByIdUser } = require('./controllers/userController');
const { createCategory, getAllCategories } = require('./controllers/categoryController');
const { getAllBlogPosts, getByIdBlogPost } = require('./controllers/blogPostController');

const authLogin = require('./middlewares/authLogin');
const authNewUser = require('./middlewares/authNewUser');
const authToken = require('./middlewares/authToken');
const authNewCategory = require('./middlewares/authNewCategory');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// Login
app.post('/login', authLogin, login);

// User
app.post('/user', authNewUser, createUser);
app.get('/user', authToken, getAllUsers);
app.get('/user/:id', authToken, getByIdUser);

// Category
app.post('/categories', authToken, authNewCategory, createCategory);
app.get('/categories', authToken, getAllCategories);

// BlogPost
app.get('/post', authToken, getAllBlogPosts);
app.get('/post/:id', authToken, getByIdBlogPost);

app.listen(port, () => console.log('ouvindo porta', port));
