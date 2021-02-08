<template>
  <v-app>
    <AppBar></AppBar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
export default {
  name: 'App',
  components:{
    AppBar
  },
  data: () => ({
    //
  }),
};
</script>

<style>
:root{
  --primary-color : #1976D2;
}
 @font-face{
   font-family: "b-yekan";
   font-weight: normal;
   src: url('assets/fonts/BYekan+.ttf');
 }
 @font-face{
   font-family: "b-yekan";
   font-weight: bold;
   src: url('assets/fonts/BYekan+Bold.ttf');
 }
 *{
   font-family: 'b-yekan';
 }
</style>
