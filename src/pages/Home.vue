<script setup>
import {ref} from 'vue'

import FirstScreenSearch from "../components/FirstScreenSearch.vue"
import FooterPage from "../components/Footer.vue"
import DefaultCard from "../components/cards/DefaultCard.vue"
import BusRent from "../components/BusRent.vue"
import SectionExcursions from "../components/SectionExcursions.vue"

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

    <bus-rent></bus-rent>
    <section-excursions></section-excursions>
    <footer-page></footer-page>
  </div>
</template>

