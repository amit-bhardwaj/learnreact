import React from 'react';
import Search from './form_search';
import Menu from './menu';
import Middle from './middle';
import Footer from './footer';
import Link from './link';
import Newdata from './newdata'
class Head extends React.Component {
    constructor (props){
        super (props);
        this.state =
        {
            currentPage: 'home'
        }
    }

    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">

                    <Menu app={this}/>
                    <Search/>
                    </div>
                </nav>
                {this.setPage()}
                <Footer/>
            </div>
        )
    }

    setPage(){
        console.log(this.state);
        let currentPage = this.state.currentPage;
        if(currentPage.toLowerCase() == 'home')
            return <Middle/>;
        if(currentPage.toLowerCase() == 'newdata')
            return <Newdata subreddit="reactjs"/>;
        else
            return <Link/>;
    }
}

export default Head;
