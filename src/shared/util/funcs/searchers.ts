import { AutoCompleteOption } from "../interfaces/common.interface";

export const findStateIdByValue = (
  stateCodes: AutoCompleteOption[],
  label: string
) => {
  for (let i = 0; i < stateCodes.length; i++) {
    if (label === stateCodes[i].label) {
      return String(stateCodes[i].value);
    }
  }
};

// Binary search.
export const findStateValuebyId = (
  stateCodes: AutoCompleteOption[],
  id: number
) => {
  let left = 0;
  let right = stateCodes.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (stateCodes[middle].value === id) {
      return stateCodes[middle].label;
    } else if ((stateCodes[middle].value as number) < id) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return null;
};
