export const CHEESES_FILTERED = 'CHEESES_FILTERED'
export const QUERY_CHANGED = 'QUERY_CHANGED'

export function cheesesFiltered(cheeses) {
  return {
    type: CHEESES_FILTERED,
    cheeses: cheeses,
  };
}

export function queryChanged(query) {
  return {
    type: QUERY_CHANGED,
    query: query,
  };
}
