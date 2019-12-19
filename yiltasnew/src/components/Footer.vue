<template>
    <footer class="page-footer font-small unique-color-dark">



        <!-- Grid row-->

        <!-- Grid column -->

        <!-- Grid column -->

        <!-- Grid column -->


        <!-- Grid row-->



        <!-- Footer Links -->
        <div class="container text-center text-md-left mt-5">

            <!-- Grid row -->
            <div class="row mt-3">

                <!-- Grid column -->

                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    <!-- Links -->
                    <h6 class="text-uppercase font-weight-bold"><font color="#eec819" size="4x"> KURUMSAL</font></h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                    <p>
                      <router-link @click.native="$scrollToTop" to="/hakkimizda">Hakkımızda</router-link>
                    </p>
                    <p>
                      <router-link @click.native="$scrollToTop" to="/iletisim" style="color: black">İletişim</router-link>
                    </p>
                    <p>
                        <a href="#!" style="color: black">Havale Bildirim Formu</a>
                    </p>


                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-6 col-lg-2 col-xl-2 mx-auto mb-9">

                    <!-- Links -->
                    <h6 class="text-uppercase font-weight-bold"><font color="#eec819" size="4x"> MÜŞTERİ İLİŞKİLERİ</font></h6>


                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 80px;">
                    <p>
                        <a href="#!" style="color: black">Gizlilik ve Güvenlik</a>
                    </p>
                    <p>
                        <a href="#!" style="color: black">Kişisek Verilerin Korunması</a>
                    </p>
                    <p>
                        <a href="#!" style="color: black">Ön Bilgilendirme Formu</a>
                    </p>
                    <p>
                        <a href="#!" style="color: black">Üyelik Sözleşmesi</a>
                    </p>
                    <p>
                        <a href="#!" style="color: black">Mesafeli Satış Sözleşmesi</a>
                    </p>
                    <p>
                        <a href="#!" style="color: black">Bize Ulaşın</a>
                    </p>

                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                    <!-- Links -->
                    <h6 class="text-uppercase font-weight-bold"><font color="#eec819" size="4x"> YARDIM </font></h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                    <p>
                       <router-link @click.native="$scrollToTop" to="/kargo"> Teslimat ve Kargo</router-link></p>
                    <p>
                      <router-link @click.native="$scrollToTop" to="/kargotakibi"> Kargo Takip</router-link></p>
                    <p>
                        Kullanım Şartları</p>
                    <p>
                         Sıkça Sorulan Sorular</p>
                    <p>
                       <router-link @click.native="$scrollToTop" to="/iptal" target="mainheader"> İptal İade ve Değişim</router-link></p>

                </div>
                <!-- Grid column -->

            </div>
            <!-- Grid row -->

        </div>
        <!-- Footer Links -->


        <!-- Copyright -->

        <div style="background-color: #ffc107;">
            <div class="container" style="margin-top: 20px">

                <div class="row py-4 d-flex align-items-center">

                    <!-- Grid column -->


                    <div class="col-lg-4 col-xs-2">

                        <img src="@/assets/logo.png">
                    </div>
                    <!-- Copyright -->
                    <div class="col">
                        <div class="footer-copyright text-center py-3">Copyright © Yıltaş Yapı Market 2019 Tüm Hakkı Saklıdır.
                            Kredi kartı bilgileriniz 256bit SSL sertifikası ile korunmaktadır.
                            Web sitemiz ETBİS bilgi platformuna kayıtlıdır.
                        </div>

                    </div>

                    <div class="col">

                        <img src="@/assets/footer1.png">

                    </div>
                </div>
            </div>
        </div>

    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }

</script>

<style scoped>

</style>
