import React, { useRef, useEffect,useState } from 'react';
import Video from "./img/video.jpg";
import Cres from "./img/bureouvideo.mp4"
import "./homeBureau.css"

function HomeBureau (props) {

    const videoRef = useRef(null);

    // Автоматическое воспроизведение видео при монтировании компонента
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("Ошибка воспроизведения видео:", error);
            });
        }
    }, []);

    return (
        <div className="bureau">
            <div className="container">
                <div>
                    <h1 className="main_h1">
                        We are Createx Construction Bureau
                    </h1>
                    <p className="main_p">
                        We are rightfully considered to be the best construction company in the USA.
                    </p>
                </div>
                <div className="createx-video-div" >
                    <video
                        className="createx-video"
                        ref={videoRef}
                        width="880"
                        height="500"
                        loop
                        playsInline
                        muted // Отключение звука для автоматического воспроизведения
                        style={{ width: '100%' }}
                    >
                        <source src={Cres} type="video/mp4" />
                        Ваш браузер не поддерживает воспроизведение видео.
                    </video>
                </div>
            </div>
        </div>
    );
}

    //     setIsPlaying (true);
    //     if (videoRef.current) {
    //         videoRef.current.play ();
    //     }
    // }
    //
    // return (
    //     <div className="bureau">
    //         <div className="container">
    //             <div>
    //                 <h1 className="main_h1">
    //                     We are Createx Construction Bureau
    //                 </h1>
    //                 <p className="main_p">
    //                     We are rightfully considered to be the best construction company in the USA.
    //                 </p>
    //             </div>
    //             <div className="createx-videp" onClick={handlePlayVideo} style={{ cursor: 'pointer', position: 'relative', width: '100%', maxWidth: '1230px' }}>
    //                 {!isPlaying ? (
    //                     <>
    //                         <img
    //                             src={Video}
    //                             alt="Титульное изображение"
    //                             style={{ width: '100%' }}
    //                         />
    //                     </>
    //                 ) : (
    //                     <video
    //                         ref={videoRef}
    //                         width="1230"
    //                         height="500"
    //                         controls
    //                         style={{ width: '100%' }}
    //                         onClick={(e) => e.stopPropagation()} // Предотвращает повторное срабатывание клика
    //                     >
    //                         <source src={Cres} type="video/mp4" />
    //                         Ваш браузер не поддерживает воспроизведение видео.
    //                     </video>
    //                 )}
    //             </div>
    //         </div>
    //     </div>
    // );

export default HomeBureau;