<script lang="ts">
import {defineComponent} from 'vue'

import gql from 'graphql-tag'

export default defineComponent({
  name: "test",

  data () {
    return {
      // Initialize your apollo data
      allFilms: null,
    }
  },

  mounted() {
    console.log(this.allFilms)
  },

  computed: {
    films() {
      if (!this.allFilms) {
        return []
      }

      return this.allFilms.films || []
    },
  },

  watch: {
    allFilms: function(newVal) {
      console.log(newVal)
    }
  },

  apollo: {
    // Simple query that will update the 'hello' vue property
    allFilms: gql`query {
      vehicles {
        title
        description
        icons {
          large
          medium
        }
        level
        type {
          name {
            title
          }
          icons {
            default
          }
        }
        nation {
          name
          title
          color
          icons {
            small
            medium
            large
          }
        }
      }
    }`,
  },
})
</script>

<template>
  <div class="test" v-for="test in films">
    director: {{ test.director }}
  </div>
</template>

<style scoped>

</style>