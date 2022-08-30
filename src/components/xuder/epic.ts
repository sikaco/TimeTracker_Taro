import { combineEpics } from 'redux-observable'
import { epic as initEpic } from '$views/init-page/modules'

export const rootEpic = combineEpics(initEpic)
