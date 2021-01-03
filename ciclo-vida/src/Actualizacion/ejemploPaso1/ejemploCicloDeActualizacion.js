import  React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    panda: 'https://www.anipedia.net/imagenes/osos-panda-800x375.jpg',
    cat: 'https://i.pinimg.com/564x/dd/f8/fc/ddf8fc92a1fea4c9e8985982118afc60.jpg',
    dolphin: 'https://www.dolphinproject.com/wp-content/uploads/2019/07/Maya-1024x683.jpg'
}

const Animals = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component{
    state = { src: ANIMAL_IMAGES[this.props.animal] }

    
    static getDerivedStateFromProps = (nextProps, state) => {    
        if (state.prevAnimal !== nextProps.animal) {            
            return{
                prevAnimal: nextProps.animal,
                src: ANIMAL_IMAGES[nextProps.animal]
            }            
        } 
        return null
    }
   
   /*  anteriores versiones
    componentWillReceiveProps(nextProps){
        this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
    }

   

        shouldComponentUpdate(nextProps){
            return this.props.animal !== nextProps.animal
        }
    */
/** esto no funciona en las nuevas versiones
    componentWillUpdate(nextProps){
        const img = document.querySelector('img')
        img.animate([{
            filter: 'blur(0px)'
        },{
            filter: 'blur(4px)'
        }],{
            duration:1000,
            easing: 'ease'
        })
    } */


    render(){
        console.log('-> render')
        return(
            <div>
                <p>Selected { this.props.animal }</p>
                <img
                    alt={ this.props.animal }
                    src={ this.state.src }
                    width = '250'/>
            </div>
        )
    }
}

AnimalImage.propTypes = {
    //el retorna un array con los lelementos con keys el nombre
    animal: PropTypes.oneOf(Animals)
}

class EjemploImagenes extends Component{

    state={animal: 'panda'}

    _renderAnimalButton = (animal) =>{
        return(
            <button 
               /* disabled={animal===this.state.animal}*/
                key={animal} 
                onClick={()=> this.setState({animal})}>
               {animal}
            </button>
        )
    }

    render(){
        return(
            <div>
                <h3>Ejempo de Actualizacion</h3>
                {Animals.map(this._renderAnimalButton)}               
                <AnimalImage animal={this.state.animal}/>
            </div>
        )
    }
}

export default EjemploImagenes; 