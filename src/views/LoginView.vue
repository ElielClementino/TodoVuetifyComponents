<template>
   <v-app id="inspire">
   <v-snackbar v-model="snackbar.show" :value="true" absolute left shaped top>
      {{ snackbar.message }}
    </v-snackbar>
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="light blue">
                        <v-toolbar-title>Bem Vindo</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              name="Usuário"
                              label="Usuário"
                              v-model="username"
                              type="text"
                              v-on:keyup.enter="login"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              name="password"
                              v-model="password"
                              label="Password"
                              type="password"
                              v-on:keyup.enter="login"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                        color="primary" 
                        :loading="loading"
                        :disabled="!valid"
                        @click="login"
                        >Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
import AuthApi from '@/api/auth.api.js'
export default {
name: 'LoginView',
props: {
    source: String,
},
data: ()=>{
   return{
      loading: false,
      valid: true,
      username: '',
      password: '',
      snackbar: {
      show: false,
      message: '',
      },
   }
},
methods:{
   login(){
      this.loading = true
      AuthApi.login(this.username, this.password).then((user)=>{
         console.log('login ok', user)
         this.saveLoggedUser(user)
         this.$router.push({name:'taskSummary'})
      }).catch((error)=>{
         console.log('Login falhou', error)
         this.snackbar.message = "Usuário ou senha inválida"
         this.snackbar.show = true
      }).finally(async ()=>{
         this.loading = false
      })
   },
   saveLoggedUser(user){
      window.localStorage.setItem('loggedUser', user.id)
      window.localStorage.setItem('loggedUserToken', user.token)
   }
}
};
</script>

<style></style>
