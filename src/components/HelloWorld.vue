<template>
  <div class="hello">
    <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>You're viewing the <code>&#060;HelloWorld&#062;</code> component!</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
