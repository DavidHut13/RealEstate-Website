<template>
<div>
    <nav-header></nav-header>
    <router-view></router-view>
    <app-footer v-if="['buy'].indexOf($route.name) && ['BuyUSMap'].indexOf($route.name)"></app-footer>
</div>
</template>

<script>

import NavHeader from "../src/components/Header.vue"
import footer from "../src/components/footer.vue"
export default {
    data() {
        return {

        }

    },
    components: {
        navHeader: NavHeader,
        appFooter: footer
    }
}
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.min.css';
@import '~bootstrap-vue/dist/bootstrap-vue.min.css';
@import 'assets/custom';
</style>
 