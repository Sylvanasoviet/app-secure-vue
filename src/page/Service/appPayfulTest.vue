<template>
  <div>
    <!-- section start -->
    <!-- ================ -->
    <div class="section clearfix">
      <div class="container">
        <div class="row">
          <div class="col-md-12">

            <h1 class="text-center">支付类APP自助测试</h1>
            <div class="separator"></div>
            <p class="lead text-center">Lorem ipsum dolor sit amet. Maiores, odio ut deleniti doloremque ad at praesentium
              <br> laudantium molestias similique. Quisquam incidunt ut laboriosam.</p>

            <!-- Tabs start -->
            <!-- ================ -->
            <div class="vertical hc-tabs">
              <!-- Tabs Arrow -->
              <div class="arrow hidden-sm hidden-xs">
                <i class="fa fa-caret-up"></i>
              </div>

              <!-- Nav tabs -->
              <ul class="nav nav-tabs" role="tablist">
                <li :class="{active:1 == tabIndex}" @click="selectTab(1)">
                  <a>
                    <i class="fa fa-magic pr-10"></i> Very Flexible</a>
                </li>
                <li :class="{active:2 == tabIndex}" @click="selectTab(2)">
                  <a>
                    <i class="fa fa-life-saver pr-10"></i> Top Notch 24/7 Support</a>
                </li>
                <li :class="{active:3 == tabIndex}" @click="selectTab(3)">
                  <a>
                    <i class="fa fa-expand pr-10"></i> 100% Responsive</a>
                </li>
                <li :class="{active:4 == tabIndex}" @click="selectTab(4)">
                  <a>
                    <i class="fa fa-file-o pr-10"></i> Well Documented</a>
                </li>
              </ul>

              <!-- Tab panes -->
              <div class="tab-content">
                <transition name="component-fade" mode="out-in">
                  <component v-bind:is="view"></component>
                </transition>
              </div>
            </div>
            <!-- tabs end -->

          </div>
        </div>
      </div>
    </div>
    <!-- section end -->
  </div>
</template>
<script>
  import TestInfo from '../../components/testinfo'
  import TestStart from '../../components/teststart'

  export default {
    data() {
      return {
        tabIndex: 1,
        view: 'test-info'
      }
    },
    components: {
      TestInfo,
      TestStart
    },
    methods: {
      selectTab(index) {
        this.tabIndex = index
        switch (index) {
          case 1:
            this.view = 'test-info'
            break
          case 2:
            this.view = 'test-start'
            break
          case 3:
            this.view = 'test-info'
            break
          default:
            this.view = 'test-start'
        }
      }
    },
    mounted() {}
  }

</script>
<style>
  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .component-fade-enter,
  .component-fade-leave-to
  /* .component-fade-leave-active for below version 2.1.8 */

    {
    opacity: 0;
  }

  .tab-content{
    width: 100%;
  }

</style>
