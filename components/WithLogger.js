import React from 'react'
import { useDispatch } from 'react-redux'

import { logSearchAction } from '@redux/actions/searchLocationActions'

const withLogger = WrappedComponent => {
  return props => {
    const dispatch = useDispatch()
    const logSearchHistory = (query, results) => {
      dispatch(logSearchAction(query, results))
    }

    return <WrappedComponent {...props} logSearchHistory={logSearchHistory} />
  }
}

export default withLogger
