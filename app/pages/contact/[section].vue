<script setup>
import ClubMembership from '~/components/contact/ClubMembership.vue'
import CorporatePartner from '~/components/contact/CorporatePartner.vue'
import ContactUs from '~/components/contact/ContactUs.vue'

const route = useRoute()

const sections = {
  "club-membership": ClubMembership,
  "corporate-partner": CorporatePartner,
  "contact-us": ContactUs
}

const section = computed(() => {
  const current = route.params.section
  return sections[current] ? current : 'club-membership'
})
</script>

<template>
  <Banner title="contact us" />
  <main class="main">
    <nav class="main-nav">
      <ul>
        <li class="text text--h3 text--serif"><NuxtLink href="/contact/club-membership">club membership</NuxtLink></li>
        <li class="text text--h3 text--serif"><NuxtLink href="/contact/corporate-partner">corporate partner</NuxtLink></li>
        <li class="text text--h3 text--serif"><NuxtLink href="/contact/contact-us">contact us</NuxtLink></li>
      </ul>
    </nav>
    <section class="main-section">
      <component :is="sections[section]" />
    </section>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem max(2rem, 5%);
  gap: 2rem;
}

.main-nav {
  display: flex;
  flex-direction: column;
  min-width: 18rem;
  text-align: center;
}

.main-nav > ul {
  padding: 0
}

.main-section {
  flex-grow: 1;
  text-align: center;
}


@media (min-width: 992px) {
  .main {
    flex-direction: row;
    padding: 6rem max(2rem, 10%);
    gap: 6rem;
  }

  .main-nav {
    text-align: left;
  }

  .main-section {
    text-align: left;
  }
}
</style>
