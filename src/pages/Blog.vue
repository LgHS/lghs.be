<template>
  <Layout>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Blog
          </h1>
          <h2 class="subtitle">
            Nos articles
          </h2>
        </div>
      </div>
    </section>
    <section id="content" class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-4-desktop is-6-tablet" v-for="article in $static.articles.edges" :key="article.node.id">
            <g-link :to="article.node.path">
              <div class="card">
                <div class="card-image" v-if="article.node.cover !== 'null'">
                  <figure class="image is-4by3">
                    <img :src="article.node.cover" alt="Product 2 Name">
                  </figure>
                </div>
                <div class="card-content">
                  <p class="title has-text-black is-4">{{ article.node.title }}
                  </p><p class="subtitle is-4">{{ article.node.subtitle }}</p>
                </div>
              </div>
            </g-link>
          </div>
        </div>
        <Pager :info="$static.articles.pageInfo"/>
      </div>
    </section>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'
export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    Pager
  }
}
</script>
<static-query>
query Articles($page: Int) {
  articles: allArticles(perPage: 4, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        id
        title
        subtitle
        path
        cover
      }
    }
  }
}
</static-query>
