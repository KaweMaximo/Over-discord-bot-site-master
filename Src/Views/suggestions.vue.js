const Suggestions = Vue.component('Suggestions', {
  data: function () {
    return {
  		title: "Luxinhe bot - Suggestions"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="flex flex-col items-center text-center">
      <h2 class="text-2xl">Suggestions Page</h2>
    </div>
  `
})

export default Suggestions