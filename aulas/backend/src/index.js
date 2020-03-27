const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.unsubscribe(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * GET: Buscar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * Query Params: parâmetros nomeados enviados na rota após o símbolo de interrogação (ex: filtros e paginação)
 * const params = request.query;
 * Route Params: parâmetros utilizados para identificar recursos (ex: 'users/:id')
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle
 * NoSQL: MongoDB, CouchDB
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select('*').where();
 */

app.listen(3333);
