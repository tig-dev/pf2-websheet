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
  armor_penalty: false,
};

export const baseFeat: featType = {
  name: "",
  type: null,
  level: 0,
  traits: [],
  description: "",
};

export const baseSpell: spellType = {
  name: "",
  level: "cantrip",
  traits: [],
  description: "",
  actions: "one-action",
};

export const baseNote: noteType = {
  id: 0,
  title: "",
  text: "",
};

export const baseItem: itemType = {
  name: "",
  level: 0,
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
  description: "",
  actions: "one-action",
  traits: [],
  damage: "slashing",
  atk_bonus: 0,
  atk_misc: 0,
  prof: "U",
  dice: {
    count: 1,
    sides: 6,
  },
  dmg_bonus: 0,
  dmg_misc: 0,
  crit_effect: false,
};

export const mainStateDefault: mainStateType = {
  character: {
    name: "",
    portrait: "",
    ancestry: "",
    heritage: "",
    class: "Commoner",
    background: "",
    diety: "",
    alignment: "N",
    size: "medium",
    traits: "",
    level: 1,
    exp: 0,
    hero_points: 0,
    details: "",
    languages: "Common",
    weapon_training: [
      {
        name: "simple",
        training: "U",
      },
      {
        name: "martial",
        training: "U",
      },
      {
        name: "unarmed",
        training: "U",
      },
      {
        name: "other",
        training: "U",
      },
    ],
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
      armor_penalty: true,
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
      armor_penalty: true,
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
      armor_penalty: true,
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
      armor_penalty: true,
    },
  ],
  combat: {
    hp: {
      current: 0,
      max: 0,
      temp: 0
    },
    armor: {
      ac_bonus: 0,
      check_penalty: 0,
      dex_cap: null,
      group: "none",
      misc_bonus: 0,
      speed_penalty: 0,
      training: "U",
      traits: [],
      type: "unarmored",
    },
    class_dc: null,
    perception: {
      ability: "WIS",
      training: "U",
      item_bonus: 0,
      misc_bonus: 0,
      senses: ""
    },
    saves: {
      fortitude: {
        training: "U",
        itemBonus: 0,
        miscBonus: 0
      },
      reflex: {
        training: "U",
        itemBonus: 0,
        miscBonus: 0
      },
      will: {
        training: "U",
        itemBonus: 0,
        miscBonus: 0
      }
    },
    speed: {
      base: 25,
      misc_bonus: 0,
      types: ""
    },
    attacks: {
      melee: [],
      ranged: [],
    },
  },
  spells: {
    cantrip_level: 1,
    spell_training: "U",
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
