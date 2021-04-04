const Views = Vue.component('Views', {
  data: function () {
    return {
  		title: "Luxinhe bot - Views"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="flex flex-col items-center text-center">
      <router-link to="/" class="text-blue-600 hover:text-purple-700 transition-all underline mx-5">Home</router-link>
      <router-link to="/gallery" class="text-blue-600 hover:text-purple-700 transition-all underline mx-5">Galerias</router-link>
      <router-link to="/suggestions" class="text-blue-600 hover:text-purple-700 transition-all underline mx-5">Suggestions</router-link>
      <router-link to="/gallery/random" class="text-blue-600 hover:text-purple-700 transition-all underline mx-5">Galeria random</router-link>
      <router-link to="/gallery/bomdia" class="text-blue-600 hover:text-purple-700 transition-all underline mx-5">Galeria bomdia</router-link>
      <router-link to="/add" class="text-blue-600 hover:text-purple-700 transition-all underline mx-5">Adicionar</router-link>
      <router-link to="/add/random" class="text-blue-600 hover:text-purple-700 transition-all underline mx-5">Adicionar random</router-link>
      <router-link to="/add/bomdia" class="text-blue-600 hover:text-purple-700 transition-all underline mx-5">Adicionar bomdia</router-link>
      <router-link to="/sources" class="text-blue-600 hover:text-purple-700 transition-all underline mx-5">Sources</router-link>
      <router-link to="/404" class="text-blue-600 hover:text-purple-700 transition-all underline mx-5">404</router-link>
    </div>
  `
})

export default Views