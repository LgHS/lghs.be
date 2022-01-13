<template>
  <Layout>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Equipements
          </h1>
          <h2 class="subtitle">
            Nos équipements
          </h2>
        </div>
      </div>
    </section>
    <section id="content" class="section">
      <div class="container">
        <span v-for="equipement in $static.equipements.edges" :key="equipement.node.id">
            <g-link :to="equipement.node.path">{{ equipement.node.title }}</g-link>
        </span>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Equipements'
  }
}
</script>
<static-query>
query {
  equipements: allEquipements {
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
