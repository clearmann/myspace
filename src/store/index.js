import { createStore } from 'vuex';
import ModuleUser from './user';
export default createStore({
  state: {//存储所有数据
  },
  getters: {//获取state内容，需要简单计算
  },
  mutations: {
  },
  actions: {//各种操作
  },
  modules: {
    user: ModuleUser,
  }
})