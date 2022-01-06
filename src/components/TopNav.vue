<script>
export default {
  data () {
    return {
      scrollY: 0
    }
  },
  methods: {
    handleScroll () {
      this.scrollY = window.pageYOffset
    }
  },
  created () {
    window.addEventListener("scroll", this.handleScroll)
  },
  unmounted () {
    window.removeEventListener("scroll", this.handleScroll)
  },
};
</script>

<template>
  <header :class="['w-full fixed bg-transparent text-white', {'bg-white text-black': scrollY > 100}]">
    <nav
      class="container px-12 py-4 mx-auto flex flex-row items-center justify-between"
    >
      <div class="text-2xl">GalaTour</div>
      <div class="flex">
        <router-link to="#" class="pr-4 pl-4">К морю</router-link>
        <router-link to="#" class="pr-4 pl-4">Экскурсии</router-link>
        <router-link to="#" class="pr-4 pl-4">Контакты</router-link>
      </div>
    </nav>
  </header>
</template>
