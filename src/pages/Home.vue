<script setup>
import FirstScreenSearch from "@/components/FirstScreenSearch.vue"
import FooterPage from "@/components/Footer.vue"
</script>

<template>
  <div class="">
    <first-screen-search></first-screen-search>
    <section class="container mx-auto px-10 py-10">
      <h2 class="text-2xl font-bold mb-8">Популярные направления</h2>
      <div class="flex flex-wrap items-center justify-center sm:justify-start">
        <div class="flex flex-col mb-4 mr-8">
          <div
            class="
              w-64
              h-64
              bg-card-kk bg-no-repeat bg-center bg-cover
              rounded-xl
            "
          ></div>
          <div class="font-medium">Краснодарский край</div>
        </div>
        <div class="flex flex-col mb-4 mr-8">
          <div
            class="
              w-64
              h-64
              bg-card-azov bg-no-repeat bg-center bg-cover
              rounded-xl
            "
          ></div>
          <div class="font-medium">Азовское море</div>
        </div>
        <div class="flex flex-col mb-4 mr-8">
          <div
            class="
              w-64
              h-64
              bg-card-crimea bg-no-repeat bg-center bg-cover
              rounded-xl
            "
          ></div>
          <div class="font-medium">Крым</div>
        </div>
        <div class="flex flex-col mb-4 last:mr-0">
          <div
            class="
              w-64
              h-64
              bg-card-ab bg-no-repeat bg-center bg-cover
              rounded-xl
            "
          ></div>
          <div class="font-medium">Абхазия</div>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-10 py-10">
      <div class="bg-gray-400 w-full h-52 rounded-xl">

      </div>
    </section>
    <footer-page></footer-page>
  </div>
</template>

