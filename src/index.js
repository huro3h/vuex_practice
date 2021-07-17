import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'


// Vue.use(Vuex)
//
// function asyncGetCountNum(type) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       let amount = 10
//       switch (type) {
//         case 'one':
//           amount
//           break
//         case 'two':
//           amount = amount * 2
//           break
//         default:
//           amount = amount * 100
//       }
//       resolve({amount})
//     }, 2000)
//   })
// }
//
// const store = new Vuex.Store({
//   // ステート(初期値)
//   state: {
//     count: 10
//   },
//   // ゲッター
//   getters: {
//     double: (state) => state.count * 2,
//     triple: (state) => state.count * 3,
//     multiple: (state, getters) => getters.double * getters.triple
//   },
//   // ミューテーション
//   mutations: {
//     increment(state, payload) {
//       state.count += payload.amount
//     }
//   },
//   // アクション
//   actions: {
//     incrementAsync({commit}, payload) {
//       return asyncGetCountNum(payload.type)
//         .then(data => {
//           console.log(data);
//
//           commit('increment', {
//             amount: data.amount
//           })
//         })
//     }
//     // incrementAction (ctx) {
//     //   ctx.commit('increment') // incrementミューテーションの実行
//     // }
//   }
// })
//
// console.log(store.state.count);
// store.dispatch('incrementAsync', { type: 'two' }).then(() => {
//   console.log(store.state.count);
// })
