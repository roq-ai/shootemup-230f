const mapping: Record<string, string> = {
  attachments: 'attachment',
  grenades: 'grenade',
  loadouts: 'loadout',
  maps: 'map',
  missions: 'mission',
  organizations: 'organization',
  passes: 'pass',
  users: 'user',
  weapons: 'weapon',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
