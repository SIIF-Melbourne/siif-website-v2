<template>
  <header class="site-nav">
    <NuxtLink href="/">
      <NuxtImg
        class="site-nav__logo"
        src="/v1772546286/SIIF_Logo_PNG_High_Quality_Dark_Blue_zogssr.png"
        alt="SIIF Logo"
      />
    </NuxtLink>
    <ul class="site-nav__links">
      <li class="text"><NuxtLink href="/about-us">about us</NuxtLink></li>
      <li class="text"><NuxtLink href="/committee">committee</NuxtLink></li>
      <li class="text"><NuxtLink href="/publications">publications</NuxtLink></li>
      <li class="text"><NuxtLink href="/events">events</NuxtLink></li>
      <li class="text"><NuxtLink href="/contact">contact</NuxtLink></li>
    </ul>
    <MenuIcon />
  </header>
</template>

<style scoped>
.site-nav {
  height: 6rem;
  background: var(--off-white);
  max-width: 108rem;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between
}

.site-nav__logo {
  height: 2.5rem
}

.site-nav__links {
  display: none;
  padding-right: 1rem
}

/* See global.css for scroll disable */

body:has(#site-overlay:target) .site-nav__links {
  display: none;
}

@media (min-width: 992px) {
  .site-nav__links {
    display: flex;
    gap: 2rem
  }
}
</style>
