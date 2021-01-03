import React, { Component } from 'react';
import PropTypes from 'prop-types'

//este tipo no tienen estados 
function Article (props){
    return(
        <div>
            <h2>{props.title}</h2>
            <p><em>Escrito por {props.author}</em></p>
            <time> {props.date} </time>
            <article>
                {props.children}
            </article>
        </div>
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    children: PropTypes.any
}

const Button = ({ borderColor = 'blue', label }) =>(
    <button style={{ borderColor, display: 'block' }}>
        {label}
    </button>
)

Button.propTypes = {
    borderColor: PropTypes.string,
    label: PropTypes.string.isRequired
}

class ArticleExample extends Component{
    render(){
        return(
            <div>
                <h2>Article</h2>
                <Article 
                    title='Hola mundo yo aqui extrañandote'
                    author='Micaela te amo'
                    date={new Date().toLocaleDateString()}>

                        <p> hola mundo aquie desde el contenido</p>
                </Article>
                <Button 
                    borderColor='red'
                    label='da click aqui'
                />
            </div>
        )
    }
}

export default ArticleExample;