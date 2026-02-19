<script setup>
</script>

<template>
  <Banner title="events" />
  <main class="main">
    <nav class="main-nav">
      <ul>
        <li class="text text--h3 text--serif"><NuxtLink href="/events">events</NuxtLink></li>
      </ul>
    </nav>
    <section class="main-section">
      <h2 class="text text--h2">Events</h2>
      <p class="text text--p">We're hosting lots of exciting events soon! Check them out below:</p>
      <div class="article-grid">
        <PictureItem title="Welcome Night" date="March 4th"/>
        <PictureItem title="Sausage Sizzle with MMI and MINT" date="March 9th"/>
        <PictureItem title="Buy-Side vs Sell-Side Careers Panel" date="March 31st"/>
        <PictureItem title="Stock Pitch Night" date="May 19th"/>
      </div>
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

.article-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
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

  .article-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
