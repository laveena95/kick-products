<template>
  <div class="links" >
      <nav>
        <v-toolbar dark height="60px">
          <v-spacer></v-spacer>
          <v-toolbar-item>
            <v-btn text>
                <v-icon color="red">mdi-phone </v-icon>+(94) 123-456-789
            </v-btn>
          </v-toolbar-item>
          <v-toolbar-item>
            <v-btn text style="text-transform: lowercase;">
              <v-icon color="red">mdi-home</v-icon>info@kickceylon.com
            </v-btn>
          </v-toolbar-item>
           <v-toolbar-item>
            <v-btn text style="text-transform: capitalize;">
              <v-icon color="red">mdi-clock</v-icon>opening hours : 8.00 a.m - 8.00 p.m
            </v-btn>
          </v-toolbar-item>
          <v-spacer></v-spacer>
          <v-toolbar-item>
            <v-btn text fab dark>
              <router-link to="/about"><v-icon color="red">mdi-facebook</v-icon></router-link>
            </v-btn>
          </v-toolbar-item>
          <v-toolbar-item>
            <v-btn text fab dark>
              <router-link to="/about"><v-icon color="red">mdi-instagram</v-icon></router-link>
            </v-btn>
          </v-toolbar-item>
          <v-toolbar-item>
            <v-btn text fab dark>
              <router-link to="/about"><v-icon color="red">mdi-twitter</v-icon></router-link>
            </v-btn>
          </v-toolbar-item>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-toolbar flat class="hidden-sm-and-down" height="80px" width="" color="black" style="opacity:0.5">
          <v-spacer></v-spacer>
         <v-tabs
      v-model="tab"
      centered=""
      dark
       center-active
      icons-and-text 
    >
      <v-tabs-slider color="red"></v-tabs-slider>

      <v-tab href="/">
        Home
        <v-icon>mdi-home</v-icon>
      </v-tab>

      <v-tab href="/aboutus">
        About Us
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab href="/contact">
        Contact Us
        <v-icon>mdi-phone</v-icon>
      </v-tab>
    </v-tabs>
     
          <v-spacer></v-spacer>
          
          <v-toolbar-item>
           <router-link to="/menu">
               <v-btn x-large dark text exact-active-class="" tag="li">Products</v-btn>
              </router-link>
          </v-toolbar-item>
          <v-toolbar-item>
            <v-btn x-large dark text>
              Tea
            </v-btn>
          </v-toolbar-item>
          <v-toolbar-item>
            <v-btn x-large dark text>
              Maldives fish
            </v-btn>
          </v-toolbar-item>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div class="tr hidden-sm-and-down"></div>
      </nav>
  </div>
</template>

<script>

export default {
   data () {
      return {
        tab: null,
      }
   }
}
</script>

<style scoped>
.links{
  font-family: 'Red Rose', cursive;
}
.logo{
  width:100px;
  height:100px;
}
.active{
  background: red;
  color: black;
}
.v-btn{
   padding: 0 0 0 10px;
    text-transform: capitalize;
  }
.tr{
  height:0;
  width: 0;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  border-top: 80px solid black;
  position: absolute;
  left: 45%;
  z-index: 1;
}
a{
  text-decoration: none;
  color: white;
}
.v-toolbar-item-active{
  color: green;
}
.v-btn:active{
  color: red;
}

</style>