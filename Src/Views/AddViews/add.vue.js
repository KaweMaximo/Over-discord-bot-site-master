const Add = Vue.component('Add', {
  data: function () {
    return {
  		title: "Luxinhe bot - Adicione"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="flex flex-col items-center text-center">
      <h2 class="text-2xl">Escolha oque adicionar</h2>
    </div>
  `
})

export default Add