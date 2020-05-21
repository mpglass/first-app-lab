import React from 'react';

// const App = () => {
//     return (
//         <div>
//             <h1>Henlo fren!!</h1>
//         </div>
//     );
// }


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'I really like React!',
            message: '',
            loading: false,
        };
    }
    componentDidMount = () => {
        this.setState({ loading: true });
    }
    changeState = () => {
        this.setState({ loading: true });
    }

    handleMessageChange = (e) => {
        this.setState({ message: e.target.value });
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <h1>My friend is {this.props.friend}</h1>
                    <p>He has these skills: {this.props.skills}</p>
                    <p>{this.props.greet()}</p>
                    <h1>{this.state.text}</h1>
                    <h3>What type of pizza do you like?  {this.state.message}</h3>
                    <input value={this.state.message} onChange={this.handleMessageChange} />
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Loading....</h1>
                    <button onClick={this.changeState}>Get Started</button>
                </div>
            );
        }
    }
}

export default App;