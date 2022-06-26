// 导入vuex
import vuex from "vuex"
// 导入vue
import Vue from 'vue'
// vue使用vuex
Vue.use(vuex)

//配置vuex
const store = new vuex.Store({
    //在配置的时候需要使用特定的键，来指定我们要定义的共享数据
    state: {
        number: 1
    },
    getters: {
        cNumber: (state) => state.number * 10
    },
    mutations: {
        setNumber(state, payload) {
            state.number += payload.num;
        },
    },
    actions: {
        reduceAsync ({ commit }, payload) {
            window.console.log('num', payload.num)
            setTimeout(() => {
                commit({ type: 'setNumber', num: payload.num })
            }, 2000)
        }
    },
})

//导出
export default store