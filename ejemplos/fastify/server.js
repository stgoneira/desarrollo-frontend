// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// CORS
fastify.register( require('@fastify/cors'), {} );

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// para probar en cliente recibir datos por GET y por POST 
// fetch('http://localhost:3000/form', {method: 'POST', body: JSON.stringify({a:'uno', b:'dos'}), headers: {'Content-Type': 'application/json'} }).then(r=>r.json()).then(d=>console.dir(d));
fastify.post('/form', async (request, reply) => {
  const datosGET  = request.query;
  const datosPOST = request.body;
  return { datosGET, datosPOST };
});

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