import './assets/scss/index.scss';
import './assets/animations/animations.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


const app = createApp(App)

app.use(createPinia())
app.mount('#app')
