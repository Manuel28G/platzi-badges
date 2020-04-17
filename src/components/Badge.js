import React from 'react';
import confLogo from '../images/mountain.png'
import "./styles/Badge.css"

class Badge extends React.Component{

    render(){
        return(
         <div className="Badge" >
            <div className="Badge__header"> 
                <img src={confLogo} alt="Logo de la conferencia"></img>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://s.gravatar.com/avatar/cf9ef2d26fc2ec042d761a2ad3d9d379?s=80" alt="Avatar"></img>
                <h1>
                    {this.props.firstName} <br/> {this.props.lastName}
                </h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <p>{this.props.userName}</p>
            </div>
            <div className="Badge__footer">
                #platziconf
            </div>
        </div>);
    }
}

export default Badge;