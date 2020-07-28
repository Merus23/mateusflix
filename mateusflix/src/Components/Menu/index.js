import React from 'react'; 
import Logo from '../../assets/img/Logo.png';
import '../Menu/Menu.css';
import Button from '../Menu/Button';





function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="mateusflix-logo" />

            </a>
			<Button as="a" className="ButtonLink" href="/">
				Novo vídeo
			</Button>
            
        
        </nav>
    )
}

export default Menu;