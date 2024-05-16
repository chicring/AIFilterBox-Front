/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/scss/style.scss'


import type { ThemeDefinition as BaseThemeDefinition } from "vuetify";

export interface ThemeDefinition extends BaseThemeDefinition {
  name: string;
}

// Composables
import { createVuetify } from 'vuetify'
import { PurpleTheme } from './theme';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'PurpleTheme',
    themes: {
      PurpleTheme,
    },
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      rounded: 'md'
    },
    VTooltip: {
      location: 'top'
    },
    VCheckboxBtn: {
      color: "secondary"
    }
  }
})
