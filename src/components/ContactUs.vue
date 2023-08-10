<template>
  <div class="contact-us">
    <h2 class="contact-hd">How to reach us</h2>
    <p>Lorem Ipsum dolre ipst, consetetur</p>
    <form @submit.prevent="validateForm">
      <div class="row">
        <div class="field">
          <label for="firstName">First Name</label>
          <input id="firstName" v-model="form.firstName" type="text">
          <p class="error" v-if="v$.firstName.$error">First name is required.</p>
        </div>
        <div class="field">
          <label for="lastName">Last Name</label>
          <input id="lastName" v-model="form.lastName" type="text">
          <p class="error" v-if="v$.lastName.$error">Last name is required.</p>
        </div>
      </div>
      
      <div class="field">
        <label for="email">Email</label>
        <input id="email" v-model="form.email" type="email">
        <p class="error" v-if="v$.email.$error">Email is required.</p>
        <p class="error" v-if="!v$.email.email">Email is not valid.</p>
      </div>
      <div class="field">
        <label for="phone">Phone</label>
        <input id="phone" v-model="form.phone" type="tel">
      </div>
      <div class="field">
        <label for="comments">Comments</label>
        <textarea id="comments" v-model="form.comments"></textarea>
        <p class="error" v-if="v$.comments.$error">Comments are required.</p>
      </div>
      <div class="field">
        
        <p ><input type="checkbox" style="width:10%;" name="" id=""> I agree to the Terms & Conditions.</p>
      </div>
      <button type="submit" class="btn btn-submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import { useVuelidate } from '@vuelidate/core';

import { ref } from 'vue'

export default {
  name: 'MyContactUs',
  setup() {
    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comments: '',
    })

    const v$ = useVuelidate({
      firstName: { required },
      lastName: { required },
      email: { required, email },
      comments: { required },
    }, form)

    function validateForm() {
      this.v$.$validate()
      console.log(v$.$error);
      if (v$.invalid) {
        console.error('Validation failed.')
      } else {
        console.log('Form submitted:', form.value)
      }
    }

    return {
      form,
      v$,
      validateForm,
    }
  },
};
</script>

<style scoped>
.error{
  color:orangered;
}
.row{
  display:flex;
  margin:0px;
}
.row > .field{
  margin-right:50px ;
}
.row > .field > input{
 width: 100%;
}
.field{
  margin-bottom:10px;
}
label{
  color: gray;
}
input,textarea{
  border:none;
  padding:10px;
  width:90%;
  border-radius: 3px;
  background-color: rgb(100, 100, 100);
  margin:10px 0px;
  color: white;
}
.contact-us{
  margin:80px 5%;
}
.contact-us > h2{
  font-size: 32px;
}
.contact-us > p{
  color: lightgrey;
}
.btn-submit{
  background-color: #CC9601;
  color:white;
  border:0px;
  border-radius:4px;
  padding:10px 50px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
}
/* Your styles go here */
</style>
