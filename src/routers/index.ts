import { Router } from 'express';

import { UserController } from '../controllers/UserController';
import ROUTES from './routes_names';

const router = Router();

const userController = new UserController();

router.post(ROUTES.USERS, userController.create);

export default router;
