<template>
    <form class="form-inline" style="margin-top: 15px">

        <div class="form-group mx-sm-3 mb-9" >
            <a style="text-align: left">Kampanya ve duyurulardan haberdar olmak için
                <br>e-bültene kayıt olabilirsiniz.</a>
            <label for="email2" class="sr-only">Email</label>
            <input type="text" class="form-control-2" id="email2" placeholder="E-mail" size="70px" style="margin-left: 20px; height: 40px">
        </div>
        <button type="submit" class="btn mb-9" id="button1" style="background-color: black; margin-left: -20px; height: 40px; width: 118px" ><font color="#eec819" size="3px"> KAYDOL</font></button>
    </form>

</template>

<script>
    export default {
        name: "EmailSubmit"
    }
</script>

<style scoped>

  @media (max-width:425px) {
    #email2{
      width:70%!important;
    }
    #button1{
      margin-left: auto!important;
      margin-right: auto!important;
      display: block!important;
    }
  }


</style>
