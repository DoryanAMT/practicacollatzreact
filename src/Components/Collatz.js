import React, { Component } from 'react'

export default class Collatz extends Component {    
    state = {
        numeros: []
    }


    generarNumero = () => {
        let num = parseInt(this.props.numero)
        let aux = []

        while (num != 1) {
            if (num % 2 == 0) {
                num = num / 2;
                aux.push(num);
            }else{
                num = num / 3;
                aux.push(num)
            }
        }
        this.setState({
            numeros : aux
        })


    }
    


  render() {
    return (
      <div>
        <h1>Collatz</h1>
        <h4 style={{color:"blue"}}>El numero es: {this.props.numero}</h4>
        <ul>
            {
                this.props.numeros &&
                this.props.numeros.map((numero, index) =>{
                    return("");
                })

            }
        </ul>
      </div>

    )
  }
}
