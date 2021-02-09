import Vue from 'vue';
import Router from 'vue-router';

import HomePageLayout from '../layouts/HomePage';
import RegisterPageLayout from '../layouts/RegisterPage';
import LoginPageLayout from '../layouts/LoginPage';
Vue.use(Router);

const router = new Router({
    mode : 'history',
    routes:[
        {path:'/', component:HomePageLayout},
        {path: '/register', component:RegisterPageLayout},
        {path: '/login', component:LoginPageLayout},
        {path:'*',redirect:'/'}
    ]
});

router.beforeEach((to,from,next)=>{
    
    var loginRegister = ['/register','/login'];
    var isLoggedIn = localStorage.getItem('user');
    if(isLoggedIn && loginRegister.includes(to.path)){
        return next('/');
    }

    next();

});
export default router;

