import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgeList from '../components/BadgesList.js'
import { Link } from 'react-router-dom'

class Badges extends React.Component{
   


    constructor(props){
        //space to initialize variables or states
        super(props)
        console.log('1. constructor()');
        this.state ={
            data:[],
        };
    }

    componentWillUnmount(){
        console.log('final. componentWillUnmount()');
        //we will clean variable because if a component will be unmount
        //and (in this example) the timeout is not exec, when it execute the routine
        //be throw a error in console
        clearTimeout(this.timeoutId);
    }

    componentDidUpdate(prevProps,prevState){

        console.log('5. componentDidUpdate()');
        console.log({
            prevProps:prevProps,
            prevState:prevState
        });
        console.log({
            prevProps:this.props,
            prevState:this.state
        });
    }


    componentDidMount(){
        console.log('3. componentDidMount()');
        this.timeoutId = setTimeout(() => {
            this.setState({
                data:[
                {
                  id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                  firstName: 'Freda',
                  lastName: 'Grady',
                  email: 'Leann_Berge@gmail.com',
                  jobTitle: 'LegacyBrandDirector',
                  twitter: 'FredaGrady22221-7573',
                  avatarUrl:
                    'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
                },
                {
                  id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                  firstName: 'Major',
                  lastName: 'Rodriguez',
                  email: 'Ilene66@hotmail.com',
                  jobTitle: 'HumanResearchArchitect',
                  twitter: 'MajorRodriguez61545',
                  avatarUrl:
                    'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
                },
                {
                  id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                  firstName: 'Daphney',
                  lastName: 'Torphy',
                  email: 'Ron61@hotmail.com',
                  jobTitle: 'NationalMarketsOfficer',
                  twitter: 'DaphneyTorphy96105',
                  avatarUrl:
                    'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
                },
            ]})
        }, 3000);
    }

    render(){

        console.log('2. render()');
        return (
        <React.Fragment>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img src={confLogo} className="Badges_conf-log" alt="Conf logo"/>
                    </div>
                </div>
            </div>
            <div className="Badge__container">
                <div className="Badges__buttons">
                    <Link to="/badges/new" className="btn btn-primary">
                        New Badge
                    </Link>
                </div>
                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgeList badges={this.state.data}/>
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}

export default Badges;