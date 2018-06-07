<!-- tab1组件 -->
<template>
  <div class="tabs-pane">
    <h1 id="forms" class="page-title">支付类APP必要信息提交</h1>
							<div class="alert alert-info alert-dismissible" role="alert">
								<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
								请务必准确以下信息</a>
							</div>
							<br>
							<!-- page-title end -->

							<!-- Forms start -->
							<!-- ============================================================================== -->
							<h2>Basic example</h2>
							<form role="form">
								<div class="form-group">
									<label for="exampleInputEmail1">Email address</label>
									<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
								</div>
								<div class="form-group">
									<label for="exampleInputPassword1">Password</label>
									<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
								</div>
								<div class="form-group">
									<label for="exampleInputFile">File input</label>
									<input type="file" id="exampleInputFile">
									<p class="help-block">Example block-level help text here.</p>
								</div>
								<div class="checkbox">
									<label>
										<input type="checkbox"> Check me out
									</label>
								</div>
								<button type="submit" class="btn btn-default">Submit</button>
							</form>
  </div>
</template>

<script>
  export default {
    name: 'test-info',
    data() {
      return {}
    }
  }

</script>
<style scoped>


</style>
