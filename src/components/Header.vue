<template>
   <div class="header-container md-layout-column">
     <md-toolbar class="md-primary">
        <div class="md-toolbar-section-end">
          <md-button @click="showSidepanel = true"><img class="hamburger-menu" src="../assets/hamburger-icon-white-16.jpeg" alt=""></md-button>
          <div class="logo"><img src="../assets/images/logo.png" alt=""></div>
        </div>
      </md-toolbar>
      <md-drawer class="md-right" :md-active.sync="showSidepanel">
        <md-toolbar class="md-transparent" md-elevation="0">
          <div class="md-toolbar-section-end">
            <md-button><img class="hamburger-menu" src="../assets/hamburger-icon-white-16.jpeg" alt=""></md-button>
          </div>
        </md-toolbar>
        <md-list>
          <md-list-item>
            <a href="#menu" class="link"><span class="md-list-item-text">Menu</span></a>
          </md-list-item>

          <md-list-item>
            <a href="#contact" class="link"><span class="md-list-item-text">Contact Us</span></a>
          </md-list-item>
        </md-list>
    </md-drawer>
   </div>
</template>

<script>
export default {
  name: 'DomnooAppHeader',

  data() {
    return {
      showNavigation: false,
      showSidepanel: false
    };
  },
};
</script>

