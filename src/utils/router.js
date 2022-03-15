import { createRouter, createWebHistory } from "vue-router"
import Start from "../views/Start.vue"
import Questions from "../views/Questions.vue"
import Results from "../views/Results.vue"

const routes = [
    {
        path: '/start',
        name: "Start",
        component: Start
    },
    {
        path: '/questions',
        name: "Questions",
        component: Questions
    },
    {
        path: '/results',
        name: "Results",
        component: Results
    }
    ]

export default createRouter({
    history: createWebHistory(),
    routes
});