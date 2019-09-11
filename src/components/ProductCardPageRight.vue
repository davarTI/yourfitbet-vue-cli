<template>
  <div
    class="col-md-6 overflow-auto card contenedor_card mb-5 mx-auto mt-5"
    style="min-height:400px;"
  >
    <img
      :src="image"
      class="card-img-top d-block position-absolute mx-auto"
      style="width:100%; "
      alt="..."
      id="img"
    />
  </div>
</template>   
<script>
export default {
  name: "ProductCardPageRight",
  props: ["product"],
  computed: {
    image() {
      return this.product.image;
    }
  }
};
</script>