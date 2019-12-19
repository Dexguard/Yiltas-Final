<template>
    <div id="category-menu" class="position-absolute" style="z-index: 10001; width: 55%; margin: 0 15px; " @mouseleave="hidemenu()" >
        <div class="row">
            <button class="category-btn"  v-on:click="isShow = !isShow" style="font-size: 15px; height: 40px; color: #fff">KATEGORİLER</button>
        </div>
        <div class="row" v-if="isShow" style="background-color: white; padding: 5px; border: #666666">
            <div class="col-3 left-menu">
                <ul>
                    <li class="category-menu-item"
                        v-bind:key="menuitem"
                        v-for="menuitem in menuItems" @mouseover="selectedMenu = menuitem.subItems">
                      <router-link :to="menuitem.url">{{ menuitem.text }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-9  right-menu" v-if="selectedMenu.length>0">
                <div class="col-3 float-left" style="padding: 10px 0px"
                     v-bind:key="subitem"
                     v-for="subitem in selectedMenu" >
                    <a :href="subitem.url">{{subitem.text}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "CategoryMenu",
        data() {
            return  {
                isShow : false,
                isSubShow : false,
                    menuItems:[
                    { text:"Hırdavat", url:"hirdavat", subItems:[
                        {text:"Bağlantı Elemanları", url:"#"},
                        {text:"Bantlar", url:"#"},
                        {text:"Daire Testereler", url:"#"},
                        {text:"El Aletleri", url:"#"},
                        {text:"Elektrikli El Aletleri", url:"#"},
                            {text:"Kapı Hidroliği", url:"#"},
                            {text:"Kapı Kolları", url:"#"},
                            {text:"Kapı Menteşeleri", url:"#"},
                            {text:"Kasa", url:"#"},
                            {text:"Kesme ve Taşlamalar", url:"#"},
                            {text:"Kilit Çeşitleri", url:"#"},
                            {text:"Kompresörler", url:"#"},
                            {text:"Mobilya Ayakları", url:"#"},
                            {text:"Mobilya Kalemleri", url:"#"},
                            {text:"Mobilya Kulpları", url:"#"},
                            {text:"Mobilya Makasları", url:"#"},
                            {text:"Mobilya Menteşeleri", url:"#"},
                            {text:"Mobilya Rayları", url:"#"},
                            {text:"Mobilya Tekerleri", url:"#"},
                            {text:"Posta Kutuları", url:"#"},
                            {text:"Sürgü&Askı", url:"#"},
                            {text:"Takım Çantaları", url:"#"},
                            {text:"Tel Fırçalar", url:"#"},
                            {text:"Zımparalar", url:"#"},



                        ]},
                    {text:"Dekorasyon", url:"#", subItems:[{text:"Bağlantı Elemanları", url:"#"},{text:"Bağlantı Elemanları", url:"#"}]},
                    {text:"Elektrik & Aydınlatma", url:"#", subItems:[{text:"Bağlantı Elemanları", url:"#"},{text:"Bağlantı Elemanları", url:"#"}]},
                    {text:"Bahçe", url:"#", subItems:[{text:"Bağlantı Elemanları", url:"#"},{text:"Bağlantı Elemanları", url:"#"}]},
                    {text:"Banyo & Tesisat", url:"#", subItems:[{text:"Bağlantı Elemanları", url:"#"},{text:"Bağlantı Elemanları", url:"#"}]},
                    {text:"Isıtma & Soğutma", url:"#", subItems:[{text:"Bağlantı Elemanları", url:"#"},{text:"Bağlantı Elemanları", url:"#"}]},
                    {text:"Mutfak & Ev Gereçleri", url:"#", subItems:[{text:"Bağlantı Elemanları", url:"#"},{text:"Bağlantı Elemanları", url:"#"}]},
                    {text:"İnşaat & Yapı", url:"#", subItems:[{text:"Bağlantı Elemanları", url:"#"},{text:"Bağlantı Elemanları", url:"#"}]},
                    {text:"Otomobil", url:"#", subItems:[{text:"Bağlantı Elemanları", url:"#"},{text:"Bağlantı Elemanları", url:"#"}]},
                    {text:"Kırtasiye", url:"#", subItems:[{text:"Bağlantı Elemanları", url:"#"},{text:"Bağlantı Elemanları", url:"#"}]},

                ],
                selectedMenu:[]
            }

        },
        methods : {
            hidemenu : function () {
                this.selectedMenu =[];
                this.isShow = false;
            }
        },
        components: { }
    }

</script>

<style>

  @media (max-width:425px) {
    .left-menu{
      text-align: left;
      border-right: #666 solid 1px;
      padding: 0px;
      font-size: 10px;
    }
    .right-menu{
      font-size: 10px;

    }
    li {
      list-style-type: none;
      text-align: left;
      padding: 20px;
    }
    #category-menu{
      width: 85%!important;
    }
  }
    .category{
     }
    .category-btn {
        flex: 0 0 18rem;
        font-size: 1rem;
        font-weight: 500;
        padding-left: 50px;
        color: #fff;
        font-color:white;
        transition: all 0.2s ease-in-out;
        line-height: 2rem;
        background: #3c3c3c url(//st1.myideasoft.com/idea/et/40/themes/selftpl_5d1de65a4c953/assets/images/icon-allcat.svg?revision=1) no-repeat left 16px center;
        text-align: left;
    }
    .category-menu-item:hover{
        text-align: left;
        background: url(//st1.myideasoft.com/idea/et/40/themes/selftpl_5d1de65a4c953/assets/images/active-arrow.svg?revision=1) no-repeat right 20px center;
    }
    ul{
        padding: 0px;
    }
    li {
        list-style-type: none;
        text-align: left;
        padding: 10px;
    }
    .bp-dropdown__btn{
        text-align: left;
    }
    a{
        color: black;
        text-decoration: none;
    }
    a:hover{
        color: #eec819;
        text-decoration: solid;
    }
    .left-menu{
        text-align: left;
        border-right: #666 solid 1px;
        padding: 0px;
    }
    .right-menu{
    }

</style>
