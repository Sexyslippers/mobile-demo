import Axios from 'axios'

let host =  ''

Axios.defaults.withCredentials = true

let api = {
  Axios: Axios,
  // 首页
  MAIN: `${host}/aokecity/aoke/user/api/main`,
  COLLECT_STONE: (pointId) => `${host}/aokecity/aoke/user/api/receiver/diamond?pointid=${pointId}`,

  // 算力记录
  RECORD: `${host}/aokecity/aoke/power/api/minerecord`,
  // 我的城堡
  USERINFO: `${host}/aokecity/aoke/user/api/mineinfo`,
  // 积分明细
  DETAIL: `${host}/aokecity/aoke/points/api/minepoints/detail`,
  // 排名
  RANK: `${host}/aokecity/aoke/user/api/rank`,
  // 奥克基地
  EXPLAIN: `${host}/aokecity/aoke/points/api/lastdaypoint`,            //上传图片
  // 邀请朋友
  SHARE: `${host}/aokecity/aoke/user/api/inviteurl`,

  // 签到
  SIGNIN: `${host}/aokecity/aoke/user/api/signin`,

  // 悦跑
  RUN: `${host}/aokecity/aoke/step/api/data`,
  DONATE: (encyptSteps, currentTime) => `${host}/aokecity/aoke/step/api/donate?encyptSteps=${encyptSteps}&currentTime=${currentTime}`,

}

export default api
