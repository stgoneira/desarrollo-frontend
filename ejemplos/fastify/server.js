// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// soporte para forms application/x-www-form-urlencoded
fastify.register( require('@fastify/formbody'), {} );
// CORS
fastify.register( require('@fastify/cors'), {} );

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// para probar en cliente recibir datos por GET y por POST 
// fetch('http://localhost:3000/form', {method: 'POST', body: JSON.stringify({a:'uno', b:'dos'}), headers: {'Content-Type': 'application/json'} }).then(r=>r.json()).then(d=>console.dir(d));
fastify.route({
  method: ['GET', 'POST'],
  url: '/form',
  handler: (request, reply) => {
    const datosGET  = request.query;
    const datosPOST = request.body;
    return { datosGET, datosPOST };
  }
});

/* ########## FIREBASE ##################### */
// Firestore 
fastify.route({
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  url: '/firestore',
  handler: require('./src/firebase/firestore.js')
});
// Firebase Auth 
fastify.route({
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  url: '/auth/user',
  handler: require('./src/firebase/auth/user.js')
});
fastify.post('/auth/signin', require('./src/firebase/auth/signin'));


// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();