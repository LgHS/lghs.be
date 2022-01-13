<template>
  <Layout>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Projets
          </h1>
          <h2 class="subtitle">
            Nos projets
          </h2>
        </div>
      </div>
    </section>
    <section id="content" class="section">
      <div class="container">
        <span v-for="projet in $static.projets.edges" :key="projet.node.id">
            <g-link :to="projet.node.path">{{ projet.node.title }}</g-link>
        </span>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Projets'
  }
}
</script>
<static-query>
query {
  projets: allProjets {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</static-query>
