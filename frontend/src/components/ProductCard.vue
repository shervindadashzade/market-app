<template>
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="300"
      src="https://dkstatics-public.digikala.com/digikala-products/2c769590b9a14fa01edf62b5d0d740b0e2453363_1593596515.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80"
    ></v-img>

    <v-card-title>مایع ظرفشویی پریل | سایز بزرگ</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        40000 تومان
      </div>

      <div>قابلیت ها:
تمیز کنندگی، سفید کنندگی، براق کنندگی، لکه زدایی، چربی زدایی
رایحه:
دارد
نوع رایحه:
اسطوخودوس
صادر کننده مجوز:
سازمان غذا و دارو</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        اضافه کردن به سبد
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name:"ProductCard"
}
</script>
<style scoped>

</style>
<script>
export default {
    
}
</script>