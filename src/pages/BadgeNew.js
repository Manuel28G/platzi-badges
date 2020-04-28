import React from 'react';
import Navbar from '../components/Navbar.js'
import android from '../images/android.svg'
import android_name from '../images/android_name.svg'
import './styles/BadgeNew.css';
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm.js'

class BadgeNew extends React.Component{
    state ={form:{
        firstName:'',
        email:'',
        jobTitle:'',
        github:'',
    }};

    handleChanche = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        })
    };

    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                        <img src={android} height="150px" alt="Logo"/>
                        <img src={android_name} height="150px" alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName} 
                            jobTitle={this.state.form.jobTitle}  
                            email={this.state.form.email}  
                            userName={this.state.form.github} />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChanche} formValue ={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;