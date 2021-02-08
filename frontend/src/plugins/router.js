import Vue from 'vue';
import Router from 'vue-router';

import HomePageLayout from '../layouts/HomePage';
import RegisterPageLayout from '../layouts/RegisterPage';

Vue.use(Router);

const router = new Router({
    mode : 'history',
    routes:[
        {path:'/', component:HomePageLayout},
        {path: '/register', component:RegisterPageLayout},
        {path:'*',redirect:'/'}
    ]
});
export default router;

