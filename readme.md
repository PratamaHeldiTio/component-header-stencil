# POC Komponen header global with stencil

ini bagian dari header yang dimana studi kasusnya diambil dari pokedex

# Mencoba run stencil 
sebelumnya clone repo ini dan jalankan
```bash
npm install
npm run dev
```

# Pemasangan tanpa framework
silahkan baca didokumentasi https://stenciljs.com/docs/angular
# Pemasangan pada framework
1. pada vue https://stenciljs.com/docs/vue
2. pada react https://stenciljs.com/docs/react
3. pada ember https://stenciljs.com/docs/ember
4. angular https://stenciljs.com/docs/angular

# Pemasangan pada Nuxt.js mengguanakn package [Gomah/nuxt-stencil](https://github.com/Gomah/nuxt-stencil)


```bash
# install package header
npm install header-pokedex

# tambahkan pada nuxt.config.js

export default {
  modules: [
    'nuxt-stencil'
  ],
  stencil: {
    lib: 'header-pokedex',
    prefix: 'header-',
    renderOptions: {},
    hydratePath: 'header-pokedex/hydrate',
    loaderPath: 'header-pokedex/loader',
    ignoredElements: null
  },
}
```