import {
  GET_USERINFO,
  RECORD_USERINFO,
  LOGOUT
} from './mutation-types'
import { setStore, getStore } from '../utils/storage'
export default {
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    setStore('userInfo', info)
  },
  // 获取用户信息
  [GET_USERINFO] (state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return
    }
    if (!state.login) {
      return
    }
    if (!info.message) {
      state.userInfo = {...info}
    } else {
      state.userInfo = null
    }
  },
  // 注销登陆状态
  [LOGOUT] (state, info) {
    state.userInfo = null
    state.login = false
  }
}
