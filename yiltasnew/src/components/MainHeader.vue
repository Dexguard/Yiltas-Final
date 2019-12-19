<template>
    <div class="row">
        <div class="col-3" >
           <router-link to="/"> <img src="@/assets/logo.png" class="img-fluid vertical-center"></router-link>
        </div>
        <div class="col-5 align-self-center">
            <div class="row">
                <div class="input-group md-form form-sm form-2 pl-0">
                    <input class="form-control my-0 py-1 amber-border" style="border-right-color: transparent; height: 40px; font-size: 13px" type="text" placeholder="Ürün adı, marka veya kategori ara..." aria-label="Search">
                    <div class="input-group-append">
                        <span class="input-group-text amber lighten-3" style="background-color: transparent" id="basic-text1"><span aria-hidden="true">ARA</span></span>
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top: 8px" >
                <span type="hyperlink" style="margin-right: 40px"> Popüler Aramalar</span>
                <a href="#"> <span class="badge badge-warning popularkeywords" style="margin-right: 10px" >Kapı</span></a>
                <a href="#"> <span class="badge badge-warning popularkeywords" style="margin-right: 10px" >Parke</span></a>
                <a href="#"> <span class="badge badge-warning popularkeywords" style="margin-right: 10px">OSB</span></a>
                    <a href="#">  <span class="badge badge-warning popularkeywords" style="margin-right: 10px">Bahçe Mobilyası</span></a>
            </div>
        </div>
        <div class="col align-self-center col-xs" style="z-index: 1" id="user1">
                 <span class="cart header-right-icons float-right" id="btnuser" style="z-index: 2" >
                    <a id="uyeol-link" href="#popup1">Üye ol</a>/
                     <a id="uyegiris-link" href="#popup2">Giriş Yap</a>
                </span>
        </div>
        <div class="col align-self-center col-xs" style="margin-left: -180px" id="shop1">
                <span class="cart header-right-icons float-right" id="btncart" >
                    <router-link to="SignIN">Sepetim</router-link>


                </span>
        </div>

    </div>

</template>

<script>
    export default {
            name: "MainHeader"
    }


</script>

<style scoped>

  @media (max-width:425px) {
    span#btncart:after {
      content: '';
      position: absolute;
      right: -2px;
      top: 0;
      width: 1.8rem;
      height: 1.8rem;
      background: #3c3c3c url(//st1.myideasoft.com/idea/et/40/themes/selftpl_5d1de65a4c953/assets/images/icon-cart.svg?revision=1) no-repeat center;
    }

    span#btnuser:after {
      content: '';
      position: absolute;
      right: 18px!important;
      top: 0;
      width: 1.8rem;
      height: 1.8rem;
      background: #3c3c3c url(//st1.myideasoft.com/idea/et/40/themes/selftpl_5d1de65a4c953/assets/images/icon-user.svg?revision=1) no-repeat center;
    }

    #user1{
      font-size: 13px!important;
      height: 100px!important;
    }

    #shop1{
      font-size: 13px!important;
    }
    .header-right-icons {
      background-position: right;
      background-repeat: no-repeat;
      padding-right: 34px!important;
    }

  }
    .header-right-icons {
        background-position: right;
        background-repeat: no-repeat;
        padding-right: 20px;
    }
    .popularkeywords:hover{

        background-color: #1b1e21;
        color: #eec819;
    }

    span#btncart:after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 1.8rem;
        height: 1.8rem;
        background: #3c3c3c url(//st1.myideasoft.com/idea/et/40/themes/selftpl_5d1de65a4c953/assets/images/icon-cart.svg?revision=1) no-repeat center;
    }

    span#btnuser:after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 1.8rem;
        height: 1.8rem;
        background: #3c3c3c url(//st1.myideasoft.com/idea/et/40/themes/selftpl_5d1de65a4c953/assets/images/icon-user.svg?revision=1) no-repeat center;
    }
</style>
