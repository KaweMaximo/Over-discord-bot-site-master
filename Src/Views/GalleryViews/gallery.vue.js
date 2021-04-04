const Galeries = Vue.component('Galeries', {
  data: function () {
    return {
  		title: "Luxinhe bot - Galerias"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="flex flex-col items-center text-center">
      <h2 class="text-2xl">Galerias Page</h2>
    </div>
  `
})

export default Galeries