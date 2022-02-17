<template>
  <div>
    <nav id="nav__main" class="navbar is-sticky" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
      <g-link class="navbar-item" to="/">
        <img src="https://github.com/LgHS/branding/blob/master/horizontal/text.svg?raw=true" class="logo">
      </g-link>

        <a role="button" class="navbar-burger" :class="{ 'is-active': NavbarisActive }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="openNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': NavbarisActive }">
        <div class="navbar-end">
          <g-link v-for="(item, index) in menu" class="navbar-item" :to="item.url" :key="index" active-class="is-active">
            {{ item.title }}
          </g-link>
          <div class="navbar-item">
            <div class="buttons">
              <span v-if="spaceapi" class="button has-tooltip-arrow has-tooltip-left" :data-tooltip="spaceapi.state.message" :class="{ 'is-success': spaceapi.state.open, 'is-danger': !spaceapi.state.open }">
                <span v-if="spaceapi.state.open">Ouvert</span>
                <span  v-if="!spaceapi.state.open">Fermé</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <slot/>

    <section id="bottom">
      <div class="container">
        <div class="columns">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Communiquez</p>
              <p class="subtitle">avec nous!</p>
              <div class="content">
                <div>
                  <strong>Mail</strong>: ping<i>[at]</i>lghs.be
                </div>
                <div>
                  <strong>IRC</strong>: #lghs <i>@</i>  &nbsp;<a href="ircs://irc.libera.chat:6697/lghs">irc.libera.chat</a>
                </div>
                <div>
                  <strong>Tél.</strong>: <a href="tel:+3242873226">+32 (0) 4 287 32 26</a> &nbsp;<i>(fonctionne parfois)</i></a>
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <g-link to="/soutenir" class="button soutien is-primary is-inverted">Soutenez-nous</g-link>
              <p class="title">Faites un don</p>
              <p class="subtitle">Ca peut nous aider</p>
              <div class="content">

                <div class="columns is-multiline">
                  <div class="column is-6-desktop is-3-tablet">
                    <i>Don unique ou récurrent via</i><br/>
                    <div class="wire"><strong>IBAN</strong> BE58 0689 1071 8879<br/>
                      <strong>BIC</strong> GKCCBEBB</div>
                  </div>
                  <div class="column is-3-desktop is-3-tablet has-text-right-desktop has-text-centered-mobile">
                    <i>Don unique via</i><br/>
                    <a href="https://www.paypal.com/pools/c/8oPvszHjsC" class="button paypal"><font-awesome :icon="['fab', 'paypal']"/>&nbsp;<span>Paypal</span></a>
                  </div>
                  <div class="column is-3-desktop is-3-tablet has-text-right-desktop has-text-centered-mobile">
                    <i>Don récurrent via</i><br/>
                    <a href="https://www.patreon.com/lghs" class="button patreon"><font-awesome :icon="['fab', 'patreon']"/>&nbsp;<span>Patreon</span></a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="name">{{ $static.metadata.siteName }}</div>
          <div>
            <ul class="footer-social-links">
              <li v-for="(link, index) in socialMedia" :key="index">
                <a :href="link.url">
                  <font-awesome :icon="link.icon"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import axios from 'axios'
import menu from '@/data/menu.json'
import socialMedia from '@/data/social-media.json'

export default {
  data () {
    return {
      spaceapi: null,
      menu,
      socialMedia,
      NavbarisActive: false
    }
  },
  methods: {
    openNavbar(event) {
      this.NavbarisActive = !this.NavbarisActive
    },
    async getSpaceApi() {
      try {
        const results = await axios.get('https://lghs.be/spaceapi')
        this.spaceapi = results.data
      } catch (error) {
        console.log(error)
      }
      setTimeout(() => this.getSpaceApi(), 60000)
    }
  },
  mounted () {
    this.getSpaceApi();
  }
}

</script>
<style>
.logo {
  max-height: 5.75rem !important;
  height: 5.75rem;
}
html, body, #app {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
}
nav#nav__main {
  flex: none;
}
#app > section {
  flex-shrink: 1;
}
section#content {
  flex-grow: 1;
}
footer {
  margin-top: 2rem;
  flex-shrink: 1;
}
footer .name {
  text-align: center;
  margin-bottom: 1rem;
}
.footer-content {
  width: 100%;
}
.footer-social-links {
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}
.footer-social-links li {
  display: inline;
}
.footer-social-links li a {
  font-size: 17px;
  padding: 5px 10px;
  color: #BBBBBB;
}
.soutien {
  float: right;
}

.wire {
  background: #FFFFFF;
  border: 1px solid #000000;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  border-radius: 0.4em;
  font-size: 15px;
  height: 3.8rem;
  width: 100%;
}

@media screen and (min-width: 769px) {
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-social-links {
    text-align: left;
  }

  footer .name {
    text-align: left;
    margin-bottom: 0;
  }
}

.paypal {
  background: #0079C1;
  color: #00457C;
  border: 1px solid #00457C;
  height: 3.8rem;
  width: 100%;
}
.patreon {
  background: #f96854;
  color: #052d49;
  border: 1px solid #052d49;
  height: 3.8rem;
  width: 100%;
}

</style>
