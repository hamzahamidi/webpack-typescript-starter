import './index.scss';
import Body from './components/Body/Body';
import Title from './components/Title/Title';


const renderApp = (root: HTMLElement) => {
  root.innerHTML = `${Title()}
                    ${Body()}`

}

const root = document.getElementById('root');

if (!root) {
  throw new Error('Unable to find the #root element to render into.');
}

renderApp(root);
