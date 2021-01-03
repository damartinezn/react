import React, {Component} from 'react'

class ComponenteA extends Component{
    render(){
        return (
            <div>
                <h2>Estamos en Sesión</h2>
                <button>Iniciar Sesión</button>
            </div>
        )
    }
}
class ComponenteB extends Component{
    render(){
        return (
            <div>
                <h4>Bienvenido Uusario!</h4>
                <button>Cerrar Sesión</button>
            </div>
        )
    }
}

function useConditionalRendering(mostrarA){
    if(mostrarA){
        return <ComponenteA />
    }
    return <ComponenteB />
}

export default class ConditionalSection extends Component{
    
    constructor(){
        super()
        this.state = {mostrarA: false}
        this.state = {otro: false}
    }

    render(){
        const conditionalComponent = useConditionalRendering(this.state.mostrarA)
        return(
            <div>
                <h4>Conditional Section Rendering</h4>
                {conditionalComponent}
                <p>prro</p>
                {
                    this.state.otro ? 
                    <ComponenteA/> 
                    : <ComponenteB/>
                }
            </div>
        )
    }
}