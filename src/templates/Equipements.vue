<template>
  <Layout>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $page.equipements.title }}
          </h1>
          <h2 class="subtitle">
            {{ $page.equipements.subtitle }}
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
      title: this.$page.equipements.title,
      meta: [
        {
          name: 'description',
          content: this.$page.equipements.subtitle,
        },
      ]
    }
  }
}
</script>

<page-query>
query Equipements ($id: ID!) {
  equipements(id: $id) {
    title
    subtitle
  }
}
</page-query>
