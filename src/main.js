import App from './App'
import router from './routes'

const root = document.getElementById('root');
root.append(new App().el);

router();