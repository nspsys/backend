import { decodeToken } from "../services/tokenService.js";

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.status(401).json({ message: "Token não fornecido." });
    }
    const decodedToken = await decodeToken(token);
    req.app = decodedToken;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token inválido." });
  }
};
