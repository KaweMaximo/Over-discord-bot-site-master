const RandomGalerie = Vue.component('RandomGalerie', {
  data: function () {
    return {
  		title: "Luxinhe bot - Galeria de imagens aleatorias"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="flex flex-col items-center text-center">
      <h2 class="text-2xl">Galeria de imagens aleatorias</h2>
    </div>
  `
})

export default RandomGalerie