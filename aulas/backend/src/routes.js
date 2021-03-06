const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const routes = express.Router();

//Session
routes.post("/session", SessionController.create);
//listar ongs
routes.get("/ongs", OngController.index);
//criar ongs
routes.post("/ongs", OngController.create);
//criar incident
routes.post("/incidents", IncidentController.create);
//listar incident
routes.get("/incidents", IncidentController.index);
//deletar incident
routes.delete("/incidents/:id", IncidentController.delete);
//Profile
routes.get("/profile", ProfileController.index);

module.exports = routes;
