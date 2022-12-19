export const swaggerConfig = {
  mode: 'dynamic',
  openapi: {
    info: {
      title: 'Docs ecommmerce api',
      description: 'String',
      version: '3.0.0',
    },
    // externalDocs: Object,
    // servers: [Object],
    // components: Object,
    // security: [Object],
    tags: [
      { name: 'items', description: 'User related end-points' },
      // { name: 'code', description: 'Code related end-points' }
    ],
  }
}

export const swaggerConfigUi = {
  routePrefix: '/docs',
  initOAuth: {},
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (request, reply, next) { next() },
    preHandler: function (request, reply, next) { next() }
  },
  // staticCSP: true,
  transformStaticCSP: (header) => header
}