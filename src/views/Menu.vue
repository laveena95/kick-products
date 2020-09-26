<template>
  <div style="background: " class="">
         <ProductBanner/>
           <v-row no-gutters>
            <v-col cols="12" md="12" sm="12">
                <v-card color="" class="mt-n8 grey lighten-5" elevation="20" :class="{'mx-2': $vuetify.breakpoint.smAndDown, 'mx-12': $vuetify.breakpoint.mdAndUp}">
                      <infoimg />
                      <Spices />
                </v-card>
            </v-col>
          </v-row>
  </div>
</template>

<script>
import ProductBanner from '@/components/ProductBanner.vue';
import infoimg from '@/components/infoimg.vue'
import Spices from '@/components/Spices.vue'
export default {
    name:'Menu',
     components: {
         ProductBanner,
         infoimg,
         Spices
  }

}
</script>

<style>

</style>