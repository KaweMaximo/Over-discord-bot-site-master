const BomdiaGalerie = Vue.component('BomdiaGalerie', {
  data: function () {
    return {
  		title: "Luxinhe bot - Galeria de imagens de bomdia"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="flex flex-col items-center text-center">
      <h2 class="text-2xl">Galeria de imagens de bomdia</h2>
    </div>
  `
})

export default BomdiaGalerie