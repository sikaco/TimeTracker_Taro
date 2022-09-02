import React, { FunctionComponent, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import { GlobalState } from '$xuder/reducer'
import cx from 'classnames'
import { DispatchProps, StateProps } from './types'
import { actions } from './modules'
import './index.scss'

// import { ProjectFilter } from './types'
// import * as utils from './utils'
// import { GTA_OPTIONS_MAP } from './consts'
// import { createMemberAddMenu, mapTagMember2Involver } from './utils'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

export interface OwnProps { }

export type Props = StateProps & DispatchProps & Readonly<OwnProps>

// @connect<StateProps, DispatchProps, OwnProps>(
//   (state: GlobalState): StateProps => {
//     return {}
//   },
//   dispatch => {
//     return {
//       actions: bindActionCreators(actions, dispatch)
//     }
//   }
// )

const cxPrefix = 'organization-portal'

const Index: FunctionComponent<Props> = () => {

  useEffect(() => {
    // console.log('actions.getProjectTags', actions.getProjectTags)
  }, [])

  return <View className="index">1234</View>
}

export default Index
