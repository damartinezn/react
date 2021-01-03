import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Box extends Component{
    render(){
        return(
            <div style={{ border: '1px solid ', margin: 10, padding: 10 }}>
                {this.props.children}
            </div>
        )
    }
}

class Article extends Component{

    static propTypes = {
        author: PropTypes.string.isRequired
    }

    render(){
        const { author, children, title, date } = this.props 
        return(
            <section>
                <h2>{title}</h2>
                {author &&  <p><em>Escrito por {author}</em></p> }
                <Box>{date}</Box>
                <article>
                    {children}
                </article>
            </section>
        )
    }
}

export default class Forms extends Component{
    constructor(){
        super()
        this.state={
            inputName: '',
            inputTwitter: '',
            inputTerms: true
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        const name = this.inputName.value
        const twitter = document.getElementById('twitter').value
        console.log({name, twitter})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) => {
        console.log('handleChange')
        console.log(e.target.checked)
        this.setState({ inputTerms: e.target.checked})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre : </label>
                        <input
                            id='name'
                            name='userName'
                            placeholder='Introduce el nombre'
                            ref={inputElement => this.inputName = inputElement}
                            onChange={e => this.setState({ inputName: e.target.value })}
                            value={this.state.inputName}
                        ></input>
                    </p>
                    <p>
                        <label>Twitter : </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            placeholder='Introduce tu Twitter'
                            onChange={e => this.setState({ inputTwitter: e.target.value })}
                            value={this.state.inputTwitter}
                        ></input>
                    </p>
                    <p>
                        <label>
                            <input 
                                checked = {this.state.inputTerms}
                                onChange={this.handleChange} 
                                type='checkbox'/>
                            Accepted terms
                        </label>
                    </p>
                    <button >Enviar</button>

                </form>
                <hr/>
                <Article 
                    title='Este el mendigo tiulo prros'
                    author='Micaela Manosalvas'
                    date = {new Date().toLocaleDateString()}>
                    <p>El contenido que envolvemos dentro del componente Article será enviado al componente
                        this.props.children asdadsa sdasd a sda sdasdasda sd as d asd a sda sd a sd asd a sd asd asd
                        asdasdasda
                        El contenido que envolvemos dentro del componente Article será enviado al componente
                        this.props.children asdadsa sdasd a sda sdasdasda sd as d asd a sda sd a sd asd a sd asd asd
                        asdasdasda
                    </p>
                    <strong>Mantiene las etiquetas que se añadieron</strong>

                </Article>
                <Article 
                    title='Otro articulo'   
                               
                    date = {new Date().toLocaleDateString()}>
                    <p>El contenido que envolvemos dentro del componente Article será enviado al componente
                        this.props.children
                        El contenido que envolvemos dentro del componente Article será enviado al componente
                        this.props.children asdadsa sdasd a sda sdasdasda sd as d asd a sda sd a sd asd a sd asd asd
                        asdasdasda
                    </p>
                    <strong>Mantiene las etiquetas que se añadieron</strong>

                </Article>
            </div>
        )
    }
}