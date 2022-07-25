import { useState, useEffect } from 'react'
import '../css/gameListPage.css'

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import Carousel from '../components/carousel/Carousel'



const firebaseConfig = {
    apiKey: "AIzaSyAqRoF_peP4UDiI5NUShSh1K5EdNsNPBgA",
    authDomain: "binarchal9-b5d9f.firebaseapp.com",
    databaseURL: "https://binarchal9-b5d9f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "binarchal9-b5d9f",
    storageBucket: "binarchal9-b5d9f.appspot.com",
    messagingSenderId: "945906490653",
    appId: "1:945906490653:web:bada437c89b4e792e6d5f4",
    measurementId: "G-XEFWZVDEK2"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();



function GameListPage() {

    const [data, setData] = useState(null);
    const [carouselData, setCarouselData] = useState(null);


    useEffect(() => {
        getData();
    }, [])

    function getData() {

        db.collection('game_list').get().then(querySnapShot => {

            if (!querySnapShot) {
                throw Error('failed to get data');
            }

            const allData = [];
            querySnapShot.forEach(e => {
                const theData = {
                    id: e.id,
                    carousel: e.data().carousel,
                    description: e.data().description,
                    developer: e.data().developer,
                    genre: e.data().genre,
                    release_date: e.data().release_date,
                    thumbnail: e.data().thumbnail,
                    title: e.data().title
                }
                allData.push(theData);
            });

            if (allData.length === 0) {
                throw Error('failed to get data');

            } else {
                setData(allData);
            }

        }).catch(err => {
            setData('err');
            console.log(err);
        });
    }

    function getCarouselData(data) {
        const carouselArr = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].carousel) {
                carouselArr.push(data[i]);
            }
        }

        setCarouselData(carouselArr);
    }

    useEffect(() => {
        if (data) {
            getCarouselData(data)
        }
    }, [data])

    if (!data) {
        return (
            <section className="game-list-page">
                <h1 style={{textAlign: 'center'}}>Loading ...</h1>
            </section>
        )
    }

    return (
        <section className="game-list-page">
            {data !== 'err' ?
                <>
                    <div className='game-list-page-main'>
                        {carouselData && <Carousel data = {carouselData} />}
                    </div>
                </> : <>
                    <h1 style={{textAlign: 'center'}}>Try Again ...</h1>
                </>
            }
        </section>
    )
}

export default GameListPage