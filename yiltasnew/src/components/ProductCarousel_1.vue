<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-sm-2">
        <img src="./../assets/elektrikveaydınlatma.jpg">

      </div>
      <div class="col-lg-9 col-sm-10">
        <md-card>

          <md-card-media>
            <!-- swiper -->
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="swiper-product-image-div">
                  <img class="swiper-product-image" src="./../assets/m1.jpg">
                </div>
                <a class="swiper-product-title"> ECA
                  <br>ECA Panel Radyatör 22/600X500mm</a>
                <p class="swiper-product-price">177,00 TL</p>
                <router-link to="/hirdavat">   <button> Satın Al</button></router-link>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-product-image-div">
                  <img class="swiper-product-image" src="./../assets/carousel2.jpg">
                </div>
                <a class="swiper-product-title"> ECA
                  <br>ECA Panel Radyatör 22/600X500mm</a>
                <p class="swiper-product-price">177,00 TL</p>
                <router-link to="/hirdavat">   <button> Satın Al</button></router-link>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-product-image-div">
                  <img class="swiper-product-image" src="./../assets/carousel3.jpg">
                </div>
                <a class="swiper-product-title"> ECA
                  <br>ECA Panel Radyatör 22/600X500mm</a>
                <p class="swiper-product-price">177,00 TL</p>
                <router-link to="/hirdavat">   <button> Satın Al</button></router-link>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-product-image-div">
                  <img class="swiper-product-image" src="./../assets/carousel4.jpg">
                </div>
                <a class="swiper-product-title"> ECA
                  <br>ECA Panel Radyatör 22/600X500mm</a>
                <p class="swiper-product-price">177,00 TL</p>
                <router-link to="/hirdavat">   <button> Satın Al</button></router-link>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-product-image-div">
                  <img class="swiper-product-image" src="./../assets/carousel5.jpg">
                </div>
                <a class="swiper-product-title"> ECA
                  <br>ECA Panel Radyatör 22/600X500mm</a>
                <p class="swiper-product-price">177,00 TL</p>
                <router-link to="/hirdavat">   <button> Satın Al</button></router-link>
              </swiper-slide>

              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </md-card-media>
        </md-card>

      </div>
    </div>
  </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          loop: false,

          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style scoped>
  @media (max-width:425px) {
    .swiper-product-image{
      width: 95%!important;
      height: 50px;
    }
    .swiper-product-image-div{
      width: 95%!important;
      height: 100%!important;
    }
    .swiper-product-price{
      font-size: 10px!important;
    }
    .swiper-product-title{
      color: black !important;
      font-size: 10px;
    }
    .swiper-slide{
      border: 1px solid lightgrey;
      width: 24%!important;
      margin-right: 5px!important;


    }

  }

  .swiper-slide{
    border: 1px solid lightgrey;


  }
  .swiper-slide:hover{
    border-color: gold;
    color: gold;
  }
  .swiper-product-div{

  }
  .swiper-product-image-div{
    width: 170px;
    height: 170px;
  }
  .swiper-product-image{
    width: 167px;
  }
  .swiper-product-title{
    color: black !important;
  }
  .swiper-product-price{
    font-size: 23px;
  }

</style>


