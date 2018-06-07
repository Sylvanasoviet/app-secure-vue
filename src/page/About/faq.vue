<!-- faq -->
<template>
  <!-- main-container start -->
  <!-- ================ -->
  <section class="main-container">

    <div class="container">
      <div class="row">

        <!-- sidebar start -->
        <aside class="col-md-3">
          <div class="sidebar">
            <div class="block clearfix">
              <h3 class="title">Submit Your Question</h3>
              <div class="separator"></div>
              <div class="alert alert-success hidden" id="contactSuccess3">
                <strong>Success!</strong> Your message has been sent to us.
              </div>
              <div class="alert alert-error hidden" id="contactError3">
                <strong>Error!</strong> There was an error sending your message.
              </div>
              <form role="form" id="sidebar-form">
                <div class="form-group has-feedback">
                  <label for="name3">Name</label>
                  <input type="text" class="form-control" id="name3" placeholder="Enter your name" name="name3">
                  <i class="fa fa-user form-control-feedback"></i>
                </div>
                <div class="form-group has-feedback">
                  <label for="email3">Email address</label>
                  <input type="email" class="form-control" id="email3" placeholder="Enter your email" name="email3">
                  <i class="fa fa-envelope form-control-feedback"></i>
                </div>
                <div class="form-group">
                  <label>Category</label>
                  <select class="form-control" id="category">
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Lorem">Lorem</option>
                    <option value="Ipsum sit">Ipsum sit</option>
                    <option value="Dolor amet">Dolor amet</option>
                  </select>
                </div>
                <div class="form-group has-feedback">
                  <label for="message3">Message</label>
                  <textarea class="form-control" rows="4" id="message3" placeholder="" name="message3"></textarea>
                  <i class="fa fa-pencil form-control-feedback"></i>
                </div>
                <input type="submit" value="Submit" class="btn btn-default">
              </form>
            </div>
          </div>
        </aside>
        <!-- sidebar end -->

        <!-- main start -->
        <!-- ================ -->
        <div class="main col-md-9">

          <!-- page-title start -->
          <!-- ================ -->
          <h1 class="page-title">Frequently Asked Questions</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ab eum aspernatur placeat dicta enim, exercitationem
            porro vitae, delectus? Esse, voluptas. Accusantium ducimus, libero illo tempora impedit, voluptates aperiam obcaecati?</p>
          <!-- page-title end -->

          <!-- tabs start -->
          <div class="tabs-style-1">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs">
              <li @click="tab(1)" :class="{active:1 == titleIndex}">
                <a>
                  <i class="fa fa-life-saver pr-10"></i>Support</a>
              </li>
              <li @click="tab(2)" :class="{active:2 == titleIndex}">
                <a>
                  <i class="fa fa-user pr-10"></i>Sales</a>
              </li>
              <li @click="tab(3)" :class="{active:3 == titleIndex}">
                <a>
                  <i class="fa fa-star pr-10"></i>Popular Topics</a>
              </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content">
              <div v-show="1== titleIndex">
                <!-- accordion start -->
                <div class="panel-group">
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(1)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:1 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="1==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Enim, deleniti atque error corporis, laudantium consequuntur et ipsum velit, laboriosam sint inventore nam quo dolorum. Totam,
                              facilis. Unde nobis cumque quam modi quia doloribus nesciunt eveniet, reprehenderit iste blanditiis
                              ipsa, dolor nemo nulla harum quibusdam ipsum expedita explicabo obcaecati ab amet labore tempore
                              sequi. Sed nam quidem tempore laboriosam ipsa perferendis officiis quos sapiente mollitia facilis
                              earum, reprehenderit corporis eum dolore, ratione reiciendis expedita. Iste tenetur eos molestias
                              dicta itaque adipisci cum laudantium aperiam atque, consequuntur, inventore possimus accusamus
                              nisi a quaerat totam est aliquid alias amet id nulla quia illum illo. Quibusdam expedita omnis
                              est hic, ipsum quo impedit! Facere voluptates repudiandae sunt quos inventore exercitationem
                              quas distinctio ducimus vitae iure eos est, natus voluptatum! Odio totam ipsam natus sed, a,
                              vel, corrupti molestiae magnam dicta officia eveniet temporibus perspiciatis aperiam aliquid
                              cumque mollitia, quibusdam! Consequuntur eum aut aspernatur reprehenderit.
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(2)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:2 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="2==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(3)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:3 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="3==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(4)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:4 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="4==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(5)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:5 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="5==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(6)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:6 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="6==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(7)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:7 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="7==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  
                </div>
                <!-- accordion end -->
              </div>
              <div v-show="2== titleIndex">
                <!-- accordion start -->
                <div class="panel-group">
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(1)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:1 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> SDFSsDSD SDFFFFFFFFFFFF  EEEEEEESDSD
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="1==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Enim, deleniti atque error corporis, laudantium consequuntur et ipsum velit, laboriosam sint inventore nam quo dolorum. Totam,
                              facilis. Unde nobis cumque quam modi quia doloribus nesciunt eveniet, reprehenderit iste blanditiis
                              ipsa, dolor nemo nulla harum quibusdam ipsum expedita explicabo obcaecati ab amet labore tempore
                              sequi. Sed nam quidem tempore laboriosam ipsa perferendis officiis quos sapiente mollitia facilis
                              earum, reprehenderit corporis eum dolore, ratione reiciendis expedita. Iste tenetur eos molestias
                              dicta itaque adipisci cum laudantium aperiam atque, consequuntur, inventore possimus accusamus
                              nisi a quaerat totam est aliquid alias amet id nulla quia illum illo. Quibusdam expedita omnis
                              est hic, ipsum quo impedit! Facere voluptates repudiandae sunt quos inventore exercitationem
                              quas distinctio ducimus vitae iure eos est, natus voluptatum! Odio totam ipsam natus sed, a,
                              vel, corrupti molestiae magnam dicta officia eveniet temporibus perspiciatis aperiam aliquid
                              cumque mollitia, quibusdam! Consequuntur eum aut aspernatur reprehenderit.
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(2)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:2 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="2==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(3)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:3 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="3==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(4)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:4 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="4==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(5)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:5 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="5==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(6)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:6 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="6==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(7)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:7 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="7==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  
                </div>
                <!-- accordion end -->
              </div>
              <div v-show="3== titleIndex">
                <!-- accordion start -->
                <div class="panel-group">
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(1)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:1 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="1==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Enim, deleniti atque error corporis, laudantium consequuntur et ipsum velit, laboriosam sint inventore nam quo dolorum. Totam,
                              facilis. Unde nobis cumque quam modi quia doloribus nesciunt eveniet, reprehenderit iste blanditiis
                              ipsa, dolor nemo nulla harum quibusdam ipsum expedita explicabo obcaecati ab amet labore tempore
                              sequi. Sed nam quidem tempore laboriosam ipsa perferendis officiis quos sapiente mollitia facilis
                              earum, reprehenderit corporis eum dolore, ratione reiciendis expedita. Iste tenetur eos molestias
                              dicta itaque adipisci cum laudantium aperiam atque, consequuntur, inventore possimus accusamus
                              nisi a quaerat totam est aliquid alias amet id nulla quia illum illo. Quibusdam expedita omnis
                              est hic, ipsum quo impedit! Facere voluptates repudiandae sunt quos inventore exercitationem
                              quas distinctio ducimus vitae iure eos est, natus voluptatum! Odio totam ipsam natus sed, a,
                              vel, corrupti molestiae magnam dicta officia eveniet temporibus perspiciatis aperiam aliquid
                              cumque mollitia, quibusdam! Consequuntur eum aut aspernatur reprehenderit.
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(2)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:2 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="2==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(3)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:3 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="3==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(4)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:4 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="4==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(5)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:5 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="5==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(6)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:6 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="6==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" @click="subTab(7)">
                      <h4 class="panel-title">
                        <a :class="{collapsed:7 != subTitleOneIndex}">
                          <i class="fa fa-question-circle pr-10"></i> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                        </a>
                      </h4>
                    </div>
                    <collapse-transition>
                      <div class="collapse-wrap" v-show="7==subTitleOneIndex">
                        <slot>
                          <div class="panel-collapse">
                            <div class="panel-body">
                              Distinctio dolor assumenda optio a adipisci inventore culpa tempora molestias fuga cupiditate alias sint labore, quod minus
                              iusto ad earum, vel nihil ipsum necessitatibus maxime facere? Corporis inventore, saepe placeat labore
                              rerum assumenda repudiandae, eveniet aperiam dolor quibusdam porro nesciunt omnis voluptatum, perspiciatis.
                              Doloremque perspiciatis quas sunt, similique modi facere a atque unde impedit assumenda accusantium
                              vel animi iste omnis cupiditate amet quae ipsam repudiandae sint doloribus praesentium natus magnam
                              et minima consequatur. Facilis corporis similique reiciendis officiis veritatis consectetur est rerum
                              natus, hic illo molestiae voluptas numquam enim aut fugit possimus, ducimus ipsam quisquam, ab doloribus.
                              Deleniti quam repudiandae eos, maxime commodi quas sit accusamus error eius. Ea temporibus eos, iusto!
                            </div>
                          </div>
                        </slot>
                      </div>
                    </collapse-transition>
                  </div>
                  
                </div>
                <!-- accordion end -->
              </div>
            </div>
          </div>
          <!-- tabs end -->
        </div>
        <!-- main end -->

      </div>
    </div>
  </section>
  <!-- main-container end -->
</template>

<script>
  import CollapseTransition from '../../components/collapse'
  export default {
    data() {
      return {
        titleIndex: 1,
        subTitleOneIndex: 2
      }
    },
    methods: {
      tab(index) {
        this.titleIndex = index
      },
      subTab(index) {
        this.subTitleOneIndex = index
      }
    },
    components: {
      CollapseTransition
    },

  }

</script>
<style scoped>


</style>
