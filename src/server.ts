import fastify from 'fastify';
import { PrismaClient } from '@prisma/client'

const server = fastify();
const prisma = new PrismaClient();

import user from './routes/user';

server.register(user, prisma);

server.listen({
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 3333
}).then((address) => {
    console.log(`Server is listening at ${address}`);
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
