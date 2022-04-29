import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-netlify";
// import adapter from '@sveltejs/adapter-node'
import preprocess from "svelte-preprocess";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      plugins: [tailwindcss, autoprefixer],
      postcss: true,
    }),
    mdsvex({
      mdsvexConfig,
      // layout: {
      //   blog: 'src/routes/blog/_post.svelte'
      // }
    }),
  ],

  kit: {
    adapter: adapter({
      edge: true,
    }),
    vite: {
      resolve: {
        alias: {
          $lib: path.resolve("./src/lib"),
          "$lib/*": path.resolve("./src/lib/*"),
          $styles: path.resolve("./src/lib/styles"),
          "$styles/*": path.resolve("./src/lib/styles/*"),
          $components: path.resolve("./src/lib/components"),
          "$components/*": path.resolve("./src/lib/components/*"),
        },
      },
    },
  },
};

export default config;
