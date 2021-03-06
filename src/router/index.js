import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/page/admin'
import Index from '@/page/index'
import Contact from '@/page/contact'
import Project from '@/page/project'
import ProjectSingle from '@/page/projectSingle'
import SingleDetail from '@/page/singleDetail'
import About from '@/page/about'
import AwardDetail from '@/page/awardDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/home',
      name: 'Home',
      component: Index
    },
    {
      path: '/project',
      name: 'Projects',
      component: Project
    },
    {
      path: '/projectSingle',
      name: 'ProjectSingle',
      component: ProjectSingle
    },
    {
      path: '/singleDetail',
      name: 'SingleDetail',
      component: SingleDetail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/awardDetail',
      name: 'Awards',
      component: AwardDetail
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
})
