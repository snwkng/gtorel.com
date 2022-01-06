<script>
export default {};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center px-10 py-10 h-screen sm:h-200 bg-blueNCS"
  >
    <h1 class="text-xl font-semibold mb-4 text-center text-white">
      Путешествуй. Отдыхай.
    </h1>
    <div class="flex flex-row items-center justify-center py-2">
      <input
        type="text"
        class="form-input form-element"
        disabled
        placeholder="Орёл"
      />
      <input type="text" class="form-input form-element" placeholder="Куда" />
      <select class="form-select form-element rounded-r-lg">
        <option>Даты поездки</option>
        <option>test</option>
        <option>test</option>
        <option>test</option>
      </select>
      <button
        class="ml-4 px-5 py-3 text-lg bg-orangeYellowCrayola rounded-lg hover:shadow-lg"
      >
        Найти туры
      </button>
    </div>
  </div>
</template>
