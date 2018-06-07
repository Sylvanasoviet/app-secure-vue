<!-- order -->
<template>
<div>
    <!-- main-container start -->
    <!-- ================ -->
    <section class="main-container">

      <div class="container">
        <div class="row">

          <!-- main start -->
          <!-- ================ -->
          <div class="main col-md-9">

            <!-- page-title start -->
            <!-- ================ -->
            <h1 id="tables" class="page-title">Tables</h1>
            <br>
            <!-- page-title end -->

            <!-- Tables start -->
            <!-- ============================================================================== -->
            <h2>Basic table</h2>
            <br>
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            <pre>&lt;table class="table"&gt;...&lt;/table&gt;</pre>
            <br>
            <br>
            <h2>Striped Rows</h2>
            <br>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            <pre>&lt;table class="table table-striped"&gt;....&lt;/table&gt;</pre>
            <br>
            <br>
            <h2>Bordered table</h2>
            <br>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="2">1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@TwBootstrap</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            <pre>&lt;table class="table table-bordered"&gt;....&lt;/table&gt;</pre>
            <br>
            <br>
            <h2>Hover rows</h2>
            <br>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            <pre>&lt;table class="table table-hover"&gt;....&lt;/table&gt;</pre>

          </div>
          <!-- main end -->

          <!-- sidebar start -->
          <aside class="col-md-3">
            <div class="sidebar">
              <div class="block clearfix">
                <h3 class="title">Components</h3>
                <div class="separator"></div>
                <nav>
                  <ul class="nav nav-pills nav-stacked">
                    <li>
                      <a href="components-tabs-and-pills.html">Tabs &amp; Pills</a>
                    </li>
                    <li>
                      <a href="components-accordions.html">Accordions</a>
                    </li>
                    <li>
                      <a href="components-social-icons.html">Social icons</a>
                    </li>
                    <li>
                      <a href="components-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="components-forms.html">Forms</a>
                    </li>
                    <li>
                      <a href="components-progress-bars.html">Progress Bars</a>
                    </li>
                    <li>
                      <a href="components-alerts-and-callouts.html">Alerts &amp; Callouts</a>
                    </li>
                    <li>
                      <a href="components-content-sliders.html">Content Sliders</a>
                    </li>
                    <li>
                      <a href="components-lightbox.html">Lightbox</a>
                    </li>
                    <li>
                      <a href="components-icon-boxes.html">Icon Boxes</a>
                    </li>
                    <li>
                      <a href="components-image-boxes.html">Image Boxes</a>
                    </li>
                    <li>
                      <a href="components-video-and-audio.html">Video and Audio</a>
                    </li>
                    <li>
                      <a href="components-modals.html">Modals</a>
                    </li>
                    <li>
                      <a href="components-animations.html">Animations</a>
                    </li>
                    <li>
                      <a href="components-counters.html">Counters</a>
                    </li>
                    <li class="active">
                      <a href="components-tables.html">Tables</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </aside>
          <!-- sidebar end -->

        </div>
      </div>
    </section>
    <!-- main-container end -->

    <!-- section start -->
    <!-- ================ -->
    <div class="section gray-bg text-muted footer-top clearfix">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="owl-carousel clients">
              <div class="client">
                <a href="#">
                  <img src="images/client-1.png" alt="">
                </a>
              </div>
              <div class="client">
                <a href="#">
                  <img src="images/client-2.png" alt="">
                </a>
              </div>
              <div class="client">
                <a href="#">
                  <img src="images/client-3.png" alt="">
                </a>
              </div>
              <div class="client">
                <a href="#">
                  <img src="images/client-4.png" alt="">
                </a>
              </div>
              <div class="client">
                <a href="#">
                  <img src="images/client-5.png" alt="">
                </a>
              </div>
              <div class="client">
                <a href="#">
                  <img src="images/client-6.png" alt="">
                </a>
              </div>
              <div class="client">
                <a href="#">
                  <img src="images/client-7.png" alt="">
                </a>
              </div>
              <div class="client">
                <a href="#">
                  <img src="images/client-8.png" alt="">
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <blockquote class="inline">
              <p class="margin-clear">Design is not just what it looks like and feels like. Design is how it works.</p>
              <footer>
                <cite title="Source Title">Steve Jobs </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
    <!-- section end -->
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    }
  }

</script>
<style scoped>


</style>
