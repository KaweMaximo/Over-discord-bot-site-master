const navbar = Vue.component('app-navbar', {
  data: function () {
    return {

    }
  },
	methods:{
		
	},
  template: `
    <nav class="flex flex-row justify-center items-center mb-5">
      <router-link to="/" class="text-blue-600 hover:text-purple-700 transition-all underline mx-5">Home</router-link>
      <router-link to="/views" class="text-blue-600 hover:text-purple-700 transition-all underline mx-5">Views</router-link>
    </nav>
	`
})

export default navbar