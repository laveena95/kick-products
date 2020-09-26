<template>
    <v-app style="background-color: ;">
      <Header class="hidden-sm-and-down"/>
      <MobileHeader class=""/>
      <v-content class="" style="">
        <router-view></router-view>
      </v-content>
      <Footer />
  </v-app>
</template>

<script>

import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    MobileHeader,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style >
::-webkit-scrollbar-track{
  border-radius: 20px;
  background-color: silver;
}
::-webkit-scrollbar{
  width: 12px;
}
::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: black;
  border: 3px solid silver;
}
</style>
