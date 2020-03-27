const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  },
  async create(request, response) {
    const { nome, email, whatsapp, cidade, uf } = request.body;
    //Criando id com string alatoria de 4bits
    const id = crypto.randomBytes(4).toString("HEX");
    //Conexão com o banco
    await connection("ongs").insert({
      id,
      nome,
      email,
      whatsapp,
      cidade,
      uf
    });
    return response.json({ id });
  }
};
