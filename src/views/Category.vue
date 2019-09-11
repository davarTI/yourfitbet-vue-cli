<template>
  <div>
    <section>
      <div class="feautured">
        <h4 id="nameCategory"></h4>
        <div class="row">
          <div
            v-for="(product, index) in products.products"
            :key="index"
            class="col-md-4 mt-4"
            style="min-width: 30%"
          >
            <card-category :product="product"></card-category>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardCategory from "../components/CardCategory.vue";
export default {
  name: "category",
  components: {
    CardCategory
  },
  data() {
    return {
      products: {
        products: []
      }
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const urlFromHome = window.location.href;
      const uid = urlFromHome.split("?");
      const URL_C = `http://fundamentos.academlo.com/api/v1/categories/${
        uid[1]
      }/products`;
      const name = document.getElementById("nameCategory");

      axios
        .get(URL_C)
        .then(response => {
          this.products = response.data;
          // console.log(this.products.name)
          name.textContent = this.products.name;
        })
        .catch(error => {
          console.log(error.response);
          alert("Existe un problema al cargar la información solicitada.");
        });
    }
  }
};
</script>