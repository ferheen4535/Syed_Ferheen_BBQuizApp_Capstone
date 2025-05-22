import express from 'express';
import * as usersControllers from '../../controllers/quiz/usersControllers.js';


const router = express.Router();


router.delete('/Unsubscribe', usersControllers.unsubscribeUser);

router.get('/seed', usersControllers.seedUsers);


router.post('/', usersControllers.createUser);


router.get('/',      usersControllers.getUsers);  
router.get('/:id',   usersControllers.getUser);    

router.put('/update', usersControllers.updateUserByCreds);   //routes for profile page//
router.put('/:id',    usersControllers.updateUser);        

router.delete('/:id', usersControllers.deleteUser);

export default router;