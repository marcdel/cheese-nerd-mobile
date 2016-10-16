export const TAB_CHANGED = 'TAB_CHANGED'

export function tabChanged(tab) {
  return {
    type: TAB_CHANGED,
    tab: tab,
  };
}
