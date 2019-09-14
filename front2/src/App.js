import React, {Component} from "react";
import Producto from "./Producto.js";


class App extends Component{
  constructor(props){
    super(props);

    this.state={
      productos:[]
    }
  }

  componentDidMount(){
    console.log("QUE PUTAS");
    fetch("/productos")
      .then(res=>res.json())
      .then(productos=>this.setState({

          productos: productos
      }));
  }

  renderProductos(){
    return this.state.productos.map(t=><Producto producto={t}></Producto>);
  }
  render(){
  return(<div>
    <div className="row">
      <div className="col-md-8">
        <h3>lo primero</h3>
        <p>por aca</p>

      </div>
      <div className="col-md-4">
        <h3>a la derecha </h3>
        <p>Todo esto</p>
      </div>
    </div>
    <div className="row">
      {this.renderProductos()}
    </div>
    </div>
    );
  }
}

export default App;

