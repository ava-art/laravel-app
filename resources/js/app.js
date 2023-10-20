import 'bootstrap';

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


import { createApp } from 'vue';

import {store} from './store';
import '../sass/app.scss';



const app = createApp({
    store,
    el: '#app',
    created(){
        let url = window.location.pathname
        let slug = url.substring(url.lastIndexOf('/')+1)
        this.$store.commit('SET_SLUG', slug)
        this.$store.dispatch('getArticleData', slug)
        this.$store.dispatch('viewsIncrement', slug)
    }
});

import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

import ArticleComponent from './components/ArticleComponent.vue';
app.component('article-component', ArticleComponent);

import ViewsComponent from './components/ViewsComponent.vue';
app.component('views-component', ViewsComponent);

import LikesComponent from './components/LikesComponent.vue';
app.component('likes-component', LikesComponent);

import CommentsComponent from './components/CommentsComponent.vue';
app.component('comments-component', CommentsComponent);

app.use(store)
app.mount('#app');
