<template>
  <div>
    <y-header></y-header>
    <router-view class="main"></router-view>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YHeader from '../components/header'
import YFooter from '../components/footer'

export default {
  data () {
    return {}
  },
  components: {
    YHeader,YFooter
  }
}
</script>
<style>
</style>
