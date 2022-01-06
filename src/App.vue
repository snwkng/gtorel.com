<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MobileNav from "@/components/MobileNav.vue";
import TopNav from "./components/TopNav.vue";
</script>

<template class="container mx-auto px-1">
  <top-nav></top-nav>
  <router-view></router-view>
  <mobile-nav></mobile-nav>
</template>

<style lang="scss"></style>
