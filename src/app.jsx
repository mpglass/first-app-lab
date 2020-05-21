import React from 'react';

// const App = () => {
//     return (
//         <div>
//             <h1>Henlo fren!!</h1>
//         </div>
//     );
// }


class App extends React.Component {


    state = {
        text: 'I really like React!',
        message: '',
        loading: false,
        address: null
    };

    componentDidMount() {
        console.log('fetch here')
        // this.setState({ loading: true });
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
                    <section className="row justify-content-center">
                        {this.props.skills.map((skill, i) => (
                            <div className="col-md-8" key={`skill-i-${i}`}>
                                <div className="card my-2 shadow">
                                    <div className="card-body">
                                        <p className="card-text">{skill}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
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
                    <p>{this.state.address && this.state.address.street}</p>
                    <button onClick={this.changeState}>Get Started</button>
                </div>
            );
        }
    }
}

export default App;