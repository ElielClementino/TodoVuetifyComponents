<template>
<v-layout class='justify-center text-xs-center'>
  <form>
    <v-text-field
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      :counter="15"
      label="sobrenome"
      required
    ></v-text-field>
        <v-text-field
      label="e-mail"
      required
    ></v-text-field>
    <v-checkbox
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
    class="mr-4"
    to=login
    >
      submit
    </v-btn>
    <v-btn>
      clear
    </v-btn>
  </form>
</v-layout>
</template>

<script>
  export default {
    data: () => ({
      checkbox: false,
    }),
    methods: {
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>