<template>
    <section>
    <div class="mx-auto col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" align="center" justify="center" style="">
      <v-col cols="12" md="12" sm="12">
            <div :class="{'mt-n16': $vuetify.breakpoint.smAndDown, 'mt-': $vuetify.breakpoint.mdAndUp}" flat align="center" justify="center">
                <div class="ml-4" :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']">
                    <p class="ban font-weight-bold "  style="color:#eb6057" >Follow Us</p>
                </div>
            </div>
        </v-col> 
        <v-card elevation="0" flat rounded="0" max-width="350" color="" class="grey lighten-5 mt-4">
          <v-row no-gutters style="">
            <div cols="12" md="4" v-for="item in items" v-bind:key="item.id" style="" class=" mx-auto">
              <v-card class="card card_red text-center justify-content" align="center" justify="center" color="" :class="{'mx-1': $vuetify.breakpoint.smAndDown, '': $vuetify.breakpoint.mdAndUp}">
                <div class="mx-auto mt-2 align-center justify-content" align="center" justify="center" style="background-color:">
                  <v-btn outlined fab class="button" >
                    <a :href="item.path"> <v-icon :color="item.color" size="40">{{item.icon}}</v-icon></a>
                  </v-btn>
                </div>
              </v-card>
            </div>
          </v-row> 
      </v-card>
    </div>
</section>
</template>

<style scoped>
a{
  text-decoration: none;
}
.ban 
    {
        font-family: 'Kaushan Script', cursive;
    }
.card {
  position: relative;
  width: 70px;
  height: 70px;
  overflow: hidden;
  margin: 0 auto;
  transition: 0.5s;
  border-radius: 50%;
}
.card:hover {
  transform: scale(1.1);
}
.card_red,
.card_red .title .fab {
  background: linear-gradient(-45deg,black, silver);
}
.card:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40%;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1;
  transform: skewY(-5deg) scale(1.5);
}

</style>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          id:1,
          icon: 'fab fa-facebook',
          color:'blue',
          path: "https://www.facebook.com/Kick-Products-Pvt-Ltd-105787567912665/"
        },
        {
          id: 2,
          icon: 'fab fa-instagram',
          color:'pink',
          path: "https://www.instagram.com/kickproducts?r=nametag"
        },
        {
          id: 3,
          icon: 'fab fa-whatsapp',
          color: 'green',
          path: ""
        }
      ]
    }
  }
}
</script>>