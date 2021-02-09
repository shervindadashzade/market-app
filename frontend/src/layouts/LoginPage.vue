<template>
    <div>
    <div class="box">
      <div class="title">
        <v-icon> mdi-account-circle </v-icon>
        <h4>ورود</h4>
      </div>

      <div class="content">
        <span>
            مشخصات کاربری خود را وارد کنید و روی ورود کلیک کنید 
        </span>
        <v-form ref="form" class="form" v-model="isValid" lazy-validation>
          <v-text-field
            label="نام کاربری"
            v-model="username"
            :rules="userRules"
            hide-details="auto"
          >
            <v-icon slot="append" color="grey"> mdi-account </v-icon>
          </v-text-field>

          <v-text-field
          v-model="password"
            label="رمز عبور"
            :rules="userRules"
            hide-details="auto"
            type="password"
          >
            <v-icon slot="append" color="grey"> mdi-key </v-icon>
          </v-text-field>
        </v-form>

        <div class="buttons">
          <v-btn color="primary" @click="login" :disabled="!isValid" :loading="isLoading">ورود</v-btn>
          <v-btn color="error" @click="reset">پاک کردن</v-btn>
        </div>
      </div>
    </div>
    
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          بستن
        </v-btn>
      </template>
    </v-snackbar>

  </div>
</template>

<script>
import config from '../config';
export default {
    name:"LoginPageLayout",
    data:() => ({
        username:'',
        password:'',
        snackbar : false,
        text : '',
        isValid:false,
        isLoading:false,
        userRules: [
        (value) => !!value || "باید پر شود",
        (value) => (value || "").length <= 20 || "حداکثر 30 کاراکتر",
        (value) => (value || "").length >= 5 || "حداقل 5 کاراکتر",
        ],
    }),
    mounted(){
        
    },
    methods:{
        login(){
            this.$refs.form.validate();
            console.log(this.isValid);
            if(this.isValid){
                this.isLoading = true;
                this.axios.post(`${config.API_URL}/auth/login`,{'username':this.username,'password':this.password})
                .then((res)=>{
                    console.log(res);
                    this.isLoading = false;
                    this.text = 'شما با موفقیت لوگین کردید';
                    this.snackbar = true;
                    console.log(res.data.user);
                    localStorage.setItem('user',JSON.stringify(res.data.user));
                    this.$router.go('/');
                }).catch(() => {
                    this.isLoading = false;
                    this.text = 'نام کاربری یا رمزعبور اشتباه می باشد';
                    this.snackbar = true;
                })
            }
        },
        reset(){
            this.$refs.form.reset();
        }
    }

}
</script>

<style scoped>
.box {
  width: 35%;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 20px;
  margin: auto;
  margin-top: 50px;
}
.box .title {
  margin-top: 20px;
  text-align: center;
  padding: 20px;
  background: var(--primary-color);
  color: white;
  border-radius: 20px 20px 0px 0px;
}
.box .title .v-icon {
  font-size: 80px;
  color: white;
}
.content {
  padding: 80px;
  padding-bottom: 40px;
  padding-top: 30px;
}
.content span {
  font-size: 13px;
}
.form {
  margin-top: 20px;
  padding: 0px 10px;
}
.form .v-text-field {
  margin-bottom: 20px;
}
.buttons {
  text-align: center;
}
.buttons .v-btn {
  margin: 10px;
}
</style>