<template>
  <v-carousel
    cycle
    hide-delimiters
    show-arrows-on-hover
    class="mx-0"
    height="auto">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      
    > <v-img :src="item.src" aspect-ratio="" max-height="400"></v-img></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/img/banner-2.jpg'),
          },
          {
            src: require('../assets/img/back2.jpg'),
          },
          {
            src: require('../assets/img/back1.jpg'),
          },
           {
            src: require('../assets/img/tea-2.jpg'),
          },
           {
            src: require('../assets/img/back3.jpg'),
          },
        ],
      }
    },
  }
</script>