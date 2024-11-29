import { generateAuthToken } from "../services/tokenService.js";

export const gerarToken = async (req, res, next) => {
  try {
    const app = req.body;
    const token = generateAuthToken(app);
    return res.status(200).send(token);
  } catch (error) {
    return res.status(500).send("Falha ao gerar token.");
  }
};
