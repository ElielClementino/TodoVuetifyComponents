<template>
  <div>
    <font-awesome-icon icon="spinner" />
    <!-- area do botao de logout -->
    <v-layout justify-end>
      <v-btn class="margem" color="primary" @click="voltaParaResumo">
        Logout
      </v-btn>
    </v-layout>
    <!-- fim botao logout -->

    <!--INICIO ITEM DE ANOTAÇOES -->
    <v-layout justify-center>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="40">
            <v-text-field
              v-model="newTask.title"
              :counter="40"
              :rules="titleRules"
              label="Titulo"
              color="orange orange-darken-4"
              required
            ></v-text-field>

            <v-textarea
              v-model="newTask.project"
              :rules="conteudoRules"
              label="Project"
              color="orange orange-darken-4"
              required
            ></v-textarea>

            <v-text-field
              v-model="newTask.dueTo"
              :counter="40"
              label="Data"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn color="warning" class="mr-4" @click="resetValidation"> voltar </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Limpar </v-btn>

        <v-btn color="success" class="mr-4" @click="updateTask">
          Salvar
        </v-btn>
      </v-form>
    </v-layout>
  </div>
</template>

<script>
import TasksApi from '@/api/tasks.api.js'
export default {
  name:'HomeView',
  data: () => ({
    valid: true,
    titleRules: [(v) => !!v || "É preciso escrever um titulo!"],
    conteudoRules: [(v) => !!v || "É preciso escrever algo"],
    newTask:{
        title:'',
        project:'',
        dueTo:'',
    },
  }),
  methods: {
    voltaParaResumo() {
      this.$router.push({name:'taskList'});
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    //   this.$router.push({name:'resumo'});
    },
    addData(){
        TasksApi.addData(this.newTask)
        this.$router.push({name:'taskList'})
    },
},
    created() {
    this.taskId = this.$route.params.id || ''
    },
};
</script>
<style scoped>
.margem {
  margin-right: 15px;
  margin-top: 20px;
}
.criar-tarefa {
  margin-right: 50%;
}
</style>