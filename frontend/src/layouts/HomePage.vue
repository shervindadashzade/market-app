<template>
    <div class="container">
        <h2>آخرین محصولات سایت :</h2> 
        <v-container> 
        <v-row>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </v-row>

        <v-row>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </v-row>
        </v-container>
    </div>
</template>

<script>
import ProductCard from "../components/ProductCard";
export default {
    name:'HomePageLayout',
    data(){
        return {
      }
    },
    components:{
        ProductCard,
    }
}
</script>

<style>
    .conrainer{
        padding: 100px;
    }
</style>