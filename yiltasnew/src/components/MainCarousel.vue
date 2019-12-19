<template>
    <!--Carousel Wrapper-->
    <div id="carousel-main" class="carousel slide carousel-fade" data-ride="carousel">
        <!--Indicators-->
        <ol class="carousel-indicators">
            <li data-target="#carousel-main" data-slide-to="0" v-on:click="select(0)" v-bind:class="{ active: (active === 0) }"></li>
            <li data-target="#carousel-main" data-slide-to="1" v-on:click="select(1)" v-bind:class="{ active: (active === 1) }"></li>
            <li data-target="#carousel-main" data-slide-to="2" v-on:click="select(2)" v-bind:class="{ active: (active === 2) }"></li>
            <li data-target="#carousel-main" data-slide-to="3" v-on:click="select(3)" v-bind:class="{ active: (active === 3) }"></li>
        </ol>
        <!--/.Indicators-->
        <!--Slides-->
        <div class="carousel-inner" role="listbox">
            <!--First slide-->
            <div class="carousel-item" v-bind:class="{ active: (active === 0) }">
                <img src="@/assets/pictures_1_3.jpg"
                     alt="First slide">
            </div>
            <!--/First slide-->
            <!--Second slide-->
            <div class="carousel-item" v-bind:class="{ active: (active === 1) }">
                <img src="@/assets/pictures_1_2.jpg"
                     alt="Second slide">
            </div>
            <!--/Second slide-->
            <!--Third slide-->
            <div class="carousel-item" v-bind:class="{ active: (active === 2) }">
                <img src="@/assets/pictures_1_1.jpg"
                     alt="Third slide">
            </div>
            <!--/Third slide-->

            <!--Fourth slide-->
            <div class="carousel-item" v-bind:class="{ active: (active === 3) }">
                <img src="@/assets/pictures_1_4.jpg"
                     alt="Fourth slide">
            </div>
            <!--/Fourth slide-->
        </div>
        <!--/.Slides-->
        <!--Controls-->
        <a class="carousel-control-prev" href="#carousel-main" v-on:click="previus" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-main"  v-on:click="next" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        <!--/.Controls-->
    </div>
    <!--/.Carousel Wrapper-->
</template>

<script>
    export default {
        name: "MainCarousel",
        data() {
            return {
                active : 0
            }
        },
        methods :{
            next : function () {
                this.active = this.active+1 ;
                if(this.active>=4)
                    this.active = 0;
            },

            previus : function () {
                this.active = (this.active+-1 % 4);
                if(this.active<0)
                    this.active = 3;
            },
            select : function (i) {
                this.active = i;
            }
        }
    }
</script>

<style scoped>

</style>
