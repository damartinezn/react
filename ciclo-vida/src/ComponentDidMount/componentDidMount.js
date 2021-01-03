import React, { Component } from 'react'

class EjemploComponentDidMount extends Component{

    constructor(props){
        console.log('constructor')
        super(props)
        this.state = { scroll: 0 }
    }

    componentWillMount(){
        console.log('componentWillMount')
    }
    
    componentDidMount(){
        console.log('ComponentDidMount')
        document.addEventListener('scroll', ()=>{
            this.setState({ scroll: window.scrollY })
        })
    }

    render(){
        return(
            <div>
                <h4>Ciclo de montaje: ComponentDidMount</h4>
                <p>El scroll es {this.state.scroll}</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>
                <p>asd asdasd asdasdasdasdas das d asd asdasdasdasd as das d as da sd as d</p>

            </div>
        )
    }
}


export default EjemploComponentDidMount

