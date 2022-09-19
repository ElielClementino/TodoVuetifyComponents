<template>
  <v-main>
    <NavBar/>
    <router-view />
    <PageFooter />
  </v-main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  data: () => ({}),
  components: {
    NavBar,
    PageFooter,
  },
}
</script>
