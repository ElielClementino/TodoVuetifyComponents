import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import TasksListView from '@/views/TasksListView.vue'
import TasksSummaryView from '@/views/TasksSummaryView.vue'
import TaskUpdateView from '@/views/TaskUpdateView.vue'
import AddTaskView from '@/views/AddTaskView.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import PrivateLayout from '@/layouts/PrivateLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children:[
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: '/login',
        name: 'login',
        component: LoginView,
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterView,
      },
    ]
  },
  {
    path: "/tasks",
    component: PrivateLayout,
    children: [
      {
        path: "/summary",
        name:"taskSummary",
        component: TasksSummaryView,
      },
      {
        path:'',
        name:'taskList',
        component: TasksListView,
      },
      {
        path: '/taskupdate',
        name: 'taskUpdate',
        component: TaskUpdateView
      },
      {
        path: '/addTask',
        name: 'addTask',
        component: AddTaskView
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
