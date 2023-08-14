import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { passValidationSchema } from 'validationSchema/passes';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.pass
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getPassById();
    case 'PUT':
      return updatePassById();
    case 'DELETE':
      return deletePassById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPassById() {
    const data = await prisma.pass.findFirst(convertQueryToPrismaUtil(req.query, 'pass'));
    return res.status(200).json(data);
  }

  async function updatePassById() {
    await passValidationSchema.validate(req.body);
    const data = await prisma.pass.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deletePassById() {
    const data = await prisma.pass.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
