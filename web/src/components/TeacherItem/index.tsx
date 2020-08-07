import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.svg'

import './stylesTeacherItem.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/888907252702347265/g2JwwLDR_400x400.jpg" alt="Professor 1"/>
                <div>
                    <strong>Professor Doggo</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper, purus ut aliquam laoreet, tellus nunc tincidunt sem, sed pretium diam elit nec mauris. Donec ornare ligula vitae urna placerat, eu viverra dui molestie. Praesent blandit pellentesque suscipit. Nam purus urna, semper quis ullamcorper vitae, dapibus quis mi. Aliquam et ipsum tristique, facilisis dui quis, congue diam. In quis porta nulla, et luctus orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    Entre em contato
                    <img src={whatsappIcon} alt="whatsapp"/>
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;