<script setup>
import ExcursionCard from "../components/cards/ExcursionCard.vue"
</script>

<template>
  <section class="container mx-auto px-10 py-10 overflow-hidden">
    <h2 class="text-2xl font-bold mb-8 pr-2 pl-2">Экскурсионные туры из Орла</h2>
    <div class="flex flex-wrap">
      <excursion-card></excursion-card>
      <excursion-card></excursion-card>
      <excursion-card></excursion-card>
      <excursion-card></excursion-card>
    </div>
    <div class="text-xl font-semibold">Все экскурсии ></div>
  </section>
</template>
