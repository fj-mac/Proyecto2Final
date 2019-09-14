import React, {Component} from "react";
import "./Producto.css";

class Producto extends Component{
  constructor(props){
    super(props);

    this.state={
      elegido:0
    }
    this.onCompra=this.onCompra.bind(this);
  }

  onCompra(){
    this.setState({elegido: this.state.elegido+1});
  }

  render() {
      return(
      <div>
        <div className="col-md-4 producto">
          {this.props.producto.nombre}
        <button className="btn btn-primary" onClick={this.onCompra}>Comprar</button>
        <span> elegido: <span id="spElegidoValue">{this.state.elegido}</span></span>
        </div>
      </div>
      );
  }
}
export default Producto;
