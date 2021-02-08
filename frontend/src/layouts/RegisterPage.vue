<template>
    <div>
       <div class="box">
           <div class="title">
               <v-icon>
               mdi-account-circle
                </v-icon>
               <h4>عضویت</h4>
           </div>

           <div class="content">
               <span>
                   اطلاعات مورد نظر را برای ثبت نام وارد کنید تا از امکانات فروشگاه مارکت بهره مند شوید
               </span>
               <div class="form">
               <v-text-field
                label="نام کاربری"
                :rules="rules"
                hide-details="auto"
                >
                <v-icon
                slot="append"
                color="grey">
                mdi-account    
                </v-icon>
                </v-text-field>

                <v-text-field
                label="ایمیل"
                :rules="rules"
                hide-details="auto"
                >
                <v-icon
                slot="append"
                color="grey">
                mdi-email    
                </v-icon>
                </v-text-field>

                <v-text-field
                label="رمز عبور"
                :rules="rules"
                hide-details="auto"
                type="password"
                >
                <v-icon
                slot="append"
                color="grey">
                mdi-key    
                </v-icon>
                </v-text-field>

                </div>

                <div class="buttons">
                    <v-btn color="primary">ثبت نام</v-btn>
                    <v-btn color="error" >انصراف</v-btn>
                </div>
                <div class="flat">در حال حاضر اکانت دارم</div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name:"RegisterPageLayout",
    data:()=>({

    }),
}
</script>

<style scoped>
    .box{
        width: 35%;
        background: white;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        border-radius: 20px;
        margin: auto;
        margin-top: 50px;
    }
    .box .title{
        margin-top: 20px;
        text-align: center;
        padding: 20px;
        background: var(--primary-color);
        color: white;
        border-radius: 20px 20px 0px 0px;
    }
    .box .title .v-icon{
        font-size: 80px;
        color: white;
    }
    .content{
        padding: 80px;
        padding-bottom: 40px;
        padding-top: 30px;
    }
    .content span{
        font-size: 13px;
    }
    .form{
        margin-top: 20px;
        padding: 0px 10px;
    }
    .form .v-text-field{
        margin-bottom: 20px;
    }
    .buttons{
        text-align: center;
    }
    .buttons .v-btn{
        margin: 10px;
    }
    .flat{
        text-align: center;
        color: rgb(6, 47, 59);;
        cursor: pointer;
        margin-top: 15px;
        font-size: 14px;
    }
    .flat:hover{
        color:rgb(53, 121, 141);
    }
</style>