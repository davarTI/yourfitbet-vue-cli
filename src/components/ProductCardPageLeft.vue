<template>
  <div class="col-md-6 width_90 min_height_400 position-relative">
    <div class="position-relative" style="min-height:330px;">
      <h1 class="card-title font-weight-bold" id="title">{{product.name}}</h1>
      <h4
        class="card-text light mr-5 font-weight-bolder text-black-50"
        style="font-size: 1.7rem;"
        id="description"
      >{{product.description}}</h4>
    </div>
    <div class="mt-5 position-relative">
      <div class="d-flex flex-wrap">
        <div class="mb-3 mr-5">
          <a
            :href="product.url"
            class="btn btn-light border-dark"
            target="_blank"
            id="url-product"
          >&nbsp; Visit Website &nbsp;</a>
        </div>
        <div class="d-flex ml-5 mt-1 justify-content-end" style="width: 50%;">
          <p>Share</p>
          <div class="ml-3">
            <i class="fab fa-facebook-f border rounded-circle border-dark pr-3 pl-3 pt-2 pb-2"></i>
          </div>
          <div class="ml-3">
            <i class="fab fa-twitter border rounded-circle border-dark pr-2 pl-3 pt-2 pb-2"></i>
          </div>
        </div>
      </div>​
    </div>
​
  </div>
</template>   
<script>
export default {
  name: "ProductCardPageLeft",
  props: ["product"]
};
</script>