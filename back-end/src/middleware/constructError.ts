
import { StatusCodes } from 'http-status-codes';

const error = (code: any, message: string) => ({
  isError: true,
  code,
  message,
});

const errorRegisterClient = (message: string) => error(StatusCodes.BAD_REQUEST, message)
const errorRegisterUser = (message: string) => error(StatusCodes.BAD_REQUEST, message)

export { errorRegisterClient, errorRegisterUser };