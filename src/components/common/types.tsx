export type training = "U" | "T" | "E" | "M" | "L";
export type ability = "STR" | "CON" | "DEX" | "INT" | "WIS" | "CHA";
export type spellLevel = "cantrip" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type featCategory =
  | "general"
  | "skill"
  | "ancestry"
  | "heritage"
  | "class"
  | "bonus";
export type dieType = { count: number; sides: number };
export type costType = { count: number; coin: "cp" | "sp" | "gp" | "pp" };
export type itemLocation = "worn" | "readied" | "other";

export enum abilities {
  STR = "strength",
  CON = "constitution",
  DEX = "dexterity",
  INT = "intelligence",
  WIS = "wisdom",
  CHA = "charisma",
}

export type skillType = {
  name: string;
  training: training;
  ability: abilities | null;
  misc_bonus: number;
};

export type featType = {
  name: string;
  type: featCategory | null;
  level: number;
  traits: string[];
  description: string;
  action: boolean;
  action_cost?: number;
};

export type spellType = {
  name: string;
  level: spellLevel;
  traits: string[];
  description: string;
  action_cost: number;
};

export type spellSlotType = {
  level: spellLevel;
  max: number;
  unused: number;
};

export type noteType = {
  id: number;
  title: string;
  text: string;
};

export type itemType = {
  name: string;
  quantity: number;
  bulk: number | "L";
  cost: costType;
  description: string;
  location: itemLocation;
};

export type containerItemType = itemType & {
  contains: itemType[];
};

export type attackType = {
  name: string;
  ability: ability;
  atk_bonus: number;
  atk_misc: number;
  prof: training;
  dice: dieType;
  dmg_bonus: number;
  dmg_misc: number;
};

export type characterType = {
  name: string;
  ancestry: string;
  heritage: string;
  class: string;
  level: number;
  hero_points: number;
  abilities: {
    strength: number;
    constitution: number;
    dexterity: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
};

export type featsList = {
  class: featType[];
  general: featType[];
  skill: featType[];
  ancestry: featType[];
  heritage: featType[];
  bonus: featType[];
};

export type attacksListType = {
  melee: attackType[];
  ranged: attackType[];
};

export type combatType = {
  attacks: attacksListType;
};

export type spellsListType = {
  cantrip_level: number;
  casting_ability: ability | null;
  slots: spellSlotType[];
  spells: spellType[];
};

export type inventoryType = {
  bulk: {
    current: number;
    encumbered: number;
    max: number;
  };
  coin: {
    copper: number;
    silver: number;
    gold: number;
    platinum: number;
  };
  worn: itemType[];
  readied: itemType[];
  other: itemType[];
  containers: containerItemType[];
};

export type notesListType = {
  general: noteType;
  other: noteType[];
};

export type mainStateType = {
  character: characterType;
  feats: featsList;
  skills: skillType[];
  combat: combatType;
  spells: spellsListType;
  inventory: inventoryType;
  notes: notesListType;
};
