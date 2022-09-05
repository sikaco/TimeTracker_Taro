import React, { FunctionComponent, useEffect, useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import { GlobalState } from '$xuder/reducer'
import cx from 'classnames'
import { DispatchProps, StateProps } from './types'
import { actions } from './modules'
import './index.scss'

export interface CommonProps { dispatch: any }

export interface OwnProps extends CommonProps {}

export type Props = StateProps & DispatchProps & Readonly<OwnProps>

const cxPrefix = 'organization-portal'

const Index: React.ForwardRefRenderFunction<{}, Props> = (props, ref) => {
  const { actions, a } = props

  useEffect(() => {
    actions.test(1111)
  }, [])

  return <View ref={ref} className="index">{a}</View>
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: GlobalState): StateProps => {
    return state.ui.initPage
  },
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch),
    }
  },
)(React.forwardRef(Index))
