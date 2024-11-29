const axios = require("axios");

exports.handler = async (context, event, callback) => {
  const { http_method, rota, payload } = event;

  const options = {
    headers: {
      "x-auth-token": `${context.token}`,
    },
  };

  let response = {};
  if (payload) {
    const data = JSON.parse(payload.replaceAll("\n", ""));
  }

  try {
    if (http_method == "GET") {
      response = await axios.get(
        `${context.ngrok}/nspsys/us-central1/api/${rota}`,
        options
      );
    } else {
      response = await axios.post(
        `${context.ngrok}/nspsys/us-central1/api/${rota}`,
        {
          situacao: "Aberto",
          responsavel: "",
          classificacao: "",
          prazo_resolucao: "",
          ...data,
        },
        options
      );
    }
    callback(null, response.data);
  } catch (error) {
    return callback(error);
  }
};
