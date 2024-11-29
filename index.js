import router from "./routers/index.js";
import { functions } from "./services/firebaseService.js";
import { expressCustomizacao } from "./config/expressCustomizacao.js";

const app = expressCustomizacao();
app.use(router);

export const api = functions.https.onRequest(app);
