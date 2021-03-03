import { Response } from 'express';
import errorsMensagesRequest from './error_mensage';

const verifyRequeredFields = (
  response: Response,
  fieldsRequered: Array<string>,
  objectVerify: any
) => {
  const fieldsErros = fieldsRequered.filter(
    (key) => !Boolean(objectVerify[key])
  );
  return errorsMensagesRequest.fieldRequered(response, fieldsErros);
};

export { verifyRequeredFields };
