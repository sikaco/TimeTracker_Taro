import { combineEpics } from 'redux-observable'
import { epic as homepageEpic } from '$pages/homepage/modules'

export const rootEpic = combineEpics(homepageEpic)
