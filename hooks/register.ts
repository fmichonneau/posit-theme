import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Posit brand palette (_brand.yml): ink, navy, slate, blue, steel, mist for
// surfaces and text; blue/orange/green/amber/teal for roles.
const { theme, problems } = makeColors({
  label: 'Posit',
  roles: {
    accent: '#447099', // blue
    danger: '#ED632F', // orange
    success: '#729943', // green
    warning: '#F6B000', // amber
    pro: '#419599', // teal
  },
  light: {
    gray: {
      anchors: {
        'surface-0': '#E4EAF0',
        'surface-1': '#EEF2F6',
        'surface-2': '#F7F9FB',
        'text-primary': '#17212B', // ink
        'text-secondary': '#213D4F', // navy
        'text-muted': '#305775', // slate
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#17212B', // ink
        'surface-1': '#1A232D',
        'surface-2': '#1D2731',
        'surface-3': '#212C37',
        'text-primary': '#EEF3F7',
        'text-secondary': '#B9C8D6', // toward mist
        'text-muted': '#8CA2B6', // toward steel
      },
    },
  },
})

const LOOK: ThemeSetArgs = { colors: theme }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }

    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })
}
