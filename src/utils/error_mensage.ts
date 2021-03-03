import { Response } from 'express';
import CONSTANTS_TEXT from './constants_text';

const defaultMensage = (response: Response, error: any) => {
  return response
    .status(400)
    .json({ mensage: CONSTANTS_TEXT.ERROR.REQUEST, error });
};

const fieldRequered = (response: Response, fields: Array<string>) => {
  const errors = fields.map((item) =>
    CONSTANTS_TEXT.ERROR.FIELD_REQUERED_NAME.replace('[field]', `'${item}'`)
  );
  return response
    .status(400)
    .json({ mensage: CONSTANTS_TEXT.ERROR.FIELD_REQUERED, errors });
};

const emailUsed = (response: Response) => {
  return response
    .status(409)
    .json({ mensage: CONSTANTS_TEXT.ERROR.EMAIL_USED });
};

const errorsMensagesRequest = {
  defaultMensage,
  fieldRequered,
  emailUsed,
};

export default errorsMensagesRequest;
