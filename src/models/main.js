import { createAction, createReducer } from 'redux-act'
import { createSagaWatcher } from 'sagas'
import { put, call } from 'redux-saga/effects'

//action creators

export const updateShowsListSaga = createAction('Update Shows List Saga')
export const updateShowsList = createAction('Update Shows List')

//fetches
function fetchShowsList () {
  return fetch('https://gist.githubusercontent.com/jkongie/075ead69b9aaeb45581b995fbeef4ad6/raw/2688f82b789bddbab24875f4395a83aca5909d5a/feed.json')
          .then(response => response.json())
          .then(json => json)
}

//sagas
export const sagas = {
  [updateShowsListSaga]: function* () {
    const data = yield call(fetchShowsList)
    // console.log(data)
    yield put(updateShowsList(data.entries))
  }
}

export const mainSagaWatcher = createSagaWatcher(sagas)

//reducer
export const main = {
  [updateShowsList]: (state, shows) => ({
    ...state,
    shows
  })
}

//initial state
export const mainInitialState = {
  links: [ //menu
    {
      label: 'series',
      linkTo: 'series',
      caption: 'Popular Series'
    },
    {
      label: 'movies',
      linkTo: 'movies',
      caption: 'Popular Movies'
    }
  ],
  shows: []
}

export default createReducer(main, mainInitialState)