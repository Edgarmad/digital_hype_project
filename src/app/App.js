import React, {Component} from "react";

class App extends Component {
    constructor(){
        super();
        this.state = {
            code:''
        };
        this.decodingCode = this.decodingCode.bind(this);
        this.handdle = this.handdle.bind(this);
    }
    decodingCode(e){
        console.log(this.state);
        fetch('/api/task/decode',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
            }
        }).then(res=>res.json())
          .then(data=>{
            console.log(data);
            this.setState({code: ''})
          })
          .catch(err=>console.log(err));
        e.preventDefault();
    }
    handdle(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Gund Arm</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.decodingCode}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type='text' placeholder="texto" name="code" onChange={this.handdle} value={this.state.code}>
                                                </input>
                                            </div>
                                        </div>
                                        <button className="btn light-blue darker-4" type="submit">
                                            Enviar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;