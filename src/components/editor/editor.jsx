import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ FileInput,cards,updateCard, addCard,deleteCard}) => {
    return (
        <section  className={styles.editor}>
            {Object.keys(cards).map(key => (
                <CardEditForm
                    key = {key}
                    card = {cards[key]}
                    updateCard = {updateCard}    
                    FileInput = {FileInput}
                    deleteCard = {deleteCard}
                />  
            ))}
            <CardAddForm 
                addCard = {addCard}
                FileInput = {FileInput}
            />
        </section>
    );
}

export default Editor;