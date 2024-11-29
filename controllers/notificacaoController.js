import { db } from "../services/firebaseService.js";

export const Notificar = async (req, res, next) => {
  try {
    const data = req.body;
    const docRef = await db.collection("notificacoes").add({
      ...data,
    });
    return res.status(200).send(`${docRef.id}`);
  } catch (error) {
    return res.status(500).send("Erro interno ao gravar os dados");
  }
};
