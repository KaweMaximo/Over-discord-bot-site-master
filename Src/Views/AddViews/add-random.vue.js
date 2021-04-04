const AddRandom = Vue.component('AddRandom', {
  data: function () {
    return {
  		title: "Luxinhe bot - Nova imagem aleatoria"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="flex flex-col items-center text-center">
      <h2 class="text-2xl">Adicionar imagem para o comando random</h2>
    </div>
  `
})

export default AddRandom