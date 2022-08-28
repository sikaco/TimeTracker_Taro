import { actions } from './modules'

export type State = Readonly<{}>
export type StateProps = State

export type DispatchProps = Readonly<{
  actions: typeof actions
}>
