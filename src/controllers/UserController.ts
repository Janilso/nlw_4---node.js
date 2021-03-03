import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import errorsMensagesRequest from '../utils/error_mensage';
import { verifyRequeredFields } from '../utils/functions';

class UserController {
  async create(request: Request, response: Response) {
    try {
      const { name, email } = request.body;
      if (!email || !name)
        return verifyRequeredFields(response, ['email', 'name'], request.body);

      const usersRepository = getRepository(User);

      const userAlreadyExists = await usersRepository.findOne({ email });
      console.log(userAlreadyExists);
      if (userAlreadyExists) return errorsMensagesRequest.emailUsed(response);

      const user = usersRepository.create({
        name,
        email,
      });
      await usersRepository.save(user);
      return response.json(user);
    } catch (error) {
      errorsMensagesRequest.defaultMensage(response, error);
    }

    return response.send();
  }
}

export { UserController };
