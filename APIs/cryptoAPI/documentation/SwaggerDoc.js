const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    title: "API LDAP - Documentación",
    description: "Documentación para API LDAP",
    version: "1.0.0",
  },
  components: {
    securitySchemes: {
      basicAuth: {
        type: "http",
        scheme: "basic",
      },
    },
  },
  paths: {
    "/crypto/encrypt": {
      post: {
        summary: "Endpoint para encriptar información",
        tags: ["Crypto"],
        security: [
          {
            basicAuth: [],
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  key: {
                    type: "string",
                    example: "Texto de ejemplo",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Encriptación exitosa",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    token: {
                      type: "string",
                      example: "eyJhbGciOiJIUzI.....",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Error al encriptar",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "string",
                      example: "Error de parámetros.",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/crypto/decrypt": {
      post: {
        summary: "Endpoint para desencriptar información",
        tags: ["Crypto"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  key: {
                    type: "string",
                    items: "eyJhbGciOiJIUzI.....",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Descencriptado exitosamente",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "number",
                      example: 200,
                    },
                    message: {
                      type: "string",
                      example:
                        "La información ha sido desencriptada exitosamente",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Error durante el desencriptado",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "string",
                      example: "Ha surgido un error al desencriptar.",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "number",
                      example: 500,
                    },
                    message: {
                      type: "string",
                      example: "Error al desencriptar.",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    // Agrega aquí la documentación para las otras rutas de tu aplicación
    tags: [
      {
        name: "Crypto",
        description:
          "Endpoints relacionados con la encriptación y desencriptación de información.",
      },
    ],
    securityDefinitions: {
      bearerAuth: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
  },
};

module.exports = swaggerDocument;
