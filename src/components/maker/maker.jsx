import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput,authService, cardRepository}) => {
    const [cards,setCards] = useState({});

    const historyState = useHistory().state;
    
    const [userId, setUserId] = useState(historyState && historyState.id);

    const history = useHistory();
    const onLogOut = useCallback(()=>{
        authService.logout();
    },[authService]);

    useEffect(()=>{
        if(!userId){
            return;
        }
        const stopSync = cardRepository.syncCards(userId,cards => {
            setCards(cards);
        });
        return () => {
            stopSync();
        }
    }, [userId,cardRepository]);

    useEffect(()=>{
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                history.push('/');
            }
        })
    }, [authService,history]);



    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);

    };

    const deleteCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId,card);
    }

    return (
        <section className={styles.maker}>
            <Header onLogOut={onLogOut}/>
                <div className={styles.container}>
                <Editor 
                    cards={cards}
                    addCard = {createOrUpdateCard}
                    updateCard = {createOrUpdateCard}
                    deleteCard = {deleteCard}
                    FileInput = {FileInput}
                />
                <Preview cards={cards}/>
                </div>
            <Footer/>
        </section>
    );
};

export default Maker;