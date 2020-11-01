import './index.scss';
import Body from './components/Body/Body';
import Title from './components/Title/Title';


const renderApp = (root: HTMLElement) => {
  root.innerHTML = `${Title()}
                    ${Body()}`

}

renderApp(
  document.getElementById('root')
);
