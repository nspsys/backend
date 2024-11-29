import { Router } from "express";
import { Notificar } from "../controllers/notificacaoController.js";
import { gerarToken } from "../controllers/autenticacaoController.js";
import { checkAuth } from "../middlewares/validationMiddleware.js";

const router = Router();

router.post("/login", async (req, res, next) => gerarToken(req, res, next));

router.post("/notificacao", checkAuth, (req, res, next) =>
  Notificar(req, res, next)
);

router.get("/teste", checkAuth, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Funcionando!`);
});

export default router;
