<template> <!-- Kargo takibi -->
    <b-container>
        <b-row>


            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <b-col md="8">
                <strong><a style="margin-right:100px ">Kargo Takibi</a></strong>
            </b-col>
        </b-row>
        <br>
    <br>
        <b-row>
            <b-col md="4"><a> > Hırdavat</a></b-col>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <b-col md="4"><a>Kargo No</a></b-col>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <b-col md="4">
                <input type='number'>
            </b-col>
        </b-row>
        <br>
        <br>
        <b-row>
            <b-col md="4"><a    > > Dekorasyon</a></b-col>
           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <b-col md="4"><a>Kargo Firması</a></b-col>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
            <b-col md="4">
                <select  style="width:185px;height:28px;">
                <option>MNG Kargo</option>
                </select>
            </b-col>
        </b-row>
        <br><br>
        <b-row style=" margin-left:-650px">
        <a> > Elektirik&Aydınlatma</a>
         <!--   <button class="btn btn-primary;background:##c2a417;color:black;margin-right:20px">Sorgula</button> -->
        </b-row>
        <br><br>
        <b-row style=" margin-left:-740px">
            <a> > Bahçe</a>
        </b-row>
        <br><br>
        <b-row style=" margin-left:-680px">
            <a> > Banyo&Tesisat</a>
        </b-row>
        <br><br>
        <b-row style=" margin-left:-670px">
            <a> > Isıtma&Sogutma</a>
        </b-row>
        <br><br>
        <b-row style=" margin-left:-645px">
            <a> > Mutfak&Ev Gereçleri</a>
        </b-row>
        <br><br>
        <b-row style=" margin-left:-700px">
            <a> > İnşaat&Yapı</a>
        </b-row>
        <br><br>
        <b-row style=" margin-left:-720px">
            <a> > Otomobil</a>
        </b-row>
        <br><br>
        <b-row style=" margin-left:-720px">
            <a> > Kırtasiye</a>
        </b-row>
        <br><br>
    </b-container>
</template>

<script>
    export default {
        name: "Kargo_Takibi"
    }
</script>

<style scoped>

</style>