import React , { Component } from 'react'
import BitCoinPricePresentacio from './presentacional'

class BitCoinpriceContainer extends Component{

    state = { bpi: {}}

    componentDidMount(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(data => {
                const { bpi } = data
                this.setState({ bpi })
            })
    }

    render(){
        return(
            <div>
               <BitCoinPricePresentacio bpi={this.state.bpi}/>
            </div>
        )
    }
}

export default BitCoinpriceContainer;