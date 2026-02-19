<template>
  <div class="committee">
    <div
      v-for="team in data || []"
      :key="team[0]?.id"
      class="committee-team"
    >
      <div class="committee-row">
        <div
          v-for="role in team.slice(0, 1)"
          :key="role.id"
        >
          <RoleCard :role="role" />
        </div>
      </div>

      <div class="committee-row">
        <div
          v-for="role in team.slice(1)"
          :key="role.id"
        >
          <RoleCard :role="role" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ year: string }>()

const { data } = await useAsyncData(
  `committee-${props.year}`,
  () => $fetch(`/api/committee?year=${encodeURIComponent(props.year)}`),
  {
    keepPreviousData: true
  }
)
</script>

<style scoped>
.committee-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
