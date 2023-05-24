
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import piniaPersist from 'pinia-plugin-persist';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

loadFonts()

const pinia = createPinia()
pinia.use(piniaPersist);
const app = createApp(App)

app.use(pinia)
app.use(vuetify)
app.mount('#app')