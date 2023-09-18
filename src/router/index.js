import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/homePage/HomePage.vue'
import WorkPage from '@/pages/workPage/WorkPage.vue'
import StartPage from '@/pages/start/Start.vue'
import NotificationsPage from '@/pages/notifications/Notifications.vue'
import StudyPage from '@/pages/study/Study.vue'
import AchievementsPage from '@/pages/achievements/Achievements.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/work',
      component: WorkPage
    },
    {
      path: '/start',
      component: StartPage
    },
    {
      path: '/notifications',
      component: NotificationsPage
    },
    {
      path: '/study',
      component: StudyPage
    },
    {
      path: '/achievements',
      component: AchievementsPage
    },
  ]
})

export default router
