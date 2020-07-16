import { cloneDeep } from "lodash";

import { baseSkill, baseNote } from "../common/base-types";

export const abilitiesEnum = {
  STR: "strength",
  CON: "constitution",
  DEX: "dexterity",
  INT: "intelligence",
  WIS: "wisdom",
  CHA: "charisma",
};

export const InitMainState = {
  character: {
    name: "",
    ancestry: "",
    heritage: "",
    class: "",
    level: 1,
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
      ability: "DEX",
    },
    {
      ...cloneDeep(baseSkill),
      name: "arcana",
      ability: "INT",
    },
    {
      ...cloneDeep(baseSkill),
      name: "athletics",
      ability: "STR",
    },
    {
      ...cloneDeep(baseSkill),
      name: "crafting",
      ability: "INT",
    },
    {
      ...cloneDeep(baseSkill),
      name: "deception",
      ability: "CHA",
    },
    {
      ...cloneDeep(baseSkill),
      name: "diplomacy",
      ability: "CHA",
    },
    {
      ...cloneDeep(baseSkill),
      name: "intimidation",
      ability: "CHA",
    },
    {
      ...cloneDeep(baseSkill),
      name: "lore",
      ability: "INT",
    },
    {
      ...cloneDeep(baseSkill),
      name: "medicine",
      ability: "WIS",
    },
    {
      ...cloneDeep(baseSkill),
      name: "nature",
      ability: "WIS",
    },
    {
      ...cloneDeep(baseSkill),
      name: "occultism",
      ability: "INT",
    },
    {
      ...cloneDeep(baseSkill),
      name: "performance",
      ability: "CHA",
    },
    {
      ...cloneDeep(baseSkill),
      name: "religion",
      ability: "WIS",
    },
    {
      ...cloneDeep(baseSkill),
      name: "society",
      ability: "INT",
    },
    {
      ...cloneDeep(baseSkill),
      name: "stealth",
      ability: "DEX",
    },
    {
      ...cloneDeep(baseSkill),
      name: "survival",
      ability: "WIS",
    },
    {
      ...cloneDeep(baseSkill),
      name: "thievery",
      ability: "DEX",
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
    slots: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
    },
    spells: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
    },
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

export const MainReducer = (state, action) => {
  switch (action.type) {
    case "NEW": {
      return cloneDeep(InitMainState);
    }

    case "LOAD": {
      return cloneDeep(action.payload)
    }

    case "NOTES": {
      // action.payload: {
      //     general: boolean,
      //     value: {title: string, text: string} OR {title: string, text: string}[]
      // }
      if (action.payload.general) {
        return {
          ...state,
          notes: {
            ...state.notes,
            general: cloneDeep(action.payload.value),
          },
        };
      } else {
        return {
          ...state,
          notes: {
            ...state.notes,
            other: [...action.payload.value],
          },
        };
      }
    }

    default: {
      return state;
    }
  }
};
