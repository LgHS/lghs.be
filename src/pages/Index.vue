<template>
  <Layout>

    <section id="content" class="section">
      <div class="container">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Liège Hackerspace</h1>
    <p>
      Un espace de 120m² proche du centre ville dédié à l’électronique, la créativité, l’impression 3D, la programmation, le DIY, …
    </p>

    <h2>A propos…</h2>
    <p>
      Un Hackerspace est un <strong>tiers-lieu</strong>, un espace où des gens avec un intérêt commun (souvent autour de l’informatique, de la technologie, des sciences, des arts…) peuvent <strong>se rencontrer et collaborer</strong>.
      <br />Les Hackerspaces peuvent être vus comme des laboratoires communautaires ouverts où des gens (les hackers) peuvent partager ressources, savoirs,…
    </p>
    <g-image src="~/static/img/minitel-open.jpeg" width="500"/>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
