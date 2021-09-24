<script>
import {ref, watchEffect} from "vue"

export default {
  setup() {
    const pageEnd = ref(null)
  }
}
</script>

<template>
  <nav class="container border-t fixed bottom-0 bg-white h-14 w-full flex flex-row justify-center items-center z-50 sm:hidden">
    <router-link to="/" class="h-14 w-1/4 flex flex-col justify-center items-center">
      <font-awesome-icon :class="['active:text-rose-500', {'text-rose-500': $route.name === 'Home'}]" size="lg" icon="home"></font-awesome-icon>
      <div class="text-xs text-gray-400 mt-1">Главная</div>
    </router-link>
    <router-link to="/search" class="h-14 w-1/4 flex flex-col justify-center items-center">
      <font-awesome-icon :class="['active:text-rose-500', {'text-rose-500': $route.name === 'Search'}]" size="lg" icon="search"></font-awesome-icon>
      <div class="text-xs text-gray-400 mt-1">Поиск</div>
    </router-link>
    <div class="h-14 w-1/4 flex flex-col justify-center items-center">
      <font-awesome-icon :class="['active:text-rose-500', {'text-rose-500': $route.name === 'Tours'}]" size="lg" icon="umbrella-beach"></font-awesome-icon>
      <div class="text-xs text-gray-400 mt-1">Туры</div>
    </div>
    <div class="h-14 w-1/4 flex flex-col justify-center items-center">
      <font-awesome-icon :class="['active:text-rose-500', {'text-rose-500': $route.name === 'Excursions'}]" size="lg" icon="map-pin"></font-awesome-icon>
      <div class="text-xs text-gray-400 mt-1">Экскурсии</div>
    </div>
  </nav>
</template>
