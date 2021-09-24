<script>

</script>

<template>
  <footer class="bg-gray-100 w-full pt-10 pb-16 sm:pb-4">
    <div class="px-8 sm:flex sm:justify-center">
      <div class="sm:mr-24">
        <h3 class="uppercase text-md font-semibold">О нас</h3>
        <ul class="mt-3 leading-snug font-light">
          <li class="mt-3"><router-link class="hover:underline" to="">Подбор тура</router-link></li>
          <li class="mt-3"><router-link class="hover:underline" to="">Аренда автобуса</router-link></li>
          <li class="mt-3"><router-link class="hover:underline" to="">О компании</router-link></li>
          <li class="mt-3"><router-link class="hover:underline" to="">Контакты</router-link></li>
          <li class="mt-3"><router-link class="hover:underline" to="">Памятка туристу</router-link></li>
        </ul>
      </div>
      <div class="hidden sm:block">
        <h3 class="uppercase text-md font-semibold">О нас</h3>
        <ul class="mt-3 leading-snug font-light">
          <li class="mt-3"><router-link class="hover:underline" to="">Подбор тура</router-link></li>
          <li class="mt-3"><router-link class="hover:underline" to="">Аренда автобуса</router-link></li>
          <li class="mt-3"><router-link class="hover:underline" to="">О компании</router-link></li>
          <li class="mt-3"><router-link class="hover:underline" to="">Контакты</router-link></li>
          <li class="mt-3"><router-link class="hover:underline" to="">Памятка туристу</router-link></li>
          <li class="mt-3"><router-link class="hover:underline" to=""></router-link></li>
          <li class="mt-3"><router-link class="hover:underline" to=""></router-link></li>
          <li class="mt-3"><router-link class="hover:underline" to=""></router-link></li>
        </ul>
      </div>
    </div>
    <div class="px-8">
      <hr class="w-full mt-8 mb-4 bg-gray-800">
      <div class="flex flex-col leading-snug font-light">
        <div class="mb-2">&copy; GalaTour {{new Date().getFullYear()}}. Информация на сайте не является публичной офертой</div>
        <div class="flex flex-wrap items-center">
          <router-link class="hover:underline" to="">Соглашения</router-link>
          <span class="mx-2">·</span>
          <router-link class="hover:underline" to="">Конфиденциальность</router-link>
          <span class="mx-2">·</span>
          <router-link class="hover:underline" to="">Карта сайта</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
