import { actions } from './modules'

export type State = Readonly<{
  a: number
}>
export type StateProps = State

export type DispatchProps = Readonly<{
  actions: typeof actions
}>
