<template>
  <div>
    <section>
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
        <!-- <card-categories :category="category" v-if="index < 5"></card-categories>
        <card-categories :category="category" v-if="index > 4 && index < 8"></card-categories>-->
        <card-categories :category="category"></card-categories>
      </div>
    </section>
  </div>
</template>

<script>
import CardCategories from "../components/CardCategories.vue";

export default {
  name: 'explore',
  components: {
    CardCategories
  },
  data() {
    return {
      categories: {
        categories: []
      }
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      const URL_C =
        "http://fundamentos.academlo.com/api/v1/directories/1cf59506-c22e-4037-858c-d8d517f44e6f/categories";

      axios.get(URL_C).then(response => {
        this.categories = response.data;
        console.log(this.categories);
      });
      // .catch(error => {
      //     console.log(error.response)
      //     alert('Existe un problema al cargar la información solicitada.')
      // })
    }
  }
};
</script>