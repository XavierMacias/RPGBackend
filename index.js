const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cloudinary = require('cloudinary').v2;
const cors = require('cors');

const elementRouter = require('./src/api/routes/elements.route');
const magicRouter = require('./src/api/routes/magics.route');
const itemRouter = require('./src/api/routes/items.route');
const weaponRouter = require('./src/api/routes/weapons.route');
const creatureRouter = require('./src/api/routes/creatures.route');
const battlerRouter = require('./src/api/routes/battlers.route');
const teamRouter = require('./src/api/routes/teams.route');
const userRouter = require('./src/api/routes/users.route');

const {connect} = require('./src/utils/db');
const PORT = process.env.PORT;

const app = express();
connect();

//VAMOS A PONER DE RESPUESTA
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, PATCH'); //Decimos que metodos tenemos permitidos
    res.header('Access-Control-Allow-Credentials', 'true'); //permitimos la conexión con credenciales(Bearer token)
    res.header('Access-Control-Allow-Headers', 'Content-Type'); // permitimos los headers del tipo Content-Type
    next();
  })
  
  // Configuracion de CORS
  //CORS --> CORS ORIGIN RESOURCE SHARING --> Intercambio de recursos cruzados -> manera de permir el compartir recursos enntre distintos origenes
  app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  }));
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  app.use('/elements', elementRouter);
  app.use('/magics', magicRouter);
  app.use('/items', itemRouter);
  app.use('/weapons', weaponRouter);
  app.use('/creatures', creatureRouter);
  app.use('/battlers', battlerRouter);
  app.use('/teams', teamRouter);
  app.use('/users', userRouter);
  
  // Ruta para manejar rutas no encontradas
  app.use('*', (req, res) => {
    res.status(404).json('Route not found');
  });
  
  // Manejo de errores inesperados
  app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(`Error: ${error.message || "Unexpected error"}`);
  });

app.listen(PORT, () => console.log(`Connected to port: ${PORT}`));