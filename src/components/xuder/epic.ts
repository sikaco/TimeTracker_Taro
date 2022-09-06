import { combineEpics } from 'redux-observable'
import { epic as initEpic } from '$pages/init-page/modules'

export const rootEpic = combineEpics(initEpic)
