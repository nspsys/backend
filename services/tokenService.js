import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { JWT_PRIVATE_KEY } = process.env;

export const generateAuthToken = (application) => {
  const token = jwt.sign(application, JWT_PRIVATE_KEY);
  return token;
};

export const decodeToken = (token) => {
  return jwt.verify(token, JWT_PRIVATE_KEY);
};
