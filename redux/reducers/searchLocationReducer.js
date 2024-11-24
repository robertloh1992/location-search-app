import {
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS,
  FETCH_SEARCH_RESULTS,
  LOG_SEARCH_ACTION,
} from '@redux/actions/searchLocationActions'

const initialState = {
  query: '',
  results: [],
  searchedHistory: [],

  isEmptyResult: false,
}

export const searchLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return { ...state, query: action.query, isEmptyResult: false }
    case CLEAR_SEARCH_QUERY:
      return { ...state, query: initialState.query, isEmptyResult: false }
    case SET_SEARCH_RESULTS:
      return { ...state, results: action.results, isEmptyResult: action.isEmptyResult }
    case CLEAR_SEARCH_RESULTS:
      return { ...state, results: initialState.results, isEmptyResult: false }
    case LOG_SEARCH_ACTION:
      return {
        ...state,
        searchedHistory: [
          ...state.searchedHistory,
          { keyword: action.query, results: action.results },
        ],
      }
    default:
      return state
  }
}
