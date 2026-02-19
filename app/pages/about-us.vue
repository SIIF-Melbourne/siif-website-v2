<template>
  <Banner title="about us" />
  <main class="main">
    <section class="section-alpha">
       <h2 class="text text--h2 text--nomargin" >SIIF didn't start as any other university club.</h2>
    </section>
    <section class="section-bravo">
      <div class="text--highlight">
        <p class="text text--h3 text--nomargin">It started with a question:</p>
      </div>
      <div class="text--highlight">
        <p class="text text--h3 text--nomargin">What if students didn’t just learn about markets — but actually operated in them?</p>
      </div>
      <div class="text--highlight">
        <p class="text text--h3 text--nomargin">And what if: the returns didn’t stop at profit, but created real social impact?</p>
      </div>
    </section>
    <section class="section-charlie">
      <h2 class="text text--h2" >From that idea, the <em>Social Impact Investment Fund</em> was born.</h2>
      <p class="text text--p">SIIF is Victoria’s first student-led investment fund that manages <strong>real capital</strong>, makes <strong>real investment decisions</strong>, and generates <strong>real outcomes.</strong> But unlike traditional funds, SIIF measures success in two ways: <strong>financial performance</strong> and <strong>positive impact.</strong> Every dollar earned through capital gains and dividends is redirected to organisations doing meaningful work in the community. </p>
    </section>
    <section class="section-delta">
      <div>
        <h3 class="text text--h3 text--invert">1. Impact</h3>
        <p class="text text--p text--invert">By donating 100% of investment returns, SIIF transforms financial literacy into tangible social outcomes. Markets become a tool, not the objective. Profit becomes a means, not an end. This structure forces a different kind of thinking</p>
        <h3 class="text text--h3 text--invert">2. Education</h3>
        <p class="text text--p text--invert">From pitching stocks and building valuation models to debating macro trends and risk, members experience what it’s like to operate inside an investment fund. Mistakes are real. Wins are real. And the learning curve is steep — by design.</p>
        <h3 class="text text--h3 text--invert">3. Community</h3>
        <p class="text text--p text--invert">SIIF is powered by students who are curious, ambitious, and willing to challenge the status quo. Our members come from diverse degrees and backgrounds, united by a shared belief that finance can — and should — be used for good. Inside SIIF, collaboration beats competition, and learning is collective. From late-night pitch prep to industry networking nights, SIIF is as much about the people as it is about the portfolio.</p>
      </div>
    </section>
    <section class="section-echo">
      <h2 class="text text--h2">SIIF’s story isn’t finished.</h2>
      <p class="text text--p">Every new cohort reshapes the fund. Every investment decision leaves a mark. Every partner, project, and member adds a new chapter.</p>
      <p class="text text--p">This is a living organisation — evolving with markets, ideas, and people.</p>
      <p class="text text--p">If you’re looking for a place where finance is practical, impact is real, and students are trusted with responsibility, you’ve found it.</p>
      <NuxtLink class="button text--sans" to="/contact">CONTACT US</NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.text--highlight {
  background-color: var(--off-white);
  padding: 0.5rem;
  display: inline;
}

.text--nomargin {
  margin: 0
}

.main {
  padding: 0;
}

.section-alpha {
  padding: 4rem max(2rem, 5%);
  text-align: center;
}

.section-bravo {
  width: 100vw;
  background: var(--dark-blue) url("assets/images/aboutus1.png") no-repeat bottom / cover;
  padding: 2rem max(2rem, 5%);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
}

.section-charlie {
  padding: 4rem max(2rem, 5%);
  text-align: center;
}

.section-delta {
  width: 100vw;
  background: var(--dark-blue) url("assets/images/aboutus2.jpg") no-repeat bottom / cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.section-delta > div {
  padding: 2rem max(2rem, 5%);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  backdrop-filter: blur(8px) brightness(0.4);
}

.section-echo {
  padding: 4rem max(2rem, 5%);
  text-align: center;
}

.section-bravo > .text--highlight:first-child {
  margin-bottom: 16rem;
}

@media (min-width: 992px) {
  .section-bravo {
    background-size: contain
  }
}
</style>
