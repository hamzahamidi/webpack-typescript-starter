import './Body.scss';
import github from './github.png';

export default () : string => {
    
    const projectLink = 'https://github.com/hamzahamidi/webpack-typescript-starter'
    return `<div class="body__container">
                <a class="body__fork-project" href="${projectLink}" target="_blank" rel="noopener noreferrer"">
                    Fork project Here
                    <img class="body__link" src="${github}" alt="github"></img>
                </a>
            </div>`;
}