<template>
  <div class="Logout">
  	<h1>Logout</h1>
    <br>
  	<button class="btn btn-danger" @click = "doLogout">Logout</button>
  </div>
</template>

<script>

export default {
  name: 'LogoutView',
  methods:{
  	doLogout(){
  		this.$store.commit("logout")
      this.$router.push("login")
  	}
  }
};
</script>