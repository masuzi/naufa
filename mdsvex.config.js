import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import relativeImages from "mdsvex-relative-images";
const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],
  layout: {
        blog: 'src/routes/blog/layout.svelte'
  },
  
  smartypants: {
    dashes: 'oldschool'
  },

  remarkPlugins: [relativeImages],
  rehypePlugins: []
})

export default config
