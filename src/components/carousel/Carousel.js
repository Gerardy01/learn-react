import { useEffect, useState } from 'react';
import './carousel.css'
import { useNavigate } from 'react-router-dom';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Thumbs , Autoplay} from 'swiper'

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay]);





function Carousel(props) {

    let navigate = useNavigate();

    const [data, setData] = useState(null);
    const [image, setImage] = useState(null);
    const [theSlides, setTheSlides] = useState(null);
    const imageList = [];
    
    useEffect(() => {
        setData(props.data);
    }, [props.data])
    
    useEffect(() => {
        if (data) {
            for (let i = 0; i < data.length; i++) {
                imageList.push(data[i].thumbnail);
            }
            setImage(imageList);
        }
    }, [data])
    
    function handleClick(e) {
        navigate(`/game-details/${e.target.id}`);
    }

    useEffect(() => {
        if (image) {
            const slides = [];
            for(let i = 0; i < image.length; i++) {
                slides.push(
                    <SwiperSlide tag='li' key={i}>
                        <div className='carousel-image-holder' onClick={(e) => handleClick(e)}>
                            <div className='carousel-overlay'>
                                <div style={{height: '70%'}} id={data[i].id}/>
                                <div className='title-holder' id={data[i].id}>
                                    <p id={data[i].id}>{data[i].title}</p>
                                </div>
                            </div>
                            <img src={image[i]} className='carousel-image' alt="Product Image" />
                        </div>
                    </SwiperSlide>
                )
            }
            setTheSlides(slides);
        }
    }, [image])
    
    return (
        <div className='carousel'>
            <Swiper 
                id='main' 
                tag='section' 
                wrapperTag='ul' 
                autoplay={{delay: 1700}}
                loop
                slidesPerView={1.8}
                centeredSlides={true}
                initialSlide={2}
                
                className='main-carousel'
            >
                {imageList && theSlides}      
            </Swiper>
        </div>
    )
}

export default Carousel