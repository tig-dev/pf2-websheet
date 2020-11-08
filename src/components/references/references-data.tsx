export type refActionType = {
  name: string;
  category:
    | "Basic (Common)"
    | "Basic (Uncommon)"
    | "Basic (Situational)"
    | "Skill"
    | "Hero Points"
    | "General Exploration"
    | "Skill Exploration"
    | "Downtime";
  description: string;
  actions:
    | "1"
    | "2"
    | "3"
    | "Free"
    | "Reaction"
    | "1+"
    | "2+"
    | "3+"
    | "1 + Reaction";
  page_num: number;
  detail?: string;
  skill?:
    | "Acrobatics"
    | "Arcana"
    | "Athletics"
    | "Crafting"
    | "Deception"
    | "Diplomacy"
    | "Intimidation"
    | "Lore"
    | "Medicine"
    | "Nature"
    | "Occultism"
    | "Performance"
    | "Religion"
    | "Society"
    | "Stealth"
    | "Theivery";
  concentrate?: boolean;
  trained_only?: boolean;
  secret_check?: boolean;
};

/*
BLANK ACTION EXAMPLE:
  {
    name: "",
    category: "",
    description: "",
    actions: "",
    page_num: 0,
    detail: "",
    skill: "",
    concentrate: false,
    trained_only: false,
    secret_check: false
  },
*/

const refActions: refActionType[] = [
  {
    name: "Stride",
    category: "Basic (Common)",
    description: "Move up to your Speed.",
    actions: "1",
    page_num: 471,
    detail: "(move)",
  },
  {
    name: "Strike",
    category: "Basic (Common)",
    description: "Attack with a weapon or unarmed attack.",
    actions: "1",
    page_num: 471,
    detail: "(attack)",
  },
];

export default refActions;
