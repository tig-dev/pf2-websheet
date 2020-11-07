export const getAbilityMod = (mod: number): string => {
  const value = Math.floor(mod / 2) - 5;

  if (value >= 0) {
    return `+${value}`;
  } else {
    return `-${value}`;
  }
};
