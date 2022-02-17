<template>
  <Layout>
    <section class="hero is-primary is-large has-background">
      <g-image src="~/static/img/banner.jpg" class="hero-background is-transparent"/>
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle has-text-centered">
            Un espace de 120m² proche du centre ville dédié à l’électronique, la créativité, l’impression 3D, la programmation, le DIY, …
          </h2>
        </div>
      </div>
    </section>
    <section id="content" class="section">
      <div class="container">
        <div class="row">
          <div class="card article">
            <div class="card-content">
              <div class="row">
                <div class="columns">
                  <div class="column is-8">
                    <h2 class="is-size-2">A propos</h2>
                    Un Hackerspace est un <strong>tiers-lieu</strong>, un espace où des gens avec un intérêt commun (souvent autour de l’informatique, de la technologie, des sciences, des arts…) peuvent <strong>se rencontrer et collaborer</strong>.
                    <br />Les Hackerspaces peuvent être vus comme des laboratoires communautaires ouverts où des gens (les hackers) peuvent partager ressources, savoirs,…
                  </div>
                  <div class="column is-4">
                    <figure class="image is-4by2">
                      <g-image src="~/static/img/minitel-open.jpeg"/>
                    </figure>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="columns">
                  <div class="column is-4">
                    <figure class="image is-4by3">
                      <g-image src="~/static/img/mainroom-min.jpeg"/>
                    </figure>
                  </div>
                  <div class="column is-8">
                      <h4 class="is-size-4">Ce n’est pas un groupe de pirates informatiques</h4>
                    <p class="mb-2">
                      Le terme “hacker”, galvaudé en français, ne se réfère pas ici au “pirate informatique”.
                      Il s’agit plutôt d’un bidouilleur, d’une personne curieuse capable d’apprendre et partager
                      le savoir, de se poser des questions et de créer de nouvelles choses.
                    </p>
                      <h4 class="is-size-4">Ce n’est pas un FabLab</h4>
                    <p class="mb-2">
                      Ces dernières années, “FabLab” est devenu un terme fourre-tout, utilisé pour désigner aussi
                      bien des FabLabs, MakerSpaces, TechShops, HackerSpaces,… Flossmanuals résume très bien les
                      différences entres ces lieux
                    </p>
                      <h4 class="is-size-4">C’est un lieu indépendant</h4>
                    <p>
                      Le financement structurel provient uniquement des membres via les cotisations et de nos
                      différentes activités (workshops, événements, …).
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="row">
          <div class="card article">
            <div class="card-content">
              <div class="row">
                <div class="columns">
                  <div class="column is-8">
                    <h2 class="is-size-2">Lieu</h2>
                    <h3 class="is-size-3">Liège Hackerspace</h3>
                    Quai de la Dérivation 54, 4020 Liège

                    <h3 class="is-size-3">Comment s’y rendre</h3>
                    <h4 class="is-size-4">En bus</h4>
                    Ligne 17, arrêt BRESSOUX Pont (15min/13stops)<br/>
                    Ligne 4, arrêt LIEGE Place du Congrès (17min/15stops)

                    <h4 class="is-size-4">En train</h4>
                    Arrêt SNCB Gare des Guillemins ensuite prendre le bus. Quai B – Ligne 4 ou Quai C – Ligne 17

                    <h2 class="is-size-2">Horaire</h2>
                    <ul>
                      <li>Mercredi 18h00 à 23h00</li>
                      <li>Samedi 13h00 à 19h00</li>
                    </ul>
                  </div>
                  <div class="column is-4">
                    <a href="https://www.openstreetmap.org/?mlat=50.64189&amp;mlon=5.59001#map=19/50.64189/5.59001&amp;layers=N" target="_blank" class="vc_single_image-wrapper   vc_box_border_grey">
                      <img width="1242" height="1030" src="https://liegehacker.space/wpdev/wordpress/wp-content/uploads/2020/03/Capture-d’écran-2020-03-01-à-21.43.43.png" class="vc_single_image-img attachment-full" alt="Plan du quartier d'Outremeuse" srcset="https://liegehacker.space/wpdev/wordpress/wp-content/uploads/2020/03/Capture-d’écran-2020-03-01-à-21.43.43.png 1242w, https://liegehacker.space/wpdev/wordpress/wp-content/uploads/2020/03/Capture-d’écran-2020-03-01-à-21.43.43-300x249.png 300w, https://liegehacker.space/wpdev/wordpress/wp-content/uploads/2020/03/Capture-d’écran-2020-03-01-à-21.43.43-1024x849.png 1024w, https://liegehacker.space/wpdev/wordpress/wp-content/uploads/2020/03/Capture-d’écran-2020-03-01-à-21.43.43-768x637.png 768w" sizes="(max-width: 1242px) 100vw, 1242px">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

<style scoped>
.home-links a {
  margin-right: 1rem;
}
#content {
  margin-top: -140px;
}
</style>
