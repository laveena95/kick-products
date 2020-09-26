<template>
  <v-container fluid>
      <v-row no-gutters>
        <v-col class="col-12 col-md-10 mx-auto"  :class="{'mt-n10': $vuetify.breakpoint.smAndDown, 'mt-': $vuetify.breakpoint.mdAndUp}">
          <v-row no-gutters>
            <v-col
              class="col-12 col-md-4 grey lighten-3"
              :class="[$vuetify.breakpoint.smAndDown ? '' : 'border-left']"
            >
              <div class="ma-4 d-flex con">
                <v-avatar tile>
                  <v-img src="../assets/img/truck.png"></v-img>
                </v-avatar>
                <p class="ml-10 font-weight-bold">
                  <span class>Free delivery</span>
                  <br />
                  <span class="green--text">services</span>
                </p>
              </div>
            </v-col>
            <v-col class="col-12 col-md-4 black">
              
              <div class="ma-4 d-flex con">
                <v-avatar tile>
                  <v-img src="../assets/img/support.png"></v-img>
                </v-avatar>
                <p class="ml-10 font-weight-bold">
                  <span class="white--text">Proffesional</span>
                  <br />
                  <span class="green--text">customers</span>
                </p>
              </div>
             
            </v-col>
            <v-col
              class="col-12 col-md-4 green"
              :class="[$vuetify.breakpoint.smAndDown ? '' : ' border-right']"
            >
              <div class="ma-4 d-flex con">
                <v-avatar tile>
                  <v-img src="../assets/img/food.png"></v-img>
                </v-avatar>
                <p class="ml-10 font-weight-bold">
                  <span class="white--text">Online store </span>
                  <br />
                  <span class="black--text">and Payments</span>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>

<style scoped>
.border-left {
  border-radius: 150px 0 0 150px !important;
}
.border-right {
  border-radius: 0 150px 150px 0 !important;
}
.con{
    font-family: 'Lexend Peta', sans-serif;
}

</style>