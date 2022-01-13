<template>
  <Layout>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $page.projets.title }}
          </h1>
          <h2 class="subtitle">
            {{ $page.projets.subtitle }}
          </h2>
        </div>
      </div>
    </section>
    <section id="content" class="section">
      <div class="container">
        <VueRemarkContent />
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.projets.title,
      meta: [
        {
          name: 'description',
          content: this.$page.projets.subtitle,
        },
      ]
    }
  }
}
</script>

<page-query>
query Projets ($id: ID!) {
  projets(id: $id) {
    title
    subtitle
  }
}
</page-query>
