
import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController'


const routes = Router();
const upload = multer(uploadConfig);

// Rota = conjunto
// recurso = usuário
// métodos HTTP = GET, POST, PUT, DELETE

//GET = BUSCANDO INFORMAÇÃO
//POST = CRIAR UMA INFORMAÇÃO
//PUT = EDITANR INFORMAÇÃO
//DELETE = DELETAR INFORMAÇÃO

//PARAMETROS
//Query params: localhost:3333/users?search=Diego&age=22 (busca)
//Route params: localhost:3333/users/1 (identificar um recurso)
//Body: localhost:3333/users/1
// app.post('/users/:id', (request, response) => {
//     console.log(request.query);
//     console.log(request.params);
//     console.log(request.body);
//     return response.json({ message: "Hello World" });
// })

//MVC
// model => representação de uma entidade/tabela no banco
// view => como as coisas são visualizadas
// controllers => lógica das rotas

//index, show, create, update, delete => metodos padões controller

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanage/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);


export default routes;