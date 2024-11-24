import { FETCH_SEARCH_RESULTS, setSearchResults } from '@redux/actions/searchLocationActions'
import { ofType } from 'redux-observable'
import { map } from 'rxjs/operators'

import { getPlaces } from '@utils/data'

const fetchSearchResultsEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_SEARCH_RESULTS),
    map(action => {
      const results = getPlaces()
        .filter(data => data.name.toLowerCase().includes(action.query.toLowerCase()))
        .map(data => ({ label: data.name, value: data }))

      return setSearchResults(results, results.length === 0)
    })
  )
}

export const rootEpic = fetchSearchResultsEpic
