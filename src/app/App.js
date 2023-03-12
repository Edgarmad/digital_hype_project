import React, {Component} from "react";

class App extends Component {
    constructor(){
        super();
        this.state = {
            code:'',
            decode:{
                first_name:'',
                last_name:'',
                id:''
            }
        };
        this.decodingCode = this.decodingCode.bind(this);
        this.handdle = this.handdle.bind(this);
    }
    decodingCode(e){
        fetch('/api/task/decode',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
            }
        }).then(res=>res.json())
          .then(data=>{
            this.setState({code: '',decode:data})
            console.log(this.state.decode);
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
            <div style={{ position: "relative", minHeight: "100vh" }}>
                <nav className="indigo darken-1">
                    <div className="container">
                        <a className="brand-logo" href="/">Uncoding the code</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col 6">
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
                            <div className="col-6">
                                <h5> Nombre: {this.state.decode.first_name}</h5>
                                <h5> Apellido: {this.state.decode.last_name}</h5>
                                <h5> ID: {this.state.decode.id}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <footer style={{ position: "fixed", bottom: "0", width: "100%" }} className="page-footer indigo lighten-2">
                    <div className="footer-copyright  indigo darken-4">
                        <div className="container">
                            Luis Edgar Madrigal Munguia
                            <a className="white-text text-lighten-4 right" href="https://github.com/Edgarmad" target="_blank">GitHub</a>
                            <a className="white-text text-lighten-4 right" href="https://www.linkedin.com/in/luis-madrigal1396/" target="_blank">LinkedIn &nbsp;</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default App;