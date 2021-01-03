import React, { Component } from 'react'

class BitCoinPricePresentacio extends Component{

    _renderCurrencies(){
        const { bpi } = this.props
        console.log(this.props);
        return Object.keys(bpi).map(currency =>(
            <div key={currency}>
                1 BTC is { bpi[currency].rate}
                <span>{bpi[currency].code}</span>
            </div>
        ))
    }


    render(){
        return(
            <div>
                <h4>Bitcoin Price</h4>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default BitCoinPricePresentacio;