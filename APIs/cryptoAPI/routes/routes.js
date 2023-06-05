module.exports = function (app) {
  const controller = require("../controllers/controller");
  const swaggerUi = require("swagger-ui-express");
  const swaggerDocument = require("../documentation/SwaggerDoc"); // Importa el objeto swaggerDocument desde el archivo separado

  const routes = [
    { method: "POST", path: "/encrypt", handler: controller.encrypt },
    { method: "POST", path: "/decrypt", handler: controller.decrypt },
    { method: "GET", path: "/ping", handler: controller.ping },
  ];

  routes.forEach(({ method, path, handler }) => {
    app.route(path)[method.toLowerCase()](handler);
  });

  app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(function (req, res, next) {
    res
      .status(404)
      .send({ status: 404, message: "Ocurrió un error en el servidor." });
  });

  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res
      .status(500)
      .send({ status: 500, message: "Ocurrió un error en el servidor." });
  });
};
