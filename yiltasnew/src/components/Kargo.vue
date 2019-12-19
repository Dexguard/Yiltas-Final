<template>
    <b-container> <!-- Teslimat ve kargo -->
        <div>
            <br>
            <strong><h1>Teslimat ve Kargo</h1></strong>
            <br>
            <b-row>
                <b-col>
                 <p>Ürünleriniz stok durumuna göre siparişiniz onaylandığında tedarik edilmekte ve sonrasında kargoya verilmektedir. Siparişinizin onaylanabilmesi için satın almış olduğunuz ürünlerin</p>
                 <p>ücretinin kredi kartı veya havale ile ödenmesi gerekmektedir. Ürünlerimiz Kargo Hariç Fiyatlardır.Anlaşmalı kargo ile en uygun fiyatlardan ürünler adresinize teslim edilmektedir.</p>
                </b-col>
                <b-col>
                <button class="btn btn-primary btn-lg" style="margin-right:-800px">Tüm sayfalar</button>
                </b-col>
            </b-row>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: "Kargo"
    }
</script>

<style scoped>
    p{
        font-size: 1.2rem;
        font-family: 'Nunito Sans',sans-serif;
        color: #3c3c3c;
    }
    button{
        background: #eec819;
        color: black;
        height: 40px;

    }

</style>