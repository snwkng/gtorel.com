<script setup>
const props = defineProps({
  place: Object
})
</script>

<template>
  <div class="flex flex-col mb-4 mr-8">
    <div
        :class="[`w-64 h-64 bg-no-repeat bg-center bg-cover rounded-xl ${place.imageSrc}`]"
    ></div>
    <div class="font-medium">{{place.name}}</div>
  </div>
</template>
