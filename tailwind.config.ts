import type { Config } from 'tailwindcss'
import { MachiCatUI, ThemeDefaults } from './src/plugin/index.ts'

console.log(ThemeDefaults)

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...ThemeDefaults
    },
  },
  plugins: [
    MachiCatUI
  ],
}

export default config