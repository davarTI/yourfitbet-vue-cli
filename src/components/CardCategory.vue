<template>
  <div class="card" style="height: 100%">
    <div class="overflow-auto contenedor_card" style="height:150px;">
      <a :href="pageUrl">
        <img :src="loadImage" class="card-img-top mx-auto d-block" style="width:95% ; " alt="..." />
      </a>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <br />
      <p class="card-text">{{product.description}}</p>
    </div>

    <div class="p-4">
      <a :href="loadUrl" target="_blank" rel="noopener noreferrer">
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
  name: "CardCategory",
  props: ["product"],
  computed: {
    pageUrl() {
      return "product?" + this.product.uuid;
    },
    loadImage() {
      return this.product.image;
    },
    loadUrl() {
      return this.product.url;
    }
  }
};
</script>