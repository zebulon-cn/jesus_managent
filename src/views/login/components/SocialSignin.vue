<template>
  <div class="social-signup-container">
    <div class="sign-btn" @click="wechatHandleClick('wechat')" >
      <div title="微信"><span class="wx-svg-container pointer"><svg-icon icon-class="wechat" class="icon" /></span></div>
    </div>
    <div class="sign-btn" @click="tencentHandleClick('tencent')" >
      <div title="QQ"><span class="qq-svg-container pointer"><svg-icon icon-class="qq" class="icon" /></span></div>
    </div>
  </div>
</template>

<script>
import openWindow from '@/utils/open-window'

export default {
  name: 'SocialSignin',
  methods: {
    wechatHandleClick(thirdpart) {
      // alert('暂未开通')
      // this.$store.commit('SET_AUTH_TYPE', thirdpart)
      // const appid = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect'
      const url = "http://m.qpic.cn/psb?/V14Yisr94XOPKN/wU6hGLEBhFtSZgHtCMS5Zq2buT0BybJLEi43lIAxQeM!/b/dIQAAAAAAAAA&bo=aAFeAQAAAAADBxQ!&rf=viewer_4";
      openWindow(url, thirdpart, 540, 540)
    },
    tencentHandleClick(thirdpart) {
      alert('暂未开通')
      // this.$store.commit('SET_AUTH_TYPE', thirdpart)
      // const client_id = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirect_uri
      // openWindow(url, thirdpart, 540, 540)
    }
  }
}
</script>

<style lang="scss" scoped>
  .social-signup-container {
    margin: 20px auto;
    .sign-btn {
      display: inline-block;
      padding-left: 20px;
      /*cursor: pointer;*/
    }
    .icon {
      color: #fff;
      font-size: 24px;
      margin-top: 8px;
    }
    .wx-svg-container,
    .qq-svg-container {
      display: inline-block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      padding-top: 1px;
      border-radius: 50%;
      /*margin-bottom: 20px;*/
      /*margin-right: 5px;*/
    }
    .wx-svg-container {
      background-color: #24da70;
    }
    .qq-svg-container {
      background-color: #6BA2D6;
    }
    .dire{
      height: 130px;
    }
  }
</style>
