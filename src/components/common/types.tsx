import { mainReducerActionType } from "../app/main-reducer";

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
export type armorTypes = "unarmored" | "light" | "medium" | "heavy";
export type armorGroups = "leather" | "composite" | "chain" | "plate" | "none";
export type actionCategory =
  | "free"
  | "reaction"
  | "one-action"
  | "two-action"
  | "three-action";
export type physicalDamageTypes =
  | "bludgeoning"
  | "piercing"
  | "slashing"
  | "precision";
export type magicDamageTypes =
  | "acid"
  | "cold"
  | "electricity"
  | "fire"
  | "sonic"
  | "positive"
  | "negative"
  | "force"
  | "good"
  | "evil"
  | "lawful"
  | "chaotic"
  | "mental"
  | "poison"
  | "bleed";

export enum abilities {
  STR = "strength",
  CON = "constitution",
  DEX = "dexterity",
  INT = "intelligence",
  WIS = "wisdom",
  CHA = "charisma",
}

export type dispatchActionType = {
  type: mainReducerActionType;
  payload?: any;
};

export type dcType = {
  ability: ability;
  training: training;
  misc_bonus: number;
};

export type actionType = {
  name: string;
  traits: string[];
  description: string;
  actions: actionCategory;
};

export type skillType = {
  name: string;
  training: training;
  ability: abilities | null;
  misc_bonus: number;
  armor_penalty: boolean;
};

export type featType = {
  name: string;
  type: featCategory | null;
  level: number;
  traits: string[];
  description: string;
};

export type spellType = actionType & {
  level: spellLevel;
  dice?: dieType[];
  damage?: magicDamageTypes;
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
  level: number;
  quantity: number;
  bulk: number | "L";
  cost: costType;
  description: string;
  location: itemLocation;
};

export type containerItemType = itemType & {
  contains: itemType[];
};

export type attackType = actionType & {
  ability: ability;
  atk_bonus: number;
  atk_misc: number;
  prof: training;
  dice: dieType;
  damage: physicalDamageTypes;
  dmg_bonus: number;
  dmg_misc: number;
  crit_effect: boolean;
};

export type characterType = {
  name: string;
  portrait: string;
  ancestry: string;
  heritage: string;
  class: string;
  level: number;
  exp: number;
  hero_points: number;
  languages: string;
  details: string;
  weapon_training: {
    simple: training;
    martial: training;
    other: {
      name: string;
      training: training;
    }[];
  };
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

export type savingRollType = {
  training: training;
  itemBonus: number;
  miscBonus: number;
};

export type hpType = {
  max: number;
  current: number;
  temp: number;
};

export type speedType = {
  base: number;
  types: string;
  misc_bonus: number;
};

export type perceptionType = dcType & {
  item_bonus: number;
  senses: string;
};

export type saveSetType = {
  fortitude: savingRollType;
  reflex: savingRollType;
  will: savingRollType;
};

export type shieldType = {
  bonus: number;
  hardness: number;
  max_hp: number;
  hp: number;
  bt: number;
};

export type armorType = {
  type: armorTypes;
  group: armorGroups;
  training: training;
  ac_bonus: number;
  dex_cap: number | null;
  misc_bonus: number;
  check_penalty: number;
  speed_penalty: number;
  traits: string[];
  shield?: shieldType;
};

export type combatType = {
  hp: hpType;
  class_dc: dcType | null;
  speed: speedType;
  perception: perceptionType;
  saves: saveSetType;
  armor: armorType;
  attacks: attacksListType;
};

export type spellsListType = {
  cantrip_level: number;
  casting_ability: ability | null;
  spell_training: training;
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
