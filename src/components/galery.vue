<template>
    <div class="gridGallery">
        <div class="item">
            <img :src="image" width=100% />
        </div>
        <div class="item">
           <button class="k-primary" @click="position++">Mas</button>
        </div>
        <div class="item">
            <img v-for="element in selectedImage " :key="element.id" :src="element.url">
        </div>
    </div>
</template>

<script>

  export default {
    name: 'galery',
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
    }
  }
</script>

<style scoped lang="scss">
    .gridGallery {
        display: grid;
        grid-template-columns: 4fr 1fr 2fr;
        grid-column-gap: 10px;
    }
</style>