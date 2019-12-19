    <template>
        <div class="list-tab-title">
            <div class="row justify-content-lg-center flex-nowrap">
                <div class="col-auto col-md-4 active header2-menu-item"  data-tab-index="1"><a href="javascript:void(0);">FIRSAT ÜRÜNLERİ</a></div>
                <div class="col-auto col-md-4 header2-menu-item"  data-tab-index="2"><a href="javascript:void(0);">ÇOK SATAN ÜRÜNLER</a></div>
                <div class="col-auto col-md-4 header2-menu-item"  data-tab-index="3"><a href="javascript:void(0);">YENİ ÜRÜNLER</a></div>
            </div>
        </div>
    </template>

    <script>
        export default {
            name: "Header2"
        }
    </script>

<style scoped>
.list-tab-title{
    background-color: #eec819;
    margin: 20px 0 ;
}
    .header2-menu-item{
        border: white 1px solid;
        padding: 10px;
    }
</style>