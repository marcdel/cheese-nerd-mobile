export const CHEESE_SELECTED = 'CHEESE_SELECTED'

export function cheeseSelected(key) {
  return {
    type: CHEESE_SELECTED,
    key: key,
  };
}
