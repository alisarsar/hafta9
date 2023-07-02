import { useRef } from "react"

const App = ({puan, can})=>{
    const eleman1 = useRef()

    const baslikGuncelle = ()=>{
        document.title = eleman1.current.value
    }

    return (
        <>
            <strong>Puan: {puan}</strong> <strong>Can: {can}</strong>
            <input type="text" ref={eleman1} />
            <button onClick={baslikGuncelle}>Başlık Güncelle</button>
        </>
    )
}

export default App