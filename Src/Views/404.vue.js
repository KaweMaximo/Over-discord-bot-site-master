const Page404 = Vue.component('Page404', {
  data: function () {
    return {
			title: "404 - Pagina não encontrada"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="text-center flex flex-col items-center">
      <h2 class="text-2xl text-yellow-500">404 - Pagina não encontrada</h2>
      <img src="https://http.cat/404" class="max-w-full w-96 p-3"/>
      <router-link to="/" class="text-blue-600 hover:text-purple-700 transition-all underline">Voltar para home</router-link>
    </div>
  `
})

export default Page404