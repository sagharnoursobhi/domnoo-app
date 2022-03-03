<template>
  <div class="news-letter-container">
    <div class="title">Join to our Newsletter</div>
    <div class="form">
      <input type="text" v-model="email">
      <button @click="submitHandler">Subscribe</button>
    </div>
    <div class="label-error">
      <div class="error">{{ error }}</div>
    </div>
    <div class="label-success">
      <div>{{ success}}</div>
    </div>
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </div>
</template>

<script>
import './newsLetter.scss';
export default {
  name: 'DomnooAppNewletter',

  data() {
    return {
      error:'',
      email:'',
      success: '',
    };
  },

  methods: {
    validateEmail(email){//email input shouldn't be left empty and the entered email should be validate in right
      //right format that we should use email regex(regular expression)
      let valid = [true , ''];
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        valid = [false , 'Enter a valid email']
      }
      if (email === ''){
        valid = [false , 'It is empty']
      }
      return valid
    },
    submitHandler(){
      let valid = this.validateEmail(this.email)
      if(valid[0]){
        this.error = '';
        this.addEmail(this.email);
      }else{
        this.error = valid[1];
      }
    },
    addEmail(email){
      this.$http.get(`users.json?orderBy=\"email\"&&equalTo=\"${email}\"`)
      .then( res =>{

        if( Object.getOwnPropertyNames(res.data).length === 0 ){
          this.$http.post('users.json' , {email: this.email})
          .then( res => {
            console.log(res)
            this.success = 'Thank you for subscription'
          })
        }else{
          this.success = "This email has already been used by another user!"
        }
        this.clearSuccess()
      })
      /* this.email = '' */
      //we should skip double quote with back slash
      //getOwnPropertyNames() method returns an array of all properties of an object including on-enumerable ones
      //{a:1 , b:2 } => ['a' , 'b']
    },
    clearSuccess(){
      setTimeout(()=>{
        this.email = '';
        this.success = '';
      }, 3000)
    }
  },
};
</script>