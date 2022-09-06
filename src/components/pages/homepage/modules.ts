import { map, Observable, throttleTime, timeout } from 'rxjs'
import { handleActions, createAction, Action } from 'redux-actions'
import { combineEpics, ofType } from 'redux-observable'
import { Store } from 'redux'
import { EpicInput, GlobalState, noOpAction } from '$xuder'
// import { throwError } from 'lib/throw-error'
// import { hasPayload } from 'lib/truthiness'
import { namespaceFnGenerator } from '$components/utils'
import { State } from './types'
// import * as req from './requests'
// import * as utils from './utils'

const { namespace, success, failure } = namespaceFnGenerator('HOMEPAGE')

const defaultState: State = {
  a: 1,
}

const getState = (store: Store<GlobalState>) => {
  // return store.getState().ui.newOrganizationPortal
  return {}
}

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
  test: createAction<number>(namespace('TEST')),
  testSuccess: createAction<any>(success('TEST')),
}

export const reducer = handleActions<State, any>(
  {
    // [`${actions.getProjectTagsSuccess}`]: handleGetProjectTagsSuccess,
    // [`${actions.getProjectsCountSuccess}`]: handleGetProjectsCountSuccess
    // [`${actions.test}`]: (state: State, action: Action<any>) => {
    //   return {
    //     ...state,
    //     a: action.payload,
    //   }
    // },
    [`${actions.testSuccess}`]: (state: State, action: Action<number>) => {
      const payload = action.payload

      console.log('payload', action)

      return {
        ...state,
        a: payload + 1,
      }
    },
  },
  defaultState,
)

export const epic = combineEpics<any>(
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
  //       // throwError(err)
  //         return Observable.of(actions.getProjectTagsFailure(err))
  //       })
  //   })
  // },

  (action$: EpicInput<number>) => action$.pipe(
    ofType(actions.test),
    map((action: Action<number>) => {
      console.log('payload1', action)

      return actions.testSuccess(action.payload)
    }),
  ),
// {
//     console.log('action$action$', action$)
//     return action$.ofType(`${actions.test}`).map(actions.testSuccess)
//   },
)
