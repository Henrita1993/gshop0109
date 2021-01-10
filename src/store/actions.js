
/*
通过mutation间接更新state多个方法
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS

} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'

export default {
  //异步获取地址
   async getAddress({commit,state}){
    const geohash = state.latitude + ',' + state.longitude
    const  result = await reqAddress(geohash)
     // console.log(result)
     //提交一个mutation
     if (result.code ===0){
      const address = result.data
       commit(RECEIVE_ADDRESS,{address})
     }
  },


  // 异步获取分类列表
  async getCategorys({commit}){
    // 发送异步ajas请求
    const  result = await reqFoodCategorys()
    if (result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }

  },

  // 异步获取商家列表
  async getShops({commit,state}){
     const {latitude,longitude}=state
    const  result = await reqShops(latitude,longitude)
    if (result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }

  }
}
