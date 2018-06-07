<template>
  <div>
    <!-- header-top start -->
    <!-- ================ -->
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-xs-2 col-sm-6">
            <!-- header-top-first start -->
            <!-- ================ -->
            <div class="header-top-first clearfix">
              <ul class="social-links clearfix">
                <li class="twitter">
                  <a target="_blank" href="http://www.bctest.com">
                    <i class="fa fa-external-link"></i>
                  </a>
                </li>
              </ul>
            </div>
            <!-- header-top-first end -->
          </div>
          <div class="col-xs-10 col-sm-6">
            <!-- header-top-second start -->
            <!-- ================ -->
            <div id="header-top-second" class="clearfix">
              <!-- header top dropdowns start -->
              <!-- ================ -->
              <div class="header-top-dropdown">
                <div v-if="login" class="btn-group dropdown">
                  <button type="button" class="btn dropdown-toggle">
                    <i class="fa fa-user"></i> {{userInfo.info.userName}}
                  </button>
                  <button @click="logout" type="button" class="btn dropdown-toggle">
                    <i class="fa fa-edit"></i> 注销
                  </button>
                </div>
                <div v-else class="btn-group dropdown">
                  <router-link to="/login" tag="button" class="btn dropdown-toggle">
                    <i class="fa fa-user"></i> 登陆
                  </router-link>
                </div>
              </div>
              <!--  header top dropdowns end -->
            </div>
            <!-- header-top-second end -->
          </div>
        </div>
      </div>
    </div>
    <!-- header-top end -->
    <!-- header start (remove fixed class from header in order to disable fixed navigation mode) -->
    <!-- ================ -->
    <header class="header fixed clearfix">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <!-- header-left start -->
            <!-- ================ -->
            <div class="header-left clearfix">
              <!-- logo -->
              <div class="logo">
                  <img id="logo" src="../assets/images/BCTC.png" alt="iDea">
              </div>
              <!-- name-and-slogan -->
              <div class="site-slogan">
                专业权威的APP综合测试平台
              </div>
            </div>
            <!-- header-left end -->
          </div>
          <div class="col-md-9">
            <!-- header-right start -->
            <!-- ================ -->
            <div class="header-right clearfix">
              <!-- main-navigation start -->
              <!-- ================ -->
              <div class="main-navigation animated">
                <!-- navbar start -->
                <!-- ================ -->
                <nav class="navbar navbar-default" role="navigation">
                  <div class="container-fluid">
                    <!-- Toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                    </div>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="navbar-collapse-1">
                      <ul class="nav navbar-nav navbar-right">
                        <li class="active">
                          <router-link to="/home" v-on:click.native="setTitle('首页')"><i class="fa fa-home"></i> 首页</router-link>
                        </li>
                        <!-- mega-menu start -->
                        <li class="dropdown menu">
                          <a class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-cubes"></i> 产品 &amp; 服务</a>
                          <ul class="dropdown-menu">
                            <li class="dropdown">
                              <a>
                                <i class="fa fa-shield"></i> APP安全性测试服务</a>
                              <ul class="dropdown-menu">
                                <li>
                                  <router-link  v-on:click.native="setTitle('购买&服务 / 非支付APP自助测试')" to="/appusual"><i class="fa fa-cog"></i> 非支付APP自助测试</router-link>
                                </li>
                                <li>
                                  <router-link  v-on:click.native="setTitle('购买&服务 / 支付类APP自助测试')" to="/apppay"><i class="fa fa-credit-card"></i> 支付类APP自助测试</router-link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="http://apptest.bctest.com/default.aspx">
                                <i class="fa fa-cogs"></i> APP功能测试服务</a>
                            </li>
                          </ul>
                        </li>
                        <!-- mega-menu end -->
                        <li class="dropdown">
                          <a class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-shopping-cart"></i> 购买</a>
                          <ul class="dropdown-menu">
                            <li>
                              <router-link v-on:click.native="setTitle('购买 / 服务')" to="/shop"><i class="fa fa-automobile"></i> 服务</router-link>
                            </li>
                          </ul>
                        </li>
                        <!-- mega-menu end -->
                        <li class="dropdown">
                          <a class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-user"></i> 我的</a>
                          <ul class="dropdown-menu">
                            <li>
                              <router-link v-on:click.native="setTitle('我的 / 订单')" to="/order"><i class="fa fa-edit"></i> 订单</router-link>
                            </li>
                            <li>
                              <router-link v-on:click.native="setTitle('我的 / 账户')" to="/order"><i class="fa fa-file-text"></i> 账户</router-link>
                            </li>
                          </ul>
                        </li>
                        <!-- mega-menu start -->
                        <li class="dropdown menu">
                          <a class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-institution"></i> 关于</a>
                          <ul class="dropdown-menu">
                            <li>
                              <router-link v-on:click.native="setTitle('关于 / FAQ')" to="/faq"><i class="icon-right-open"></i><i class="fa fa-question-circle"></i> FAQ</router-link>
                            </li>
                            <li>
                              <router-link v-on:click.native="setTitle('关于 / 联系我们')" to="/faq">
                                <i class="icon-right-open"></i>
                                <i class="fa fa-send-o"></i> 联系我们</router-link>
                            </li>
                            <li>
                              <router-link v-on:click.native="setTitle('关于 / 中心简介')" to="/faq">
                                <i class="icon-right-open"></i>
                                <i class="fa fa-building-o"></i> 中心简介</router-link>
                            </li>
                            <li>
                              <router-link v-on:click.native="setTitle('关于 / 中心资质')" to="/faq">
                                <i class="icon-right-open"></i>
                                <i class="fa fa-newspaper-o"></i> 中心资质</router-link>
                            </li>
                            <li>
                              <router-link v-on:click.native="setTitle('关于 / 中心荣誉')" to="/faq">
                                <i class="icon-right-open"></i>
                                <i class="fa fa-mortar-board"></i> 中心荣誉</router-link>
                            </li>
                            <li>
                              <router-link v-on:click.native="setTitle('关于 / 大事记')" to="/faq">
                                <i class="icon-right-open"></i>
                                <i class="fa fa-rocket"></i> 大事记</router-link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <!-- navbar end -->
              </div>
              <!-- main-navigation end -->
            </div>
            <!-- header-right end -->
          </div>
        </div>
      </div>
    </header>
    <!-- header end -->
    <!-- page-intro start-->
    <!-- ================ -->
    <div class="page-intro">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ol class="breadcrumb">
              <li><i class="fa fa-home pr-10"></i> APP综合测试平台{{title}}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- page-intro end -->
  </div>
