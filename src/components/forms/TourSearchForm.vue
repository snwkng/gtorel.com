<script setup>
import {ref} from 'vue'

const whereYouGo = ref('Sea')

</script>

<template>
  <form action="/search" class="flex flex-row">
      <select name="pets" id="pet-select" class="h-16 py-4 px-4 mr-1 rounded-l-lg">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
      <select name="pets" id="pet-select" class="h-16 py-4 px-4 mr-1">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>

    <button class="h-16 py-4 px-4 bg-red-600 rounded-r-lg" type="submit">Найти</button>
  </form>
</template>
