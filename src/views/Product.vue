<template>
  <div>
    <section>
      <div class="row no-gutters mx-auto mt-5 max_width_75 position-relative">
        <product-card-page-left :product="product"></product-card-page-left>
        <product-card-page-right :product="product"></product-card-page-right>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCardPageRight from "../components/ProductCardPageRight.vue";
import ProductCardPageLeft from "../components/ProductCardPageLeft.vue";

export default {
  name: "product",
  components: {
    ProductCardPageLeft,
    ProductCardPageRight
  },
  data() {
    return {
      product: []
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      var urlFromHome = window.location.href;
      var uid = urlFromHome.split("?");

      const URL_P = `http://fundamentos.academlo.com/api/v1/products/${uid[1]}`;

      axios
        .get(URL_P)
        .then(response => {
          this.product = response.data;
        })
        .catch(error => {
          console.log(error.response);
          alert("Tuvimos un error cargando la información");
        });
    }
  }
};
</script>