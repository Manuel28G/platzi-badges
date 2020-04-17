import React from 'react';
import confLogo from '../images/mountain.png'

class Badge extends React.Component{
    render(){
        return <div>
            <div> 
                <img src={confLogo} alt="Logo de la conferencia"></img>
            </div>
            <div>
                <img src="https://s.gravatar.com/avatar/cf9ef2d26fc2ec042d761a2ad3d9d379?s=80" alt="Avatar"></img>
                <h1>
                    Manuel <br/> Goncalves
                </h1>
            </div>
            <div>
                <p>Frontend Engineer</p>
            </div>
            <footer>
                #platziconf
            </footer>
        </div>;
    }
}

export default Badge;