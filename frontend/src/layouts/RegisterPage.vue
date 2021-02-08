<template>
  <div>
    <div class="box">
      <div class="title">
        <v-icon> mdi-account-circle </v-icon>
        <h4>عضویت</h4>
      </div>

      <div class="content">
        <span>
          اطلاعات مورد نظر را برای ثبت نام وارد کنید تا از امکانات فروشگاه مارکت
          بهره مند شوید
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

          <v-text-field v-model="email" label="ایمیل" :rules="emailRules" hide-details="auto">
            <v-icon slot="append" color="grey"> mdi-email </v-icon>
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
          <v-btn color="primary" @click="register" :disabled="!isValid" :loading="isLoading">ثبت نام</v-btn>
          <v-btn color="error" @click="reset">پاک کردن</v-btn>
        </div>
        <div class="flat">در حال حاضر اکانت دارم</div>
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
  name: "RegisterPageLayout",
  data: () => ({
    isValid: true,
    snackbar: false,
    isLoading : false,
    text : '',
    username : '',
    password : '',
    email : '',
    userRules: [
      (value) => !!value || "باید پر شود",
      (value) => (value || "").length <= 20 || "حداکثر 30 کاراکتر",
      (value) => (value || "").length >= 5 || "حداقل 5 کاراکتر",
    ],
    emailRules: [
      (value) => !!value || "باید پر شود",
      (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "لطفا ایمیل معتبر وارد کنید";
      },
    ],
  }),
  // TODO::must cleaning
  methods:{
      register(){
          this.$refs.form.validate();
          if(this.isValid){
              this.isLoading = true;
              this.axios.post(`${config.API_URL}/auth/register`,{'username':this.username,'password':this.password,'email':this.email})
              .then( () => {
                this.text = 'شما با موفقیت ثبت نام کردید';
                this.snackbar = true;
                this.isLoading = false;
                this.$router.push('/login');
                }).
              catch(() => {
                this.text = 'نام کاربری یا ایمیل تکراری است';
                this.snackbar = true;
                this.isLoading = false;
                
                });
          }
          
      },
      reset(){
          this.$refs.form.reset();
      }
  }
};
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
.flat {
  text-align: center;
  color: rgb(6, 47, 59);
  cursor: pointer;
  margin-top: 15px;
  font-size: 14px;
}
.flat:hover {
  color: rgb(53, 121, 141);
}
</style>