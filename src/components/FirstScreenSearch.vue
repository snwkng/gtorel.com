<script setup>
import TourSearchForm from '../components/forms/TourSearchForm.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center px-10 py-10 h-auto min-h-500"> <!-- bg-home-screen-2 bg-center bg-contain bg-no-repeat -->
    <h1 class="text-xl font-semibold mb-4 text-center">
      Путешествуй. Отдыхай.
    </h1>
    <TourSearchForm></TourSearchForm>
<!--    <router-link to="/search" class="cursor-pointer bg-white rounded-full flex justify-center items-center p-4 shadow-md w-3/5 sm:w-2/4 md:w-1/4">-->
<!--      <div class="text-gray-900">Расширенный поиск</div>-->
<!--    </router-link>-->
  </div>
</template>
