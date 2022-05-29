require('dotenv').config();
const app = require('./api');

const { login, createUser, getAllUsers, getByIdUser } = require('./controllers/userController');

const authLogin = require('./middlewares/authLogin');
const authNewUser = require('./middlewares/authNewUser');
const authToken = require('./middlewares/authToken');

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

app.listen(port, () => console.log('ouvindo porta', port));
