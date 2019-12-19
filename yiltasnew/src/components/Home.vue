<template>
    <div>
      <MainCarousel></MainCarousel>
      <Header2></Header2>
      <Car></Car>
      <Banner_1 style="margin-top: 60px"></Banner_1>
      <h4 style="margin-top: 50px">MUTFAK & EV GEREÇLERİ</h4>
      <ProductCarousel style="margin-top: 20px"></ProductCarousel>
      <h4 style="margin-top: 50px">ELEKTRİK VE AYDINLATMA</h4>
      <ProductCarousel_1 style="margin-top: 20px"></ProductCarousel_1>
      <h4 style="margin-top: 50px">DEKORASYON</h4>
      <ProductCarousel_2></ProductCarousel_2>
      <h4 style="margin-top: 50px">BAHÇE</h4>
      <ProductCarousel_3></ProductCarousel_3>
      <div class="ust">
        <PopupUyeol class="non"></PopupUyeol>
        <PopupUyegiris class="non"></PopupUyegiris>

      </div>



    </div>

</template>



<script>
    import MainCarousel from "./MainCarousel";
    import Header2 from "./Header2";
    import Car from "./Car";
    import Banner_1 from "./Banner_1";
    import ProductCarousel from "./ProductCarousel";
    import ProductCarousel_1 from "./ProductCarousel_1";
    import ProductCarousel_2 from "./ProductCarousel_2";
    import ProductCarousel_3 from "./ProductCarousel_3";
    import PopupUyeol from "./PopupUyeol";
    import PopupUyegiris from "./PopupUyegiris";

    export default {
        name: "Home",
      components: {
        PopupUyegiris,
        PopupUyeol,
        ProductCarousel_3, ProductCarousel_2, ProductCarousel_1, ProductCarousel, Banner_1, Car, Header2, MainCarousel}
    }
</script>

<style scoped>

  #none {
    display: none !important;
  }
  .non {
    z-index: -1;
    width: 0px;
    height: 0px;
  }
  .ust{
    z-index: 5;
    background-color: white;
  }
  .box{background-color: white}

</style>
