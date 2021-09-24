<script setup>
import FirstScreenSearch from '@/components/FirstScreenSearch.vue'
import FooterPage from '@/components/Footer.vue'
</script>

<template>
  <div class="">
    <first-screen-search></first-screen-search>
    <section class="px-10 py-10">
      <h2 class="text-2xl font-bold mb-8">Популярные направления</h2>
      <div class="flex flex-wrap items-center justify-center sm:justify-between">
        <div class="mb-4  mr-4 relative transition w-64 h-80 bg-card-1 bg-no-repeat bg-center bg-cover rounded-md shadow-md hover:shadow-xl">
          <div>asdasd</div>
        </div>
        <div class="mb-4  mr-4 relative transition w-64 h-80 bg-card-1 bg-no-repeat bg-center bg-cover rounded-md shadow-md hover:shadow-xl">
          <div>asdasd</div>
        </div>
        <div class="mb-4  mr-4 relative transition w-64 h-80 bg-card-1 bg-no-repeat bg-center bg-cover rounded-md shadow-md hover:shadow-xl">
          <div>asdasd</div>
        </div>
        <div class="mb-4  mr-4 relative transition w-64 h-80 bg-card-1 bg-no-repeat bg-center bg-cover rounded-md shadow-md hover:shadow-xl">
          <div>asdasd</div>
        </div>
      </div>
    </section>
    <footer-page></footer-page>
  </div>
</template>

