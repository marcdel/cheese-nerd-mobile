export const CHEESE_SELECTED = 'CHEESE_SELECTED'
export const REVIEW_CHANGED = 'REVIEW_CHANGED'
export const REVIEW_RESET = 'REVIEW_RESET'

export function cheeseSelected(key) {
  return {
    type: CHEESE_SELECTED,
    key: key,
  }
}

export function currentReviewChanged(review) {
  return {
    type: REVIEW_CHANGED,
    review: review,
  }
}

export function currentReviewReset() {
  return {
    type: REVIEW_RESET,
  }
}
