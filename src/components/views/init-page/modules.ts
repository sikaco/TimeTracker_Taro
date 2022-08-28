import { Observable } from 'rxjs'
import { handleActions, createAction, Action } from 'redux-actions'
import { combineEpics } from 'redux-observable'
import { Store } from 'redux'
import { EpicInput, GlobalState, noOpAction } from '@/xuder'
// import { throwError } from 'lib/throw-error'
// import { hasPayload } from 'lib/truthiness'
import { State } from './types'
// import * as req from './requests'
// import * as utils from './utils'

const defaultState: State = {
  _organizationId: null,
}

const getState = (store: Store<GlobalState>) => {
  // return store.getState().ui.newOrganizationPortal
  return {}
}

const namespace = (v: string) => `INIT_PAGE/${v}`
const failure = (v: string) => namespace(`${v}/FAILURE`)
const success = (v: string) => namespace(`${v}/SUCCESS`)

const handleAssignData = (state: State, action: Action<any>) => {
  return {
    ...state,
    ...action.payload,
  }
}

export const actions = {
  getProjectTags: createAction(namespace('GET_PROJECT_TAGS')),
  getProjectTagsSuccess: createAction<any[]>(success('GET_PROJECT_TAGS')),
  getProjectTagsFailure: createAction<Error>(failure('GET_PROJECT_TAGS')),
}

export const reducer = handleActions<State, any>(
  {
    // [`${actions.getProjectTagsSuccess}`]: handleGetProjectTagsSuccess,
    // [`${actions.getProjectsCountSuccess}`]: handleGetProjectsCountSuccess
  },
  defaultState
)

export const epic = combineEpics<any>()
// (action$: EpicInput<ProjectTagsChangedPayload>) => {
//   return action$.ofType(`${actions.updateByProjectTagsChanged}`).map(actions.getProjectTags)
// },

// (action$: EpicInput<void>, store: Store<GlobalState>) => {
//   return action$.ofType(`${actions.getProjectTags}`).switchMap(() => {
//     const { _organizationId } = getState(store)

//     if (!_organizationId) {
//       return Observable.of()
//     }

//     return sdk.fetch
//       .getProjectTags({ _organizationId })
//       .map(({ result }) => actions.getProjectTagsSuccess(result))
//       .catch(err => {
//         // throwError(err)
//         return Observable.of(actions.getProjectTagsFailure(err))
//       })
//   })
// }
