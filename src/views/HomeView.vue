<template>
<v-parallax
   dark
   height="975"
   sm='4'
   src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
>
   <v-row
      align="center"
      justify="center"
   >
      <v-col
      class="text-center"
      cols="12"
      >
      <h1 class="text-h1 font-weight-thicker mb-12">
         Todofy
      </h1>
      <h4 class="subheading text-h2 mb-12">
         Crie e gerencie suas tarefas conosco!
      </h4>
      <v-btn
      color="white"
      elevation="13"
      outlined
      rounded
      x-large
      class='mr-12'
      to=login
      >Login</v-btn>
      <v-btn
      color="white"
      elevation="13"
      outlined
      rounded
      x-large
      to=register
      >Registro</v-btn>
      </v-col>
   </v-row>
</v-parallax>
</template>

<script>
export default {
   name: 'LoginView',
};
</script>

<style></style>
