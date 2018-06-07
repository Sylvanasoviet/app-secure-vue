<template>
  <div>
    <div class="owl-carousel content-slider-with-controls-autoplay">
      <div class="overlay-container">
        <img src="../../assets/images/index/banner1.jpg" alt="">
      </div>
      <div class="overlay-container">
        <img src="../../assets/images/index/banner2.png" alt="">
      </div>
    </div>
    <!-- main-container start -->
    <!-- ================ -->
    <section class="main-container gray-bg">
      <!-- main start -->
      <!-- ================ -->
      <div class="main">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center title">Features</h1>
              <div class="separator"></div>
              <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="row">
                <div class="col-sm-4">
                  <div class="box-style-1 white-bg">
                    <i class="fa fa-leaf"></i>
                    <h2>Clean Design and Code</h2>
                    <p>Voluptatem ad provident non veritatis beatae cupiditate amet reiciendis.</p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="box-style-1 white-bg">
                    <i class="fa fa-laptop"></i>
                    <h2>Very Flexible</h2>
                    <p>Iure sequi unde hic. Sapiente quaerat labore sequi inventore veritatis cumque.</p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="box-style-1 white-bg">
                    <i class="fa fa-sitemap"></i>
                    <h2>Latest Technologies</h2>
                    <p>Inventore dolores aut laboriosam cum consequuntur delectus sequi! Eum est.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- main end -->
    </section>
    <!-- main-container end -->
  </div>
</template>
<script>
  import owlCarousel from 'static/plugins/owl-carousel/owl.carousel.js'
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
    mounted() {
      //Owl carousel
      //-----------------------------------------------
      if ($('.owl-carousel').length > 0) {
        $(".owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
          singleItem: true,
          autoPlay: 3000,
          navigation: true,
          navigationText: false,
          pagination: true
        });
      };
    }
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

  /* .fade-enter-active {
  opacity: 0;
  transition: linear 0.15s ease
}
.fade-leave-active {
  opacity: 1;
} */

</style>
