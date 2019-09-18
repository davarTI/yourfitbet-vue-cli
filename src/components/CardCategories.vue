<template>
  <div class="card-deck">
    <div class="overlay"></div>
    <a :href="pageUrl" class="text-white">
      <img class="card-img-top" src="../assets/img/categories6.jpg" alt="Card image" />
      <div class="card-img-overlay pl-1" style="padding: 0;">
        <span class="glyphicon pt-2 icon-size-card" id="specialIcon">&#xe012;</span>
        <h4 class="card-title" style="margin-bottom: 0">{{category.name}}</h4>
        <p class="card-text" id="listings">12 listings</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "CardCategories",
  props: ["category"],
  computed: {
    pageUrl() {
      return "/category?" + this.category.uuid;
    }
    // ,
    // image() {
    //   return Math.floor(Math.random()*8)+1;
    // }
  }
};
</script>