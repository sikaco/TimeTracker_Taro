import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import { reducer as initPageReducer, State as InitPageState } from '$pages/init-page'

export interface GlobalState {
  readonly router: { location: any }
  readonly ui: {
    readonly initPage: InitPageState
  }
}

export const rootReducer = combineReducers<GlobalState>({
  router,
  ui: combineReducers({
    initPage: initPageReducer,
  }),
})
