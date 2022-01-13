import '~/styles/main.scss'

import DefaultLayout from '~/layouts/Default.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faLinkedin, faYoutube, faInstagram, faTwitter, faGithub, faPatreon, faPaypal } from '@fortawesome/free-brands-svg-icons'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faFacebookF, faLinkedin, faYoutube, faInstagram, faTwitter, faGithub, faSpaceShuttle, faPaypal, faPatreon)


export default function (Vue, { router, head, isClient }) {
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
}
