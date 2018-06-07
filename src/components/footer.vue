<template>
	<footer id="footer">
		<!-- .footer start -->
		<!-- ================ -->
		<div class="footer">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="footer-content">
							<div class="logo-footer">
								<img id="logo-footer" src="../assets/images/logo-foot.png" alt="">
							</div>
							<div class="row">
								<div class="col-sm-6">
									<p>银行卡检测中心（以下简称中心）经中国人民银行总行批准成立于1998年，2013年建成“国家金融IC卡安全检测中心”。主营业务是依据国际、国内和金融等行业有关标准规范，为全球银行卡和电子支付产业各方提供IC卡芯片、卡片、受理终端机具、移动支付和支付系统等的功能性及安全性检测评估服务，以及专业化的咨询、培训等服务。</p>
								</div>
								<div class="col-sm-6">
									<ul class="list-icons">
										<li>
											<i class="fa fa-map-marker pr-10"></i> 北京市石景山区实兴大街30号院18号楼</li>
										<li>
											<i class="fa fa-phone pr-10"></i> 010-1234567890</li>
										<li>
											<i class="fa fa-fax pr-10"></i> 010-1234567891 </li>
										<li>
											<i class="fa fa-envelope-o pr-10"></i> info@bctest.com</li>
									</ul>
								</div>
							</div>
							<a href="http://www.bctest.com" class="link">
								<span>了解更多</span>
							</a>
						</div>
					</div>
					<div class="space-bottom hidden-lg hidden-xs"></div>
					<div class="col-sm-6 col-md-2">
						<div class="footer-content">
							<h2>链接</h2>
							<nav>
								<ul class="nav nav-pills nav-stacked">
									<li class="active">
										<router-link to="/home">主页</router-link>
									</li>
									<li>
										<router-link to="/faq">faq</router-link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="col-sm-6 col-md-3 col-md-offset-1">
						<div class="footer-content">
							<h2>最近合作伙伴</h2>
						</div>
					</div>
				</div>
				<div class="space-bottom hidden-lg hidden-xs"></div>
			</div>
		</div>
		<!-- .footer end -->

		<!-- .subfooter start -->
		<!-- ================ -->
		<div class="subfooter">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<p>Copyright &copy; 2018. Bank Card Test Center. All rights reserved.</p>
					</div>
					<div class="col-md-6">
						<nav class="navbar navbar-default" role="navigation">
							<!-- Toggle get grouped for better mobile display -->
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-2">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<!-- .subfooter end -->

	</footer>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'y-footer',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
