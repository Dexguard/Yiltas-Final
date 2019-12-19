<template>
   <form action="#" method="POST">
    <div   class="col-md-20 mt-5">
        <h1><strong>Yeni Üyelik</strong></h1>
        <div class="form-group">
            <div  class="col-md-3 float-left">Adı:</div>
            <div class="col-md-9"> <input v-model="ad" size=100px type="text" name="adi"  placeholder=""> </div>
        </div>
        <div class="form-group">
            <div  class="col-md-3 float-left">Soyadı:</div>
            <div class="col-md-9"> <input v-model="soyad" size=100px type="text" name="soyadi"  placeholder=""> </div>
        </div>
        <div class="form-group">
            <div  class="col-md-3 float-left">Email:</div>
            <div class="col-md-9"> <input v-model="email" size=100px type="text"  name="email"  placeholder=""> </div>
        </div>
        <div class="form-group">
            <div  class="col-md-3 float-left">Şifre:</div>
            <div class="col-md-9"> <input v-model="sifre" size=100px type="text"    name="sifre" placeholder=""> </div>
        </div>
        <div class="form-group">
            <div  class="col-md-3 float-left">Şifre Tekrar:</div>
            <div class="col-md-9"> <input size=100px type="text"  name="sifretekrar"  placeholder=""> </div>
        </div>

        <div class="form-group mt-200">

            <div  class="col-md-3 float-left">Cinsiyet:</div>
            <div class="col-md-9">
                        <input type="radio" name="CinsiyetSecim" value="Bay"> Bay
                        <input type="radio" name="CinsiyetSecim" value="Bayan"> Bayan
            </div>

        </div>

        <div class="form-group">
            <div  class="col-md-3 float-left">Cep Telefonu:</div>
            <div class="col-md-9"> <input size=100px type="text"   placeholder=""> </div>
        </div>
        <div class="form-group">
            <div  class="col-md-3 float-left">Güvenlik kodu:</div>
            <div class="col-md-9"> <input name="guvenlikkodu" size=100px type="text"   placeholder=""> </div>
        </div>
        <div class="form-group">
            <div  class="col-md-3 float-left">Güvenlik Kodu:</div>
            <div class="col-md-9"> <input size=100px type="text"   placeholder=""> </div>
        </div>
<!-- &emsp; tab atar &nbsp; boşluk atar -->
        <button class="btn btn-primary btn-lg" type="button" v-on:click="kayitOl">Kaydet</button>&emsp;
        <button   class="btn btn-warning btn-lg" type="button" >İptal</button>
    </div>
   </form>
</template>


<script>
import Kayit from '../Kayit'
    export default {
        name: 'SignUP',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                ad:'',
                soyad:'',
                email:'',
                sifre:'',
                
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        // eslint-disable-next-line no-console
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    // eslint-disable-next-line no-console
                    console.log("A username and password must be present");
                }
            },
            async kayitOl(){
                await Kayit.insertPost(this.ad,this.soyad,this.email,this.sifre)
                thig.login
            }
        },
    }
</script>

<style scoped>

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