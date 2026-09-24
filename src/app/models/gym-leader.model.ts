export interface Pokemon {
  name: string;
  level: number;
}

export interface GymLeader {
  name: string;
  badge: string;
  location: string;
  type: string;
  color: string;
  team: Pokemon[];
  motto: string;
}