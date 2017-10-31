import React from 'react';
import axios from 'axios';
class Newdata extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({ posts });
            });
    }

    render(){
        return (
            <div>
                <h1>{this.props.subreddit}</h1>
                <table>
                    <thead>
                    <tr>
                    <th>Domain</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Selftext</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map(function(datan,i){
                        return(
                        <tr key={i}>
                            <td>{datan.domain}</td>
                            <td>{datan.id}</td>
                            <td>{datan.title}</td>
                            <td>{datan.selftext}</td>
                        </tr>
                        )
                        }
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Newdata;