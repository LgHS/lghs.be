<template>
  <Layout>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $page.pages.title }}
          </h1>
          <h2 class="subtitle">
            {{ $page.pages.subtitle }}
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
      title: this.$page.pages.title,
      meta: [
        {
          name: 'description',
          content: this.$page.pages.subtitle,
        },
      ]
    }
  }
}
</script>

<page-query>
query Pages ($id: ID!) {
  pages(id: $id) {
    title
    subtitle
  }
}
</page-query>
