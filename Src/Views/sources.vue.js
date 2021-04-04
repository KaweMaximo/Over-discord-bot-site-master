const Sources = Vue.component('Sources', {
  data: function () {
    return {
  		title: "Luxinhe bot - Sources"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="flex flex-col items-center text-center">
      <h2 class="text-2xl">Sources Page</h2>
    </div>
  `
})

export default Sources