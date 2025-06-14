
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

export default function Recipe(props) {
    return (
        <section className='suggested-recipe-container' aria-live='polite'>
            <h2 className='suggested-recipe-title'>Suggested Recipe</h2>
            <ReactMarkdown children={props.recipe}  /> 
        </section>
    );
}