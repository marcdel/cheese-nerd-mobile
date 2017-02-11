export const REVIEW_ADDED = 'REVIEW_ADDED'

export function reviewAdded(review) {
  return {
    type: REVIEW_ADDED,
    name: review.name,
    notes: review.notes,
    rating: review.rating,
    age: review.age,
    milkType: review.milkType,
    pasteurization: review.pasteurization,
    region: review.region
  };
}
