<script setup>
import {ref} from 'vue'

import FirstScreenSearch from "@/components/FirstScreenSearch.vue"
import FooterPage from "@/components/Footer.vue"
import DefaultCard from "@/components/cards/DefaultCard.vue"

const cities = ref([
  {id: 1, name: 'Краснодарский край', imageSrc: 'bg-card-kk'},
  {id: 2, name: 'Азовское море', imageSrc: 'bg-card-azov'},
  {id: 3, name: 'Крым', imageSrc: 'bg-card-crimea'},
  {id: 4, name: 'Абхазия', imageSrc: 'bg-card-ab'},
])
</script>

<template>
  <div class="">
    <first-screen-search></first-screen-search>
    <section class="container mx-auto px-10 py-10">
      <h2 class="text-2xl font-bold mb-8">Популярные направления</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-cols-max">
        <default-card v-for="city in cities" :key="city.id" :place="city"></default-card>
      </div>
    </section>

    <section class="container mx-auto px-10 py-10">
      <div class="bg-gray-400 w-full h-52 rounded-xl">

      </div>
    </section>
    <footer-page></footer-page>
  </div>
</template>

