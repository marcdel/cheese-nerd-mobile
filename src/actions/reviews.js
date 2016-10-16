export const REVIEW_ADDED = 'REVIEW_ADDED'

export function reviewAdded(review) {
  return {
    type: REVIEW_ADDED,
    cheeseId: review.cheeseId,
    notes: review.notes,
    rating: review.rating
  };
}
