<template>
  <a :href="url">
    <div class="card">
      <NuxtImg
        class="card__image"
        src="/v1772598912/building_r7qasl.jpg"
      />
      <div class="card__body">
        <h3 class="text text--h3">{{ title }}</h3>
        <p class="text text--p">{{ description }}</p>
        <p class="text text--p">{{ date }}</p>
      </div>
    </div>
  </a>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 24rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

.card__image {
  height: 40%;
  object-fit: cover;
}

.card__body {
  height: 60%;
  padding: 2rem;
}
</style>

<script setup>
defineProps({
  title: String,
  description: String,
  date: String,
  url: String,
})
</script>
