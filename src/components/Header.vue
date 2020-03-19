<template>
<b-container fluid>
     <b-row>
          <b-col>
               <b-navbar variant="none" toggleable="md">
                    <b-navbar-brand>
                         <router-link to="/"><img class="logo-image" src="/img/AN-Logo.png" alt="Logo"></router-link>
                    </b-navbar-brand>
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                         <router-link class="navItem mx-2" to="/">Home</router-link>
                         <router-link class="navItem mx-2" to="/buy" >Buy</router-link>
                         <router-link class="navItem mx-2" to="/sell" >Sell</router-link>
                         <router-link class="navItem mx-2" to="/help_center">Help</router-link>
                         <router-link data-toggle="modal" data-target="#loginModal" class="ml-auto navItem loginBtn" to="#">Login</router-link>
                    </b-collapse>
               </b-navbar>
          </b-col>
     </b-row>
     <login></login>
</b-container>
</template>

<script>
import login from "../components/Login.vue"

name = "Header";
export default {
     data() {
          return {

          }
     },
     methods: {
    
     },
     components: {
          login
     }
}
</script>

<style>
.logo-image {
     width: 15vh;
     margin-right: 50px;
}

.navItem{
     padding: 5px 15px 5px 15px;
     border: none;
     color: rgb(59, 59, 59);
     border-radius: 3px; 
     text-decoration: none;    
}
@media (max-width:960px){
    .navItem{
   display:block;
   text-align:center; 
} 
}

a.navItem:hover {
     background:#74be02;
     color:white;
     text-decoration: none;  
}
.navbar-light .navbar-toggler{
    border:none;
}

button:focus{
    outline:5px auto #5bc56a;
}

.loginBtn{
     border:1px solid #a5d898;
     color:#74be02;
  
}
</style>
