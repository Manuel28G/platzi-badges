import React from 'react';
class BadgeForm extends React.Component {
    state = {};
    

    handlerClickWithoutSubmit = (e) => {
        console.log("Button 2 has click")
    }

    handlerClick = (e) => {
        console.log("Button 1 has click")
    }

    handlerSubmit = e => {
        e.preventDefault();
        console.log("Form was submitted");
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handlerSubmit} >
                    <div className="form-group">
                        <label>
                            First Name
                        </label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValue.firstName} />
                    </div>
                    <div className="form-group">
                        <label>
                            Last Name
                        </label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValue.lastName} />
                    </div>
                    <div className="form-group">
                        <label>
                            Email
                        </label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="email" value={this.props.formValue.email} />
                    </div>
                    <div className="form-group">
                        <label>
                            Job title
                        </label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValue.jobTitle} />
                    </div>
                    <div className="form-group">
                        <label>
                            Github
                        </label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="github" value={this.props.formValue.github} />
                    </div>
                    <div className="row-2">
                        <button type="submit" onClick={this.handlerClick} className="btn btn-primary">Save</button>
                        <button type="button" onClick={this.handlerClickWithoutSubmit} className="btn btn-primary">Save 2</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BadgeForm;