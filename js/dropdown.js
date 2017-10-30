import React from 'react';

class Dropdown extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            dropdown: ['Action', 'Action2', 'Something else here']
        }
    }
    render(){
            let optionArr = this.state.dropdown;
        return (
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
            {optionArr.map(function (drop,i) {
                return  <a key={i} className="dropdown-item" href="#">{drop}</a>
            })}
            </div>
            </li>
        )
    }
}

export default Dropdown;