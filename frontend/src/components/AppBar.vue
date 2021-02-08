<template>
    <div>
    <v-app-bar
    color="primary"
    dark
    >
         <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>
        <v-toolbar-title>فروشگاه اینترنتی مارکت</v-toolbar-title>
        
        <v-spacer></v-spacer>

        <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list width=200>
        <v-list-item>
          <div class="list-item-text">شما هنوز وارد نشدید</div>
        </v-list-item>
        <v-list-item id="bg-list">
            <div class="list-item-text">
                <v-btn class="ma-2" dark color="error">ثبت نام</v-btn>
                <v-btn class="ma-2" dark color="primary">ورود</v-btn>
            </div>
        </v-list-item>
      </v-list>
    </v-menu>

    </v-app-bar>

    <v-navigation-drawer
      width="300"
      v-model="drawer"
      absolute
      right
      temporary
    >
    <div class="drawer-header">
        <v-avatar
        color="white"
        size="56"
        >?</v-avatar>
        <div class="drawer-text">کاربر ناشناس</div>
        <div class="drawer-text">موجودی : 0 ریال</div>
    </div>
     
      <v-list
      nav
      dense
      >
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--primary-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-dropbox</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
            <v-list-item-title>محصولات</v-list-item-title>
            </v-list-item-content>

          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
            <v-list-item-title>سبد خرید</v-list-item-title>
            </v-list-item-content>

          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-wallet</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
            <v-list-item-title>شارژ حساب</v-list-item-title>
            </v-list-item-content>

          </v-list-item>



        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    </div>
</template>

<script>
export default {
    name:"AppBar",
    data(){
        return{
            drawer:false,
            group:null,
        }
    },
    methods:{
        toggle(){
            this.drawer = true;
        }
    },
    watch:{
        group(){
            this.drawer = false;
        }
    }
}
</script>

<style scoped>
    .list-item-text{
        font-weight: normal;
        font-size: 13px;
        margin: auto;
        text-align: center !important;
        display: flex;
    }
    .list-item-text .v-btn{
        margin: 5px;
        font-weight: bold;
    }
    .logo{
        width: 46px;
        margin: 10px;
    }
    .drawer-header{
        padding-top: 50px;
        width: 100%;
        height: 200px;
        text-align: center;
        background: var(--primary-color);
    }
    .drawer-text{
        color: white;
        font-size: 13px;
        font-weight: normal;
        margin-top: 10px;
    }
    .v-avatar{
        color: var(--primary-color);
    }
</style>