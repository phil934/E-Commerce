<template>
  <div>
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="goBack" />
    <div class="register-panel">
      <van-field v-model="form.userName" label="用户名" icon="clear" placeholder="请输入用户名" required @click-icon="username=''" :error-message="usernameErrorMsg" />
      <van-field v-model="form.userPwd" label="密码" type="password" placeholder="请输入用户密码" required :error-message="passwordErrorMsg" />
    </div>
    <div class="register-button">
      <van-button type="primary" @click="registerAction" size="large" :loading="openLoading">马上注册</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      form: {
        userName: '',
        userPwd: ''
      },
      openLoading: false,
      usernameErrorMsg: '', // 用户名错误时的提示信息
      passwordErrorMsg: ''// 密码错误时的提示信息
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    registerAction () {
      this.checkForm() && this.AxiosRegisteruser()
    },
    AxiosRegisteruser () {
      this.openLoading = true
      this.axios({
        url: '/user/resgister',
        method: 'get',
        data: {
          userName: this.form.userName,
          userPwd: this.form.userPwd
        }
      }).then(res => {
        if (res.data.status === 200) {
          this.openLoading = false
        } else {
          this.openLoading = false
          Toast.fail('注册失败')
        }
      })
    },
    checkForm () {
      let isOk = true
      if (this.form.userName.length < 5) {
        this.usernameErrorMsg = '用户名不能少于5位'
        isOk = false
      } else {
        this.usernameErrorMsg = ''
      }
      if (this.form.userPwd.length < 6) {
        this.passwordErrorMsg = '密码不能少于6位'
        isOk = false
      } else {
        this.passwordErrorMsg = ''
      }

      return isOk
    }
  }
}
</script>

<style>
.register-panel {
  width: 96%;
  border-radius: 5px;
  margin: 20px auto;
  padding-bottom: 80px;
}
.register-button {
  padding-top: 10px;
}
</style>
