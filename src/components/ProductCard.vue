<template>
  <div class="card" style="height: 100%">
    <div class="overflow-auto contenedor_card" style="height:150px;">
      <a :href="uuid">
        <img :src="image" class="card-img-top mx-auto d-block" style="width:95% ; " alt="..." />
      </a>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <br />
      <p class="card-text">{{product.description}}</p>
    </div>

    <div class="p-4">
      <a :href="url" target="_blank" rel="noopener noreferrer">
        <input
          type="button"
          value="Visit site"
          class="btn btn-block border-dark pure-button pure-button-active bg-white"
        />
      </a>
    </div>
    <br />
    <br />
  </div>
</template>   
<script>
export default {
  name: "ProductCard",
  props: ["product"],
  computed: {
    image() {
      return this.product.image;
    },
    uuid() {
      return "/product?" + this.product.uuid;
    },
    url() {
      return this.product.url;
    }
  }
};
</script>