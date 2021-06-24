import React, { useRef, useState } from 'react';
import styles from './card_add_form.module.css';

const CardAddForm = ({FileInput,addCard}) => {

    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const emailRef = useRef();
    const titleRef = useRef();
    const messageRef = useRef();

    const [file, setFile] = useState({
        fileName : null,
        fileURL  : null
    })

    const onFileChange = file => {
        setFile({
            fileName : file.name,
            fileURL : file.url
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const card = {
            id : Date.now(),
            name : nameRef.current.value || '',
            company : companyRef.current.value || '',
            theme : themeRef.current.value || '',
            email : emailRef.current.value || '',
            title : titleRef.current.value || '',
            message : messageRef.current.value || '',
            fileName : '',
            fileURL : ''
        };
        formRef.current.reset();
        addCard(card);
    }

    return(
        <form ref = {formRef} className={styles.form}>
            <input 
                type="text" 
                ref = {nameRef}
                className={styles.input}
                name = 'name'
                placeholder ='name'
            />
            <input 
                type="text" 
                ref = {companyRef}
                className={styles.input}
                name = 'company'
                placeholder ='conpany'
            />
            <select name="select" ref={themeRef} className={styles.select} placeholder='select'>
                <option placeholder='light'>light</option>
                <option placeholder='dark'>dark</option>
                <option placeholder='colorful'>colorful</option>
            </select>
            <input 
                type="text" 
                ref = {titleRef}
                className={styles.input}
                name = 'title'
                placeholder ='title'
            />
            <input 
                type="text" 
                ref = {emailRef}
                className={styles.input}
                name = 'email'
                placeholder ='email'
            />
            <textarea ref={messageRef} name="message" placeholder='message' className={styles.textarea}></textarea>
            <div className={styles.fileInput}>
                <FileInput name ={file.fileName} onFileChange = {onFileChange}/>
            </div>
            <button onClick={onSubmit}>add</button>
        </form>


    );
};

export default CardAddForm;