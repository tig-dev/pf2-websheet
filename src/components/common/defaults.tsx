import { cloneDeep } from "lodash";

import {
  skillType,
  featType,
  spellType,
  noteType,
  itemType,
  attackType,
  mainStateType,
  abilities,
} from "./types";

export const baseSkill: skillType = {
  name: "",
  training: "U",
  ability: null,
  misc_bonus: 0,
};

export const baseFeat: featType = {
  name: "",
  type: null,
  level: 0,
  traits: [],
  description: "",
  action: false,
  action_cost: 0,
};

export const baseSpell: spellType = {
  name: "",
  level: "cantrip",
  traits: [],
  description: "",
  action_cost: 1,
};

export const baseNote: noteType = {
  id: 0,
  title: "",
  text: "",
};

export const baseItem: itemType = {
  name: "",
  quantity: 1,
  bulk: 0.0,
  cost: {
    count: 0,
    coin: "gp",
  },
  description: "",
  location: "other",
};

export const baseAttack: attackType = {
  name: "",
  ability: "STR",
  atk_bonus: 0,
  atk_misc: 0,
  prof: "U",
  dice: {
    count: 1,
    sides: 6,
  },
  dmg_bonus: 0,
  dmg_misc: 0,
};

export const mainStateDefault: mainStateType = {
  character: {
    name: "",
    ancestry: "",
    heritage: "",
    class: "",
    level: 1,
    hero_points: 0,
    abilities: {
      strength: 10,
      constitution: 10,
      dexterity: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
  },
  feats: {
    class: [],
    general: [],
    skill: [],
    ancestry: [],
    heritage: [],
    bonus: [],
  },
  skills: [
    {
      ...cloneDeep(baseSkill),
      name: "acrobatics",
      ability: abilities.DEX,
    },
    {
      ...cloneDeep(baseSkill),
      name: "arcana",
      ability: abilities.INT,
    },
    {
      ...cloneDeep(baseSkill),
      name: "athletics",
      ability: abilities.STR,
    },
    {
      ...cloneDeep(baseSkill),
      name: "crafting",
      ability: abilities.INT,
    },
    {
      ...cloneDeep(baseSkill),
      name: "deception",
      ability: abilities.CHA,
    },
    {
      ...cloneDeep(baseSkill),
      name: "diplomacy",
      ability: abilities.CHA,
    },
    {
      ...cloneDeep(baseSkill),
      name: "intimidation",
      ability: abilities.CHA,
    },
    {
      ...cloneDeep(baseSkill),
      name: "lore",
      ability: abilities.INT,
    },
    {
      ...cloneDeep(baseSkill),
      name: "medicine",
      ability: abilities.WIS,
    },
    {
      ...cloneDeep(baseSkill),
      name: "nature",
      ability: abilities.WIS,
    },
    {
      ...cloneDeep(baseSkill),
      name: "occultism",
      ability: abilities.INT,
    },
    {
      ...cloneDeep(baseSkill),
      name: "performance",
      ability: abilities.CHA,
    },
    {
      ...cloneDeep(baseSkill),
      name: "religion",
      ability: abilities.WIS,
    },
    {
      ...cloneDeep(baseSkill),
      name: "society",
      ability: abilities.INT,
    },
    {
      ...cloneDeep(baseSkill),
      name: "stealth",
      ability: abilities.DEX,
    },
    {
      ...cloneDeep(baseSkill),
      name: "survival",
      ability: abilities.WIS,
    },
    {
      ...cloneDeep(baseSkill),
      name: "thievery",
      ability: abilities.DEX,
    },
  ],
  combat: {
    attacks: {
      melee: [],
      ranged: [],
    },
  },
  spells: {
    cantrip_level: 1,
    casting_ability: null,
    slots: [
      {
        level: "cantrip",
        max: 0,
        unused: 0,
      },
      {
        level: 1,
        max: 0,
        unused: 0,
      },
      {
        level: 2,
        max: 0,
        unused: 0,
      },
      {
        level: 3,
        max: 0,
        unused: 0,
      },
      {
        level: 4,
        max: 0,
        unused: 0,
      },
      {
        level: 5,
        max: 0,
        unused: 0,
      },
      {
        level: 6,
        max: 0,
        unused: 0,
      },
      {
        level: 7,
        max: 0,
        unused: 0,
      },
      {
        level: 8,
        max: 0,
        unused: 0,
      },
      {
        level: 9,
        max: 0,
        unused: 0,
      },
      {
        level: 10,
        max: 0,
        unused: 0,
      },
    ],
    spells: [],
  },
  inventory: {
    bulk: {
      current: 0.0,
      encumbered: 5.0,
      max: 8.0,
    },
    coin: {
      copper: 0,
      silver: 0,
      gold: 15,
      platinum: 0,
    },
    worn: [],
    readied: [],
    other: [],
    containers: [],
  },
  notes: {
    general: {
      ...cloneDeep(baseNote),
      title: "General Notes",
      text: "Here are your general notes!",
    },
    other: [],
  },
};
