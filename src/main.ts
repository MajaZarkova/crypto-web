import './assets/main.css'
import 'sit-onyx/style.css'
import '@fontsource-variable/source-code-pro'
import '@fontsource-variable/source-sans-3'

import { createApp } from 'vue'
import { createOnyx } from 'sit-onyx'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const onyx = createOnyx()

app.use(router)

app.mount('#app')
app.use(onyx)
