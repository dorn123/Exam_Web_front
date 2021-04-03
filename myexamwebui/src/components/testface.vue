<template>
    <div>
       <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div class="mt-5">
      <p class="text-center">Test faceid</p>
      <b-card
                
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 35rem;"
                class="mb-2 mx-auto"
            >
    camera

    
  </b-card>
  </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>