import { createRouter, createWebHistory } from "vue-router"
import Start from "../views/StartView.vue"
import Questions from "../views/QuestionsView.vue"
import Results from "../views/ResultsView.vue"

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