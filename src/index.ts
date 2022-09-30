import './styles/index.css';
import { router } from './routes';
// import './Header/index';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
