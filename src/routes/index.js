const { Router } = require('express')

const usersRouter = require('./users.routes')
const movieTagsRouter = require("./movie.tags.routes");
const movieNotesRoutes = require("./movie.notes.routes");


const routes = Router();

routes.use('/users', usersRouter);
routes.use("/tags", movieTagsRouter);
routes.use("/notes", movieNotesRoutes);

module.exports = routes  