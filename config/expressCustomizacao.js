import express from "express";
import cors from "cors";

export const expressCustomizacao = () => {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      methods: "POST, GET, PUT, OPTIONS, PATCH, DELETE",
      exposedHeaders: "X-file-name",
    })
  );

  return app;
};
