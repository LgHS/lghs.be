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
        <section class="articles">
          <div class="column is-8 is-offset-2">
            <!-- START ARTICLE -->
            <div class="card article">
              <div class="card-content">
                <div class="media">
                  <div class="media-content has-text-centered">
                    <div class="tags has-addons level-item">
                      <span class="tag is-rounded">
                        {{ $page.articles.date }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="content article-body">
                  <VueRemarkContent />
                </div>
              </div>
            </div>
            <!-- END ARTICLE -->
          </div>
        </section>
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
    date
  }
}
</page-query>

<style scoped>

.hero-body
{
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
}


.articles {
  margin: 5rem 0;
  margin-top: -200px;
}
.articles .content p {
  line-height: 1.9;
  margin: 15px 0;
}
.article-title {
  font-size: 2rem;
  font-weight: lighter;
  line-height: 2;
}
.article-subtitle {
  color: #909AA0;
  margin-bottom: 3rem;
}
.article-body {
  line-height: 1.4;
  margin: 0 6rem;
}
</style>
