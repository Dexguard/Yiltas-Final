<template>


    <form action="#" method="POST">
        <div  class="col-md-20 mt-5 uyelik">
            <div class="user-login-box-header">
                <i class="fa fa-user" aria-hidden="true"></i>
            </div>
            <h1><strong>Üyelik Girişi</strong></h1>
            <div class="form-group">
                <div  class="col-md-20 float-left"><i class="
glyphicon glyphicon-envelope"></i>&emsp;<input v-model="email" size=500px type="text" name="adi"  placeholder="Email"></div>


            </div>
            <div class="form-group">
                <div  class="col-md-20 float-left"><i class="
glyphicon glyphicon-lock"></i>&emsp;<input v-model="sifre" size=500px type="text" name="adi"  placeholder="Şifre">

                </div>
            </div>



            <!-- &emsp;  tab atar &nbsp; boşluk atar -->
            <button class="btn btn-primary btn-lg" type="button" v-on:click="login()">Kaydet</button>&emsp;
            <button   class="btn btn-warning btn-lg" type="button" v-on:click="login()" >İptal</button>

        </div>
    </form>

</template>

<script>
import Kayit from '../Kayit'
import AppVue from '../App.vue';
    export default {
        name: "SignIN",
        data(){
            return{
                ad:'',
                soyad:'',
                email:'',
                sifre:'',
                uyeler: [],
                error: '',
                count: 0
            }
        },
        methods : {
            login(){
                for(let i = 0; i < this.uyeler.length; i++){
                    if(this.email == this.uyeler[i].mail){
                        if(this.sifre == this.uyeler[i].sifre){
                            alert("Girildi")
                            this.$router.replace({path:"/"})}
                            count = 1
                    }
                               
                }
                if(this.count != 1){
                    alert("Hatalı giriş")
                }
            },

        },

        async created()  {
            try {
                this.uyeler = await Kayit.getPosts();
            } 
            catch (error) {
                this.error = error
            }
        }
        
    }

           
</script>

<style scoped>
    .uyelik{
        border-style: solid;
        width: 50%;
        padding: 20px ;
        height: 50%;
        align-items: center;
        justify-content: center;
        border-width:thin;
        margin: 0 auto;
    }
    .user-login-box-header i {
        font-size: 4.6rem;
        width: 10rem;
        height: 10rem;
        display: inline-block;
        background: #fff;
        text-align: center;
        line-height: 8rem;
        color: #d7d7d7;
        border-width: 7px;
        border-style: solid;
        border-color: #f0f0f0 #f0f0f0 #d7d7d7;
        margin-bottom: 2rem;
        border-radius: 100%;
    }

    #login {
        width: 500px;
        /*   border: 1px solid #CCCCCC; */
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }

    input[type=text], select {

        width: 50%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    label {
        position : absolute;
    }
   
    .sol {
        float : left;
    }
    .sag{
        float : right;
    }
</style>

