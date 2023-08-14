import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { organizationValidationSchema } from 'validationSchema/organizations';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getOrganizations();
    case 'POST':
      return createOrganization();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getOrganizations() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.organization
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'organization'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createOrganization() {
    await organizationValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.attachment?.length > 0) {
      const create_attachment = body.attachment;
      body.attachment = {
        create: create_attachment,
      };
    } else {
      delete body.attachment;
    }
    if (body?.grenade?.length > 0) {
      const create_grenade = body.grenade;
      body.grenade = {
        create: create_grenade,
      };
    } else {
      delete body.grenade;
    }
    if (body?.map?.length > 0) {
      const create_map = body.map;
      body.map = {
        create: create_map,
      };
    } else {
      delete body.map;
    }
    if (body?.mission?.length > 0) {
      const create_mission = body.mission;
      body.mission = {
        create: create_mission,
      };
    } else {
      delete body.mission;
    }
    if (body?.pass?.length > 0) {
      const create_pass = body.pass;
      body.pass = {
        create: create_pass,
      };
    } else {
      delete body.pass;
    }
    if (body?.weapon?.length > 0) {
      const create_weapon = body.weapon;
      body.weapon = {
        create: create_weapon,
      };
    } else {
      delete body.weapon;
    }
    const data = await prisma.organization.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
