const functions = require('firebase-functions');

exports.ssrapp = functions.https.onRequest(async (req, res) => {
  const { app } = await import('../../dist/multikart-frontend/server/server.mjs');
  return app()(req, res);
});