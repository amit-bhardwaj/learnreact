import React from 'react';

class Heading extends React.Component {
    render(){
        let arr = this.props.dataArr;
        return (
        <div className="container">
        <div className="row">

        {arr.map(function(div_val,index){
            return  (
                <div key={index} className="col-md-4">
                    <h2>{div_val.head}</h2>
                    <p>{div_val.text}</p>
                    <p><a className="btn btn-secondary" href="#" role="button">{div_val.viewbtn}</a></p>
                </div>
            );
        })}
        </div>

        <hr/>

        </div>
        )
    }
}

export default Heading;