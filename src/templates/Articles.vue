<template>
  <Layout>

    <section class="hero is-primary" v-bind:class="{ 'is-medium has-background': $page.articles.cover !== 'null'}">
      <img :src="$page.articles.cover" class="hero-background is-transparent" v-if="$page.articles.cover !== 'null'"/>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $page.articles.title }}
          </h1>
          <h2 class="subtitle">
            {{ $page.articles.subtitle }}
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
      title: this.$page.articles.title,
      meta: [
        {
          name: 'description',
          content: this.$page.articles.subtitle,
        },
      ]
    }
  }
}
</script>

<page-query>
query Articles ($id: ID!) {
  articles(id: $id) {
    title
    subtitle
    cover
  }
}
</page-query>
