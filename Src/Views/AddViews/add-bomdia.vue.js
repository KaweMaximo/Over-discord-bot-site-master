const AddBomdia = Vue.component('AddBomdia', {
  data: function () {
    return {
  		title: "Luxinhe bot - Nova imagem de bom dia"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="flex flex-col items-center text-center">
      <h2 class="text-2xl">Adicionar imagem para o comando bomdia</h2>
    </div>
  `
})

export default AddBomdia