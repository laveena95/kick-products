<template>
<div>
  <nav class="grey">
      <v-toolbar dark height="90px"  class="navItem">
          <v-spacer></v-spacer>
        <v-toolbar-item>
        <v-card-title class="mt-4">
        <p class="primary-title text-center" style="letter-spacing:10px;font-family: 'Kaushan Script', cursive; font-size:40px; color: #f25c6b"> Kick</p> </v-card-title>
        <v-card-text>
            <p class="text-center mt-n6 ml-n2" style="font-family: 'Architects Daughter', cursive;color:silver;font-size:20px;letter-spacing:5px;">PRODUCTS</p>
        </v-card-text>
        </v-toolbar-item>
        <v-spacer></v-spacer>
          <v-toolbar-item>
            <v-btn text>
                <v-icon color="#f25c6b" small>fas fa-phone </v-icon> <p style="color:silver;font-size:12px;" class="mt-4">+(94) 777 044 429</p>
            </v-btn>
          </v-toolbar-item>
          <v-toolbar-item>
            <v-btn text style="text-transform: lowercase;">
              <v-icon color="#f25c6b" small>fas fa-envelope</v-icon><p style="color:silver ;font-size:12px;" class="mt-4">info@kickceylon.com</p> 
            </v-btn>
          </v-toolbar-item>
           <v-toolbar-item>
            <v-btn text style="text-transform: capitalize;">
              <v-icon color="#f25c6b" small>mdi-clock</v-icon> <p style="color:silver;font-size:12px;" class="mt-4">opening hours : 8.00 a.m - 8.00 p.m</p> 
            </v-btn>
          </v-toolbar-item>
          <v-toolbar-item><v-card-text style="font-family: 'Architects Daughter', cursive;color:silver;font-size:18px;">Follow us on</v-card-text></v-toolbar-item>
          
          <v-toolbar-item>
            <v-btn text fab dark>
              <a href="https://www.facebook.com/Kick-Products-Pvt-Ltd-105787567912665/"><v-icon color="#f25c6b" >fab fa-facebook-f</v-icon></a>
            </v-btn>
          </v-toolbar-item>
          <v-toolbar-item>
            <v-btn text fab dark>
              <a href="https://www.instagram.com/kickproducts?r=nametag"><v-icon color="#f25c6b">fab fa-instagram</v-icon></a>
            </v-btn>
          </v-toolbar-item>
          <v-toolbar-item>
            <v-btn text fab dark>
              <router-link to="/about"><v-icon color="#f25c6b">fab fa-whatsapp</v-icon></router-link>
            </v-btn>
          </v-toolbar-item>
    </v-toolbar>
      <v-divider class="mx-4"></v-divider>
      
      <v-toolbar  dark flat class="navItem2 " height="120">
        
        <v-toolbar-item>
                <v-card width="160" height="110" class="ml-16" flat style="z-index:1;">
                        <v-img src="../assets/img/l.png" style="" class=""></v-img>
                </v-card> 
           </v-toolbar-item>
          <v-spacer></v-spacer>
          <v-toolbar-item icons-and-text >

             <v-list >
                  <v-list-item to="/" style="" class="text-center list red--text">
                  <div >
                       <v-icon>
                          fas fa-home
                      </v-icon><br>
                      <v-text class="text--center">Home</v-text>
                  </div>
                  </v-list-item>
              </v-list>
          </v-toolbar-item>
          <v-toolbar-item icons-and-text >
             <v-list >
                  <v-list-item to="/aboutus" style="" class="text-center" color="pink">
                  <div>
                       <v-icon>
                          fas fa-heart
                      </v-icon><br>
                      <v-text class="text--center ">About Us</v-text>
                  </div>
                  </v-list-item>
              </v-list>
          </v-toolbar-item>
          <v-toolbar-item icons-and-text >
              <v-list >
                  <v-list-item to="/contact" style="" class="text-center" color="blue">
                  <div>
                       <v-icon>
                          fas fa-phone
                      </v-icon><br>
                      <v-text class="text--center ">Contact Us</v-text>
                  </div>
                  </v-list-item>
              </v-list>
          </v-toolbar-item>
          <v-toolbar-item icons-and-text >
             <v-list >
                  <v-list-item to="/menu" style="background-color:transparent;" class="text-center" color="brown">
                  <div>
                       <v-icon>
                          fas fa-shopping-bag
                      </v-icon><br>
                      <v-text class="text--center mt-2">Products</v-text>
                  </div>
                  </v-list-item>
              </v-list>
          </v-toolbar-item>
          <v-toolbar-item icons-and-text >
             <v-list >
                  <v-list-item to="/tea" style="" class="text-center green--text">
                  <div>
                       <v-icon>
                         fas fa-leaf
                      </v-icon>
                      <v-icon>
                         fas fa-tea-cup
                      </v-icon><br>
                      <v-text class="text--center mt-2">Tea & Coffee</v-text>
                  </div>
                  </v-list-item>
              </v-list>
          </v-toolbar-item>
          <v-spacer></v-spacer>
      </v-toolbar>
  </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navItem{
    font-family: 'Lexend Peta', sans-serif;
    font-size: 5px;
}
.navItem2{
    text-transform: uppercase;
    font-family: 'Lexend Peta', sans-serif;
    font-size: 12px;
}
a{
    text-decoration: none;
}
</style>