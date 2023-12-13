import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';

const user = (server: FastifyInstance, prisma: PrismaClient, done: () => void) => {

    server.get('/user', async (request, reply) => {
        const users = await prisma.user.findMany();
        return reply.status(200).send(users);
    });

    server.post('/user', async (request, reply) => {
        const { name, email, password } = request.body as any;
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });
        return reply.status(201).send(newUser);
    });

    done();
};

export default user;
