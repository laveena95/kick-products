<template>
  <div class="hidden-md-and-up black">
    <v-navigation-drawer
      app
      overflow
      class="black"
       v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      right
      width="100%"
      src="../assets/img/back3.jpg"
      
    >
      <v-toolbar 
      class=" black" flat style="opacity:0.9">
      <div class="">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
               <v-app-bar-nav-icon v-on="on"  
               v-if="primaryDrawer.type !== 'permanent'"
              @click.stop="primaryDrawer.model = !primaryDrawer.model"
              color="#eb6057"
              class="ml-n2 " large> <v-icon>mdi-close-circle</v-icon></v-app-bar-nav-icon>
          </template>
        </v-menu>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-title  class="head font-weight-normal">Kick Products 
      </v-toolbar-title>
       <v-spacer></v-spacer>
        <v-avatar size="50" style="border:3px solid silver" class="">
          <v-img src="../assets/img/l.png" aspect-ratio="">  
          </v-img>
      </v-avatar><v-spacer></v-spacer>
    </v-toolbar>
    <v-col cols="12" md="3" sm="12" class="">
      <v-card color="" elevation="" flat class="black" style="opacity:0.8">
          <div class="" style="background-color: ">
            <v-row>
              <v-col cols="9">
                <v-card-title class="ml-2 mt-n2 grey--text">Menu</v-card-title>
              </v-col>
              <v-col cols="3">
                <v-btn fab small color="" elevation="5">
                  <v-icon color="#eb6057" class="font-weight-bold">mdi-magnify</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-container style="background-color:">
            <v-row>
              <v-col cols="12" v-for="item in pages" :key="item.id" >
                <v-list>
                  <v-list-item >
                    <v-btn text :to="item.path" class="text-center mx-auto justify-content">
                      <v-icon color="#eb6057" >{{ item.icon }}</v-icon> <p class="mt-4 ml-4 page">{{ item.title}}</p>
                    </v-btn>
                  </v-list-item>
                </v-list>
                <v-divider class="mx-12 grey" ></v-divider>
              </v-col>
            </v-row>
            </v-container>
          </div>
      </v-card>
    </v-col>
    </v-navigation-drawer>
    <v-toolbar class="black" flat gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.8)" height="80px">
      <v-spacer></v-spacer>
      <v-toolbar-title  class="head font-weight-normal">Kick Products <v-spacer></v-spacer>
        <div style="" class="text-center mt-n2">
          <v-toolbar-item>
            <v-btn text fab dark x-small>
              <a href="https://www.facebook.com/Kick-Products-Pvt-Ltd-105787567912665/"><v-icon color="grey">fab fa-facebook-f</v-icon></a>
            </v-btn>
          </v-toolbar-item>
          <v-toolbar-item>
            <v-btn text fab dark x-small>
              <a href="https://www.instagram.com/kickproducts?r=nametag"><v-icon color="grey">fab fa-instagram</v-icon></a>
            </v-btn>
          </v-toolbar-item>
          <v-toolbar-item>
            <v-btn text fab dark x-small>
              <router-link to="/about"><v-icon color="grey">fab fa-whatsapp</v-icon></router-link>
            </v-btn>
          </v-toolbar-item>
        </div>
      </v-toolbar-title>
       <v-spacer></v-spacer>
        <v-avatar size="50" style="border:3px solid silver" class="">
          <v-img src="../assets/img/l.png" aspect-ratio="">  
          </v-img>
      </v-avatar>
      <v-spacer></v-spacer>
    </v-toolbar>
   <v-divider class="mx-4 grey" ></v-divider>
    <v-toolbar class="black" flat>
      <v-spacer></v-spacer>
      <v-toolbar-item>
            <v-btn text>
                <v-icon color="#f25c6b" x-small>fas fa-phone </v-icon> <p style="color:silver;font-size:8px;" class="mt-4">+(94) 777 044 429</p>
            </v-btn>
          </v-toolbar-item>
          <v-toolbar-item>
            <v-btn text style="text-transform: lowercase;">
              <v-icon color="#f25c6b" x-small>fas fa-envelope</v-icon><p style="color:silver ;font-size:10px;" class="mt-4">info@kickceylon.com</p> 
            </v-btn>
          </v-toolbar-item>
        <div class="hidden-sm-and-up">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-app-bar-nav-icon v-on="on"  
                v-if="primaryDrawer.type !== 'permanent'"
                @click.stop="primaryDrawer.model = !primaryDrawer.model"
                color="grey"
                class="ml-n2 " large></v-app-bar-nav-icon>
            </template>
          </v-menu>
        </div>
        <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
      primaryDrawer: {
        model: null,
      },
      pages: [
        {
          id: '1',
          icon: "fas fa-home",
          title: "home",
          path: "/"
        },
        {
          id: '2',
          icon: "fas fa-heart",
          title: "About Us",
          path: "/aboutus"
        },
        {
          id: '3',
          icon: "fas fa-phone",
          title: "Contact",
          path: "/contact"
        },
        {
          id: '4',
          icon: "fas fa-shopping-bag",
          title: "Products",
          path: "/menu"
        },
        {
          id: '5',
          icon: "fas fa-leaf",
          title: "Tea",
          path: "/tea"
        },
        {
          id: '6',
          icon: "fas fa-box",
          title: "Spices",
          path: "/fish"
        },
      ]})

}
</script>

<style scoped="">
.head{
  font-family: 'Kaushan Script', cursive;
  color: #f25c6b;
  font-size: 25px;
}
.page{
 color: #eb6057; 
 text-transform: capitalize;
 font-family: 'Redressed', cursive;
 font-size: 20px;
}
a{
  text-decoration:none;
}
</style>