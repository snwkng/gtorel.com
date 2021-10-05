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
    <section class="container mx-auto px-10 py-10 overflow-hidden">
      <h2 class="text-2xl font-bold mb-8 pr-2 pl-2">Популярные направления</h2>
      <div class="flex flex-wrap">
        <default-card v-for="city in cities" :key="city.id" :place="city"></default-card>
      </div>
    </section>

    <section class="container mx-auto px-10 py-10">
      <div class="flex flex-col md:flex-row bg-gray-600 text-white w-full h-full md:h-96 p-10 h-52 rounded-xl">
        <div class="flex justify-center flex-col w-full md:w-1/2">
          <h3 class="text-4xl font-bold mb-4">Аренда микроавтобуса в Орле</h3>
          <div class="text-base mb-10">Арендуйте восемнадцати местный микроавтобус туристического класса, который оснащен всем необходимым для комфортной поездки</div>
          <button type="button" class="p-3.5 bg-white text-gray-900 w-auto max-w-min rounded-lg">Арендовать</button>
        </div>
        <div class="w-full md:w-1/2 h-80 bg-sprinter bg-no-repeat bg-center bg-contain"></div>
      </div>
    </section>
    <footer-page></footer-page>
  </div>
</template>

