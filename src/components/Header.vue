<template>
<b-container fluid>
    <b-row>
        <b-col>
            <b-navbar toggleable="xl">
                <b-navbar-brand>
                    <router-link to="/"><img class="logo-image" src="/img/AN-Logo.png" alt="Logo"></router-link>
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <router-link class="navHeader " active-class="active" tag="b-nav-item" to="/">Home</router-link>
                    <router-link class="navHeader text-nowrap" active-class="active" tag="b-nav-item" to="/Upcoming_Auctions">Upcoming Auctions</router-link>
                    <router-link class="navHeader" active-class="active" tag="b-nav-item" to="/video">Video</router-link>
                    <b-nav-item-dropdown text="Buy" active-class="active" class="navHeader">
                        <b-dropdown-item to="/buy">Buy Map</b-dropdown-item>
                        <b-dropdown-item to="/BuyTable">Buy Table</b-dropdown-item>
                        <b-dropdown-item to="/BuyUSMap">Buy Interactive Map</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <router-link class="navHeader" active-class="active" tag="b-nav-item" to="/sell">Sell</router-link>
                    <router-link class="navHeader text-nowrap" active-class="active" tag="b-nav-item" to="/help_center">Help Center</router-link>
                    <b-navbar-nav class="ml-auto">
                        <div class="text-center">
                            <b-button data-toggle="modal" data-target="#loginModal" active-class="active" class="loginBtn" tag="b-nav-item">Login / Sign-up</b-button>
                            <span class="orange_call_nav">Need Help? Call 866.921.2135</span>
                        </div>

                    </b-navbar-nav>
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
        getActiveClass() {
            document.getElementById("navItem").className = "active";
        }
    },
    components: {
        login
    }
}
</script>

<style>
.navHeader {
    font-size: 1.2em;
    padding: .1%;
    font-family: 'Roboto', sans-serif;
}

a.nav-link {
    color: rgb(112, 108, 108);
    border-radius: 3px;
    display: inline-block;
}

.nav-link:hover {
    color: #74BF01;
}

.nav-item.navHeader:focus-within>a {
    color: white;
    background-image: linear-gradient(120deg, #beee4e 0%, #86CB01 100%);
    -webkit-box-shadow: 0px 0px 13px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 13px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 13px -6px rgba(0, 0, 0, 0.75);
}

.navbar {
    position: absolute;
    list-style: none;
}

ul.dropdown-menu {
    -webkit-box-shadow: 3px 3px 22px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 3px 22px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 3px 22px -8px rgba(0, 0, 0, 0.75);
    border: none;
}

.navbar-collapse {
    margin-top: 15px;
}

.logo-image {
    width: 15vh;
    margin-right: 50px;
}

.nav-item.b-nav-dropdown.navHeader.show>.nav-link {
    color: #74BF01;

}

a.dropdown-item:active {
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);

}

.dropdown-menu.show {
    margin-top: 15px;
}

.dropdown-menu::before {
    border-bottom: 9px solid rgba(0, 0, 0, 0.2);
    border-left: 9px solid rgba(0, 0, 0, 0);
    border-right: 9px solid rgba(0, 0, 0, 0);
    content: "";
    display: inline-block;
    left: 50px;
    position: absolute;
    top: -8px;
}

.dropdown-menu::after {
    border-bottom: 8px solid #FFFFFF;
    border-left: 9px solid rgba(0, 0, 0, 0);
    border-right: 9px solid rgba(0, 0, 0, 0);
    content: "";
    display: inline-block;
    left: 50px;
    position: absolute;
    top: -7px;
}

.nav-item.loginBtn.btn.btn-secondary,
.nav-item.btn.px-4.btn-secondary {
    background-color: transparent;
    border: none;
}

.nav-item.loginBtn.btn.btn-secondary:active,
.nav-item.btn.px-4.btn-secondary:active {
    background-color: transparent;
    border: none;
}

.nav-item.loginBtn.btn.btn-secondary:focus,
.nav-item.btn.px-4.btn-secondary:focus {
    box-shadow: none;
    -webkit-box-shadow: none;
}

.nav-item.btn.loginBtn>a.nav-link {
    border-radius: 19px;
    padding-left: 13px;
    padding-right: 13px;
}

.nav-item.btn.loginBtn.active>a.nav-link {
    -webkit-box-shadow: 0px 0px 36px -12px rgba(115, 191, 1, 1);
    -moz-box-shadow: 0px 0px 36px -12px rgba(115, 191, 1, 1);
    box-shadow: 0px 0px 36px -12px rgba(115, 191, 1, 1);
    background-image: linear-gradient(120deg, #d4fc79 0%, #86CB01 100%);
    color: white;
}

.nav-item.loginBtn:hover>a.nav-link {
    -webkit-box-shadow: 0px 0px 36px -12px rgba(115, 191, 1, 1);
    -moz-box-shadow: 0px 0px 36px -12px rgba(115, 191, 1, 1);
    box-shadow: 0px 0px 36px -12px rgba(115, 191, 1, 1);
    background-image: linear-gradient(120deg, #d4fc79 0%, #86CB01 100%);
    color: white;
}

.nav-item.b-nav-dropdown.navHeader.show>.nav-link {
    color: white;
}

@media (min-width: 950px) and (max-width: 1050px) {
    .collapse {
        display: none !important;
    }
}

.orange_call_nav {
    font-size: 14px;
    color: rgb(255, 138, 28);
    display: inherit;
}
</style>
