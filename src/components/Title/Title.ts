import './Title.scss';
import logo from './logo.png';

export default () : string => {
    return `<div class="title__container">
                <h1 class="title__text">Webpack typescript starter</h1>
                <img class="title__logo" src="${logo}" alt="logo"></img>
            </div>`;
}