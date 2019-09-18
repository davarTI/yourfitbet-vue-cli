<template>
  <div>
    <div class="container-fluid text-black intro-2">
      <div class="row">
        <h1
          class="titulo"
        >A curated directory with the best resources and products for a healthy lifestyle. Your Fitness. Reloaded.</h1>
      </div>
      <div class="mi-div">
        <!-- <div style="display: inline;"> -->
        <div class="searching">
          <input type="text" class="form-control busqueda" placeholder="Search Tool or Resource" />
          <span class="glyphicon glyphicon-search icono"></span>
        </div>
        <div>
          <p class="texto">or</p>
        </div>
        <div class="elboton">
          <a href="/explore">
            <button type="button" class="white">Browse Categories</button>
          </a>
        </div>
      </div>
    </div>
    <section>
      <div class="feautured" id="product">
        <h4>Workout Equipment</h4>
        <div class="row" style="width: 97%">
          <div v-for="(product,idx) in productsIndex.products" :key="idx" class="col-md-4 mt-4">
            <product-card :product="product" v-if="idx < 3"></product-card>
          </div>
        </div>
      </div>
      <div class="categories" id="app">
        <h4>Categories</h4>
        <!-- Search form -->
        <form class="form-inline md-form form-sm mb-3">
          <input
            class="form-control form-control-sm mr-3 shadow-none search"
            type="text"
            placeholder="Browse categories"
            aria-label="Search"
          />
          <i class="fas fa-search icon-search" aria-hidden="true"></i>
        </form>

        <div
          v-for="(category, index) in categories.categories"
          :key="index"
          id="div-category"
          class="col-sm-3 mt-4"
          style="width: 23%; margin-right: 10px"
        >
          <card-categories :category="category" v-if="index < 5"></card-categories>
          <card-categories :category="category" v-if="index > 4 && index < 8"></card-categories>
        </div>
      </div>​
    </section>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import ProductCard from "./ProductCard.vue";
import CardCategories from "./CardCategories";
import FooterComponent from "./FooterComponent.vue";

export default {
  name: 'home',
  components: {
    HeaderComponent,
    ProductCard,
    CardCategories,
    FooterComponent
  },
  data() {
    return {
      productsIndex: {},
      categories: {
        categories: []
      }
    }
  },
  mounted() {
    this.getProductsIndex();
    this.getCategories();
  },
  methods: {
    getProductsIndex() {
      const URL_P = "https://fundamentos.academlo.com/api/v1/categories/e9321038-184f-42d9-93cf-902d14f50eed/products";

      axios
        .get(URL_P)
        .then(response => {
          this.productsIndex= response.data;
          // console.log(this.productsIndex)
        })
        // .catch(error => {
        //   console.log(error.response);
        //   alert("Tuvimos un error cargando la información");
        // });
    },
    getCategories() {
      const URL_C = "https://fundamentos.academlo.com/api/v1/directories/1cf59506-c22e-4037-858c-d8d517f44e6f/categories";

      axios.get(URL_C).then(response => {
        this.categories = response.data;
        // console.log(this.categories);
      });
      // .catch(error => {
      //     console.log(error.response)
      //     alert('Existe un problema al cargar la información solicitada.')
      // })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
