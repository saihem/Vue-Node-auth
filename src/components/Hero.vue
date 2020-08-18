<template>
  <div class="text-center hero">
    <img class="mb-3 app-logo" src="/image.jpg" alt="Vue.js logo" width="120" />
    <h1 class="mb-4">Pizza 42</h1>
    <p>
      The place for Yummy Pizza
    </p>
    <h1 class="text-info" v-if="!$auth.isAuthenticated">
      Please Login to Order Pizza
    </h1>
    <h1 class="lead" v-if="$auth.isAuthenticated">
      <h2 class="my-5 text-center" v-if="$auth.user.email_verified"><router-link to="/order" >Order Pizza Now!</router-link></h2>
      <h2 class="my-5 text-center text-warning" v-if="!$auth.user.email_verified">Please Verify your Email to Order Pizza</h2>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>