</template>

<script>

  import {
    mapMutations,
    mapState
  } from 'vuex'
  export default {
    name: 'y-header',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        title: ' / 首页',
      }
    },
    methods: {
      ...mapMutations(['LOGOUT']),
      logout() {
        this.LOGOUT()
        this.$router.push({path: '/home'})
      },
      setTitle(title){
        this.title = ' / '+ title
      }
    },
    computed: {
      ...mapState([
        'login', 'userInfo'
      ]),
    },
    mounted() {
      //Show dropdown on hover only for desktop devices
      //-----------------------------------------------
      var delay = 0,
        setTimeoutConst
      if (Modernizr.mq('only all and (min-width: 768px)') && !Modernizr.touch) {
        $(
          '.main-navigation .navbar-nav>li.dropdown, .main-navigation li.dropdown>ul>li.dropdown'
        ).hover(
          function () {
            var $this = $(this)
            setTimeoutConst = setTimeout(function () {
              $this.addClass('open').slideDown()
              $this.find('.dropdown-toggle').addClass('disabled')
            }, delay)
          },
          function () {
            clearTimeout(setTimeoutConst)
            $(this).removeClass('open')
            $(this)
              .find('.dropdown-toggle')
              .removeClass('disabled')
          }
        )
      }

      // Fixed header
      //-----------------------------------------------
      var headerTopHeight = $(".header-top").outerHeight(),
        headerHeight = $("header.header.fixed").outerHeight();
      $(window).scroll(function () {
        if (($(".header.fixed").length > 0)) {
          if (($(this).scrollTop() > headerTopHeight + headerHeight) && ($(window).width() > 767)) {
            $("body").addClass("fixed-header-on");
            $(".header.fixed").addClass('animated object-visible fadeInDown');
            if ($(".banner:not(.header-top)").length > 0) {
              $(".banner").css("marginTop", (headerHeight) + "px");
            } else if ($(".page-intro").length > 0) {
              $(".page-intro").css("marginTop", (headerHeight) + "px");
            } else if ($(".page-top").length > 0) {
              $(".page-top").css("marginTop", (headerHeight) + "px");
            } else {
              $("section.main-container").css("marginTop", (headerHeight) + "px");
            }
          } else {
            $("body").removeClass("fixed-header-on");
            $("section.main-container").css("marginTop", (0) + "px");
            $(".banner").css("marginTop", (0) + "px");
            $(".page-intro").css("marginTop", (0) + "px");
            $(".page-top").css("marginTop", (0) + "px");
            $(".header.fixed").removeClass('animated object-visible fadeInDown');
          }
        };
      });
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
