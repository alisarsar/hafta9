import React, { useRef, useState, useEffect } from 'react';

const App = () => {
    const kutuRef = useRef(null);
    const [kutuBoyutu, kutuBoyutuGuncelle] = useState({ genislik: 0, yukseklik: 0 });

    const butonTiklandi = () => {
        const rastgeleGenislik = Math.floor(Math.random() * 300) + 50;
        const rastgeleYukseklik = Math.floor(Math.random() * 300) + 50;
        kutuBoyutuGuncelle({ genislik: rastgeleGenislik, yukseklik: rastgeleYukseklik });
    }

    useEffect( ()=>{
        kutuRef.current.style.width = kutuBoyutu.genislik + "px"
        kutuRef.current.style.height = kutuBoyutu.yukseklik + "px"

    }, [kutuBoyutu] )

    return (
        <div>
            <button onClick={butonTiklandi}>Boyutu Değiştir</button>
            <div
                ref={kutuRef}
                style={{
                    background: 'red'
                }}
            ></div>
            <p>Genişlik: {kutuBoyutu.genislik}px</p>
            <p>Yükseklik: {kutuBoyutu.yukseklik}px</p>
        </div>
    );
};

export default App;
