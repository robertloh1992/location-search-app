export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
export const CLEAR_SEARCH_QUERY = 'CLEAR_SEARCH_QUERY'

export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS'
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS'

export const LOG_SEARCH_ACTION = 'LOG_SEARCH_ACTION'

//
// ─── SET SEARCH QUERY ─────────────────────────────────────────────────────────────────
//
export const setSearchQuery = query => ({ type: SET_SEARCH_QUERY, query })

//
// ─── SET SEARCH QUERY ─────────────────────────────────────────────────────────────────
//
export const clearSearchQuery = () => ({ type: CLEAR_SEARCH_QUERY })

//
// ─── FETCH SEARCH RESULTS ─────────────────────────────────────────────────────────────────
//
export const fetchSearchResults = query => ({ type: FETCH_SEARCH_RESULTS, query })

//
// ─── SET SEARCH RESULTS ─────────────────────────────────────────────────────────────────
//
export const setSearchResults = (results, isEmptyResult) => ({
  type: SET_SEARCH_RESULTS,
  results,
  isEmptyResult,
})

//
// ─── CLEAR SEARCH RESULTS ─────────────────────────────────────────────────────────────────
//
export const clearSearchResults = () => ({ type: CLEAR_SEARCH_RESULTS })

//
// ─── LOG SEARCH ACTION ─────────────────────────────────────────────────────────────────
//
export const logSearchAction = (query, results) => ({ type: LOG_SEARCH_ACTION, query, results })
