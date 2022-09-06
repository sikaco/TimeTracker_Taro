import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import { reducer as homepageReducer, State as homepageState } from '$pages/homepage'

export interface GlobalState {
  readonly router: { location: any }
  readonly ui: {
    readonly homepage: homepageState
  }
}

export const rootReducer = combineReducers<GlobalState>({
  router,
  ui: combineReducers({
    homepage: homepageReducer,
  }),
})
