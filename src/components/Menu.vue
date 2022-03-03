<template>
  <div class="menu-container" id="selector">
    <div class="header-img-container"><img class="header-img" src="../assets/images/header-picture.jpeg" alt=""></div>
     <!--overwritting properties-->
      <div class="button-title-container">
        <div class="title">Menu</div>
        <div class="button-container">
          <md-button
              v-for="(button , index) in buttons"
              :key="index"
              :class="button.active ? 'md-raised' : ''"
              @click="changingTab(button.name)"
          >
            {{ button.name }}
          </md-button>
        </div>
      </div>
      <div class="img_container" id="menu">
        <md-card
          v-for="(product , ix) in products"
          :key="ix"
          md-ratio="16:9"
          v-show="tabActive === product.type"
        >
          <md-card-media>
            <img :src="require(`../assets/images/products/${product.img}`)" alt="People" v-scrollAnimation>
          </md-card-media>
          <md-card-header>
            <div class="md-title">{{ product.name }}</div>
            <div class="md-subhead">{{ product.price }}$</div>
          </md-card-header>
        </md-card>
     </div>
  </div>
</template>

<script>
export default {
  name: 'DomnooAppMenu',

  data() {
    return {
      buttons : [
        {name:'pizza' , active:true},
        {name:'burgers' , active:false},
        {name:'salat' , active:false},
        {name:'dessert' , active:false}
      ],
      products:[],
      tabActive : 'pizza'
    };
  },
  methods: {
    changingTab(value){
        this.buttons.forEach((item , ix) => {
          if (item.name === value){
            item.active = true;
            this.tabActive = value;
          }else{
            item.active = false;
          }
        });
    },
    handleScroll(evt, el) {
      if (window.scrollY > 50) {
        el.classList.add(
          'before-enter'
        )
        el.classList.add(
          'enter'
        )
      }
      return window.scrollY > 100
    }
  },

  created(){//get convert to object and get data
    this.$http.get('products.json').
    then(res => res.json()).
    then(data => {
      let list = [];
      console.log('producsts are:' , data)
      for(let key in data){//it is used for objects
        list.push({
          ...data[key],
          id : key
        })
      }
      console.log(list)
      this.products = list;
    })
  }
};
</script>
