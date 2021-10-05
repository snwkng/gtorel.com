<script setup>
const props = defineProps({
  place: Object
})
</script>

<template>
  <router-link to="/" class="flex flex-col mb-8 pr-2 pl-2 w-full sm:w-1/2 md:w-1/4">
    <div
        :class="[`w-full h-80 bg-no-repeat bg-center bg-cover rounded-xl ${place.imageSrc}`]"
    ></div>
    <div class="font-medium mt-2">{{place.name}}</div>
  </router-link>
</template>
