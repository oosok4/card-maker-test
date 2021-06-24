import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({FileInput,card,updateCard,deleteCard}) => {

    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const emailRef = useRef();
    const titleRef = useRef();
    const messageRef = useRef();


    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName
    } = card;

    const onFileChange = file => {
        updateCard({
            ...card,
            fileName : file.name,
            fileURL : file.url
        })
    }

    const onChange = (event) => {
        if(event.currentTarget == null){
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name] : event.currentTarget.value
        })
    }

    const onSubmit = () => {
        deleteCard(card);
    };

    return (
        <form className={styles.form}>
            <input 
                className = {styles.input}
                type="text"     
                ref = {nameRef} 
                value = {name}
                name = 'name'  
                onChange = {onChange}
            />
            <input 
                ref = {companyRef}
                type="text" 
                value = {company}
                name = 'company'
                onChange = {onChange}
            />
            <select name="theme" className={styles.select} value={theme} onChange={onChange} ref={themeRef}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input 
                ref = {titleRef}
                className = {styles.input}
                type="text" 
                value = {title}
                name = 'title'
                onChange = {onChange}
            />
            <input 
                ref = {emailRef}
                className = {styles.input}
                type="text" 
                value = {email}
                name = 'email'
                onChange = {onChange}
            />
            <textarea 
                ref = {messageRef}
                className={styles.textarea}
                value={message}
                name = 'message'
                onChange={onChange}
            >
            </textarea>
            <div className={styles.fileInput}>
                <FileInput name = {fileName} onFileChange = {onFileChange}/>
            </div>
            <Button name='Delete' onClick ={onSubmit}/>
        </form>
    );
};

export default CardEditForm;