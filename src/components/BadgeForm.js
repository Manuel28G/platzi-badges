import React from 'react';
class BadgeForm extends React.Component {
    handlerChange = (e) =>{
        console.log({
            name: e.target.name,
            value:e.target.value})
    }
    handlerClickWithoutSubmit = (e) =>{
        console.log("Button has click")
    }

    handlerClick = (e) =>{
        console.log("Button has click")
    }

    handlerSubmit = e =>{
        e.preventDefault();
        console.log("Form was submit")
    }


    render() {
        return (
            <div>
                <h1>New aAttendant</h1>
                <form onSubmit ={this.handlerSubmit} >
                    <div className="form-group">
                        <label>
                            First Name
                        </label>
                        <input onChange={this.handlerChange} className="form-control" type="text" name="firstName" />
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