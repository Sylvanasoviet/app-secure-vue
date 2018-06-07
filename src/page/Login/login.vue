<template>
  <!-- page wrapper start -->
  <!-- ================ -->
  <div class="page-wrapper">

    <!-- main-container start -->
    <!-- ================ -->
    <section class="main-container light-translucent-bg">

      <div class="container">
        <div class="row">

          <!-- main start -->
          <!-- ================ -->
          <div class="main col-md-8 col-md-offset-2">

            <!-- logo -->
            <div class="logo">
              <router-link to="/home">
                <img id="logo" src="/static/images/BCTC.png" alt="iDea">
              </router-link>
            </div>
            <hr>
            <div class="tabs-style-2">
              <div class="alert alert-info alert-dismissible" role="alert">
                {{ruleForm.errMsg}}
              </div>
              <!-- Nav tabs -->
              <ul class="nav nav-tabs" role="tablist">
                <li class="active">
                  <a>
                    <i class="fa fa-file-text-o pr-5"></i>登陆</a>
                </li>
                <li>
                  <a>
                    <i class="fa fa-files-o pr-5"></i>注册</a>
                </li>
              </ul>
              <!-- Tab panes -->
              <div class="tab-content padding-top-clear padding-bottom-clear">
                <div class="tab-pane fade in active">
                  <h4 class="space-top">登陆信息</h4>
                  <dl class="dl-horizontal">
                    <dt>账户</dt>
                    <dd>
                      <input type="text"  v-model="ruleForm.userName" class="form-control" placeholder="Enter Account">
                    </dd>
                    <dt>密码</dt>
                    <dd>
                      <input type="password" v-model="ruleForm.userPwd" @keyup.enter="login" class="form-control" placeholder="Password">
                    </dd>
                  </dl>
                  <hr>
                  <button type="submit" @click="login" class="btn btn-default">登陆</button>
                </div>
                <div class="tab-pane fade">
                  <h4 class="space-top">注册信息</h4>
                  <dl class="dl-horizontal">
                    <dt>账户</dt>
                    <dd>
                      <input type="email" class="form-control" placeholder="Enter Account">
                    </dd>
                    <dt>密码</dt>
                    <dd>
                      <input type="password" class="form-control" placeholder="Password">
                    </dd>
                    <dt>确认密码</dt>
                    <dd>
                      <input type="password" class="form-control" placeholder="Confirm">
                    </dd>
                  </dl>
                  <hr>
                  <button type="submit" class="btn btn-default">注册</button>
                </div>
              </div>
            </div>
            <br>
          </div>
          <!-- main end -->

        </div>
      </div>

    </section>
    <!-- main-container end -->
  </div>
  <!-- page-wrapper end -->
</template>
<script>
  import store from '../../store/'
  export default {
    data () {
      return {
        cart: [],
        loginPage: true,
        ruleForm: {
          userName: '',
          userPwd: '',
          errMsg: '请先登录，才能使用本平台'
        },
        registered: {
          userName: '',
          userPwd: '',
          userPwd2: '',
          errMsg: ''
        }
      }
    },
    methods: {
      login () {
        const {userName, userPwd} = this.ruleForm
        if (!userName || !userPwd) {
          this.ruleForm.errMsg = '账号或者密码不能为空!'
        } else {
          let params = {userName, userPwd}

          let expireDays = 1000 * 60 * 60 ;
          this.setCookie('login',true,expireDays); //设置Session
          this.setCookie('userName',userName,expireDays); 
          store.commit('RECORD_USERINFO', {info: {userName, userPwd}})
          //  跳转到
          this.$router.go(-1)
          // userLogin(params).then(res => {
          //   if (res.status === '0') {
          //     if (this.cart.length) {
          //       addCartBatch({productMsg: this.cart}).then(res => {
          //         if (res.status === '1') {
          //           removeStore('buyCart')
          //         }
          //       }).then(this.$router.go(-1))
          //     } else {
          //       this.$router.go(-1)
          //     }
          //   } else {
          //     this.ruleForm.errMsg = res.msg
          //   }
          // })
        }
      },
    },
    components: {
    }
  };

</script>
<style>
  @media (min-width: 768px) {
    .dl-horizontal dt {
      max-width: 70px;
    }
    .dl-horizontal dd {
      margin-left: 100px;
    }
  }

  .tabs-style-2 {
    margin-top: 20px;
    width: 60%;
    padding: 20px;
    -moz-box-shadow: 2px 2px 5px #333333;
    -webkit-box-shadow: 2px 2px 5px #333333;
    box-shadow: 2px 2px 5px #333333;
  }

</style>
