/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import VuetifyUseDialog from 'vuetify-use-dialog'
import VueTablerIcons from 'vue-tabler-icons'

// Types
import type { App } from 'vue'
import {router} from "../router";
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


export function registerPlugins (app: App) {
  app.use(router)
  app.use(createPinia().use(piniaPluginPersistedstate))
  app.use(VueTablerIcons)
  app.use(vuetify)
  app.use(VuetifyUseDialog)
}
