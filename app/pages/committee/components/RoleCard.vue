<template>
  <div class="role-card">
    <!-- Role title -->
    <h3 class="text text--h3">{{ role.title }}</h3>

    <!-- Members -->
    <div class="member-group">
      <div v-for="member in role.relation" :key="member.id" class="member">
        <img class="member-img" :src="member.url" :alt="member.name" />
        <p class="text text--p">{{ member.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  role: {
    type: Object,
    required: true,
    // Example structure: 
    // { title: 'Team Lead', relation: [{ id: 1, name: 'Alice', url: '...' }, ...] }
  }
})
</script>

<style scoped>
.role-card {
  margin-bottom: 2rem;
}

.member-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.member {
  text-align: center;
}

.member-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
