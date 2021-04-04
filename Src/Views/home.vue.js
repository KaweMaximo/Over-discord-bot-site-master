const Home = Vue.component('Home', {
  data: function () {
    return {
  		title: "Luxinhe bot - Home"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="flex flex-col items-center text-center">
      <h2 class="text-2xl">Home Page</h2>
    </div>
  `
})

export default Home