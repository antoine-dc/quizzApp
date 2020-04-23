<template>
  <header class="pos-f-t">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-info p-4">
        <router-link :to="{name:'Admin'}">
          <h5 class="text-white h4">Configurer la partie</h5>
        </router-link>
        <router-link :to="{name:'Main'}">
          <h5 class="text-white h4">Lancer la partie</h5>
        </router-link>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-info">
      <router-link :to="{name:'Main'}">
        <span class="navbar-brand">
          <h1>
            <img src="../assets/logo.png" height="47" class="d-inline-block align-top" alt /> App Quizz Theme
          </h1>
        </span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  margin-bottom: 20px;
}

.navbar-dark .navbar-toggler {
  color: rgb(255, 255, 255);
  border-color: rgb(255, 255, 255);
  background-color: #fff;
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(23, 162, 184, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.navbar-toggler {
  border-color: #17a2b8;
}

.p-4 {
  text-transform: uppercase;
}

header a:hover {
  color: #fff;
}
</style>