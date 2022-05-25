require('dotenv').config();
const app = require('./api');

const { login } = require('./controllers/userController');

const authLogin = require('./middlewares/authLogin');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// Login
app.post('/login', authLogin, login);

app.listen(port, () => console.log('ouvindo porta', port));
