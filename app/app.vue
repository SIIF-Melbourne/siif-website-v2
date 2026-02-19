<template>
  <div class="page">
    <div class="not-footer">
      <NuxtRouteAnnouncer />
      <AppHeader />
      <NuxtPage />
    </div>
  </div>
  <AppFooter />
  <AppModal />
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex; 
  flex-direction: column; 
}

.not-footer {
  flex: 1;
}
</style>
