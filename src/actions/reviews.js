export const REVIEW_ADDED = 'REVIEW_ADDED'

export function reviewAdded(review, ratings) {
  const newAverage = recalculateAverage(review.rating, ratings);

  return {
    type: REVIEW_ADDED,
    cheeseId: review.cheeseId,
    notes: review.notes,
    rating: review.rating,
    newAverage: newAverage
  };
}

function recalculateAverage(newRating, ratings) {
  ratings[newRating]++;

  let numerator = 0;
  for(let i = 1; i <= 5; i++) {
    numerator = numerator + (i * ratings[i]);
  }

  let denominator = 0;
  for(let i = 1; i <= 5; i++) {
    denominator = denominator + ratings[i];
  }

  return Math.round(numerator / denominator);
}
