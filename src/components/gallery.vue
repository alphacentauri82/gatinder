<template>
    <div class="gridGallery">
        <div class="item">
            <img :src="image" width=100% @click="addFavorite" ref="currentImage"/>
        </div>
        <div class="item">
           <button class="k-primary" @click="position++">Siguiente</button>
        </div>
        <div class="item">
            <img v-for="(element, index) in selectedImage " :key="element.id" :src="element.url" width="100%"
                 @click="selectedImage.splice(index,1)">
        </div>
    </div>
</template>

<script>

  export default {
    name: 'gallery',
    data () {
      return {
        position: 1,
        selectedImage: []
      }
    },
    computed: {
      image () {
        return 'http://thecatapi.com/api/images/get?' + this.position
      }
    },
    methods: {
      addFavorite() {
        let id = this.position
        let url = this.$refs.currentImage.src
        let finder = this.selectedImage.filter(item => item.id === id)
       if (finder.length === 0) {
         this.selectedImage.push({
           id,
           url
         })
       }
      }
    }
  }
</script>

<style scoped lang="scss">
    .gridGallery {
        display: grid;
        grid-template-columns: 4fr 1fr 2fr;
        grid-column-gap: 10px;
    }
    img:hover {
        cursor:pointer;
        opacity: 0.7;
    }
</style>