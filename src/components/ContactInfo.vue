<template>
    <div style="background-color: " class="my-8">
        <div class="mx-auto col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" align="center">
           <v-col cols="12" md="12" sm="12">
                <div :class="{'mt-n8': $vuetify.breakpoint.smAndDown, 'mt-6': $vuetify.breakpoint.mdAndUp}" flat align="center" justify="center">
                    <div class="ml-4" :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3 font-weight-bold']">
                        <p class="ban"  style="color:#eb6057" >Reach Out To Us</p> 
                        <p class=" font-weight-bold" :class="{'mt-n2': $vuetify.breakpoint.smAndDown, 'mt-n4': $vuetify.breakpoint.mdAndUp}" style="font-family: 'Architects Daughter', cursive;;">KICK PRODUCTS </p><hr style="width:50px;height:3px;background-color:black">
                    </div>
                </div>
            </v-col> 
        </div>
        <v-container>
            <v-row>
            <v-col cols="12" md="4" style="background-color:#eb6057;">
                <div class="mx-auto mt-3 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <v-col cols="12" md="12" v-for="item in items" v-bind:key="item.id">
                    <v-card max-width="300" color="black" rounded="0" style="" :class="{'mx-0': $vuetify.breakpoint.smAndDown, 'mx-12': $vuetify.breakpoint.mdAndUp}" class="white--text col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                    <v-row>
                        <div class="d-flex mt-3" >
                            <div class="ml-6"><v-icon color="white" size="20">{{item.icon}}</v-icon></div>
                            <div class="mx-6">
                                <p class="head">{{item.head}}</p>
                                <p class="text">{{item.text}}</p>
                                <p class="text">{{item.text2}}</p>
                            </div>
                        </div>
                    </v-row>
                </v-card>
                </v-col>
                </div>
            </v-col>
            <v-col cols="12" md="8" class="img" align="center">
                <div class="col-12 col-md-10">
                    <v-form>
                        <v-row class="mt-3">
                            <v-col cols="12" sm="6" style="margin-top:-8px;">
                                <v-text-field placeholder="First Name" style="field" solo rounded outlined dense class="field"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" style="margin-top:-8px;">
                                <v-text-field placeholder="Last Name" color="black" solo rounded outlined dense class="field"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" style="margin-top:-12px;">
                                <v-text-field placeholder="E-mail" color="black" solo rounded outlined dense class="field"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" style="margin-top:-12px;">
                                <v-text-field placeholder="Telephone Number" color="black" solo outlined dense rounded class="field"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" style="margin-top:-12px;">
                                <v-textarea placeholder="Type Your Message here.." color="black" solo rounded outlined class="field"></v-textarea>
                                <v-btn color="#eb6057" rounded="" style="border:2px solid silver; font-weight:bold">Send Message</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </div>
            </v-col>
        </v-row>
        </v-container>
    </div>
</template>

<style scoped>
    .head {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .text {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        opacity: 0.5;
    }
    .ban {
         font-family: 'Kaushan Script', cursive !important;
    }
    .img {
        background-image: linear-gradient(to top right, rgba(26, 23, 23, 0.5), rgba(7, 7, 7, 0.8)), url("../assets/img/tea.jpeg");
    }
    .field {
        color: rgb(199, 185, 185);
    }
</style>

<script>
export default {
    data: () => {
        return {
            items: [
                {
                    id:1, 
                    icon: 'fa fa-phone', 
                    head: 'Phone Number',
                    text: '+(94) 777 044 429',
                    text2: '+(94) 112 676 655'
                },
                {
                    id:2, 
                    icon: 'fa fa-envelope', 
                    head: 'Email Address',
                    text: 'info@kickceylon.com'
                },
                {
                    id:3, 
                    icon: 'fa fa-map-marker', 
                    head: 'Location',
                    text: '266/23, Deans Road, Maradana, Colombo 10.'
                }
            ]
        }
    }
}
</script>