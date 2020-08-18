<template>
  <div>
    <hr />
    <order-now />
  </div>
</template>

<script>
import OrderNow from "../components/OrderNow";

export default {
  name: "order",
  components: {
    OrderNow,
  }
};
</script>

<style lang="scss" scoped>
.next-steps {
  .fa-link {
    margin-right: 5px;
  }
}
</style>
