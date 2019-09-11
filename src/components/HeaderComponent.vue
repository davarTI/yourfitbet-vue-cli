<template>
  <nav class="navbar mb-0 navbar-expand-lg navbar-light bg-light">
    <!-- <a class="navbar-brand" href="index.html">YourFitnessBet</a> -->
    <router-link to="/" class="navbar-brand">YourFitnessBet</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        ​
        <li class="nav-item">
          <!-- <a class="nav-link" href="browse.html">EXPLORE</a> -->
          <router-link to="/explore" class="nav-link">EXPLORE</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ADD A LISTING</a>
        </li>​
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "HeaderComponent"
};
</script>