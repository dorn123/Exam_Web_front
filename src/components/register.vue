<template>
    <div>
        <div class="header">
        <img src="../assets/dorn_examweb.png" class="book1" alt="">
        <h1>Exam web</h1>
        </div>
        <div>
            <b-card
                
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 35rem;"
                class="mb-2 mx-auto"
            >
    <div>
        <h1 class="sign">Sign in</h1>
    <b-form-input class="mb-3" v-model="name" placeholder="Enter your name"></b-form-input>
    
    <b-form-input class="mb-3" v-model="surname" placeholder="Enter your surname"></b-form-input>
    
    <b-form-input class="mb-3" v-model="email" placeholder="Enter your email"></b-form-input>
    
    <b-form-input class="mb-3" type="password" v-model="password" placeholder="Enter your password"></b-form-input>
    
    <b-form-input class="mb-3" type="password" v-model="repassword" placeholder="Retype password"></b-form-input>
    <!-- <div class="mt-2">Value: {{ name }}</div>
    <div class="mt-2">Value: {{ surname }}</div>
    <div class="mt-2">Value: {{ email }}</div>
    <div class="mt-2">Value: {{ password }}</div>
    <div class="mt-2">Value: {{ repassword }}</div> -->
  </div>

    <b-button href="#" variant="success">Sign up</b-button>
  </b-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        name: '',
        surname: '',
        email: '',
        password: '',
        repassword: ''
      }
    }
  }
</script>

<style scoped>
.header{
    margin-top: 60px;
  text-align: center;
}
.book1{
    width: 100px;
    height: 100px;
}
.sign{
    font-size: 30px;
}

</style>