<template>
    <div class="row">

        <div class="col-3">
            <img class="img-fluid" height="300" src="https://st3.myideasoft.com/idea/et/40/myassets/banner_pictures/banner_10.jpg?revision=1565257273" />
        </div>
        <div class="col">
            <carousel3d :disable3d="true" :space="365" :clickable="false" :controls-visible="true" :display="4"  :height="300">
                <slide v-for="(p, i) in products" :index="i" :key="i" style="height: auto;  background-color: white">
                    <div class="showcase">
                        <div class="showcase-image-container">
                            <a class="showcase-label-container" v-bind:href="p.url" aria-label="Product Detail" tabindex="0">
                            </a>
                            <div class="showcase-image" style="">
                                <a v-bind:href="p.url" v-bind:title="p.text" tabindex="0" class=" align-self-center">
                                    <img class="prod-image" v-bind:src="require('@/assets/'+p.imgsrc)"  v-bind:alt="p.text">
                                </a>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-brand">
                                <a v-bind:href="'/marka/' + p.mark" tabindex="0">{{p.mark}}</a>
                            </div>
                            <div class="showcase-title">
                                <a v-bind:href="p.url" v-bind:title="p.text" tabindex="0">{{p.text}}</a>
                            </div>
                            <div class="showcase-price">
                                <div class="showcase-price-new">
                                    {{p.price}}
                                </div>
                            </div>

                        </div>
                    </div>
                </slide>
            </carousel3d>
        </div>
    </div>

</template>

<script>
    import { Carousel3d, Slide } from 'vue-carousel-3d';
    export default {
        components: {
            Carousel3d,
            Slide
        },
        name: "ProductCarousel_1",
        data() {
            return {
                item_index: 0,
                products: [
                    {
                        text: "Kumtel EX-23 Ecoray 2300 W Duvar Tipi Isıtıcı",
                        imgsrc: "m1.jpg",
                        price: "99,00 TL",
                        url: "/urun/kumtel-ex-23-ecoray-2300-w-duvar-tipi-isitici-ex-23",
                        mark: "Kumtel",
                        item_index: 0
                    },
                    {
                        text: "Kumtel EX-23 Ecoray 2300 W Duvar Tipi Isıtıcı",
                        imgsrc: "m2.jpg",
                        price: "99,00 TL",
                        url: "/urun/kumtel-ex-23-ecoray-2300-w-duvar-tipi-isitici-ex-23",
                        mark: "Kumtel",
                        item_index: 1
                    },
                    {
                        text: "Kumtel EX-23 Ecoray 2300 W Duvar Tipi Isıtıcı",
                        imgsrc: "m3.jpg",
                        price: "99,00 TL",
                        url: "/urun/kumtel-ex-23-ecoray-2300-w-duvar-tipi-isitici-ex-23",
                        mark: "Kumtel",
                        item_index: 2
                    },
                    {
                        text: "Kumtel EX-23 Ecoray 2300 W Duvar Tipi Isıtıcı",
                        imgsrc: "m4.jpg",
                        price: "99,00 TL",
                        url: "/urun/kumtel-ex-23-ecoray-2300-w-duvar-tipi-isitici-ex-23",
                        mark: "Kumtel",
                        item_index: 3
                    },
                    {
                        text: "Kumtel EX-23 Ecoray 2300 W Duvar Tipi Isıtıcı",
                        imgsrc: "m5.png",
                        price: "99,00 TL",
                        url: "/urun/kumtel-ex-23-ecoray-2300-w-duvar-tipi-isitici-ex-23",
                        mark: "Kumtel",
                        item_index: 0
                    },
                    {
                        text: "Kumtel EX-23 Ecoray 2300 W Duvar Tipi Isıtıcı",
                        imgsrc: "m6.png",
                        price: "99,00 TL",
                        url: "/urun/kumtel-ex-23-ecoray-2300-w-duvar-tipi-isitici-ex-23",
                        mark: "Kumtel",
                        item_index: 0
                    }
                ]
            }
        }
    }

</script>

<style scoped>

    .prod-image {
        width: auto;
        max-height: 200px;
    }
</style>