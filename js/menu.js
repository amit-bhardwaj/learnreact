import React from 'react';
import Dropdown from './dropdown';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: ['Home','Link','Disabled']
        }
    }

    render(){
        let Pdata = this.props.app.state;
        self = this;
        let Active_class = '';
        let Active_span = '';
        let MenuArr = this.state.menu;
        return (
            <ul className="navbar-nav mr-auto">
            {MenuArr.map(function(menus, i) {
                        if((menus).toLowerCase() == Pdata.currentPage.toLowerCase()){
                        Active_class = 'nav-item active';
                        Active_span = <span className="sr-only"></span>;
                    } else {
                            Active_class = 'nav-item';
                            Active_span = '';
                        }
                    return  <li key={i} className={Active_class}><a className="nav-link" onClick={self.handleClick.bind(self, menus)} href="#">{menus} {Active_span}</a></li>
                })}
                <Dropdown/>
            </ul>
        )
    }

    handleClick(page_name) {
        // e.preventDefault();
        let newState = {
            currentPage: page_name.toLowerCase()
        };
        this.props.app.setState(newState);
        console.log('The link was clicked.'+ page_name);
    }
}

export default Menu;