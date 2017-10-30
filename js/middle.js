import React from 'react';
import Slider from './slider';
import Heading from './heading';

class Middle extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            divdata: [
                {
                    'head': 'Heading1',
                    'text': 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
                    'viewbtn': 'view details>>'
                },
                {
                    'head': 'Heading2',
                    'text': 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
                    'viewbtn': 'view details>>'
                },
                {
                    'head': 'Heading3',
                    'text': 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
                    'viewbtn': 'view details>>'
                }]
        }
    }
    render(){
        return (
            <main role="main">
            <Slider/>
            <Heading dataArr={this.state.divdata}/>
            </main>
        )
    }
}

export default Middle;