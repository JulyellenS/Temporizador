import React, {useState, useEffect} from 'react'
import LabelTemporizador from './LabelTemporizador'
import  Botao  from  './Botao'

const ContagemRegressiva = (props) => {
    const [segundos, setSegundos] = useState(5)
    const [minutos, setMinutos] = useState(0)
    const [horas, setHoras] = useState(1)
    const [stop, setStop] = useState(false)
    const [namePause, setNamePause] = useState("Pause")

    
    const decrescerSegundos = () => { 
        if(stop===false){
        setSegundos(segundos-1)
        }
    }
    const atualizarSegundos =() => {
        if(segundos<=0){
        setSegundos(59)
        }
    }
    const decrescerMinutos = () => {
        if(segundos <=0){
        setMinutos(minutos-1)
        }
    }
    const atualizarMinutos =() =>{
        if(minutos<=0){
            setMinutos(59)
        }
    }
    const decrescerHoras = () => {
        if(minutos<=0){
        setHoras(horas-1)
        }
        if((horas<=0) && (minutos<=0) && (segundos<=0)){
            setSegundos(0)
            setMinutos(0)
            setHoras(0)
            setStop(stop)
        }
    }
    const zerarTemporizador = () => {
        setSegundos(0)
        setMinutos(0)
        setHoras(0)
    }

    const pararTemporizador = () => {
        setStop(!stop)
        if(stop)
        {
            setNamePause("Pause")
        }else
        {
            setNamePause("Play")
        } 
    }
    useEffect(() => {
        let id = setInterval(() => {
            decrescerSegundos()
        }, 1000)
        if (segundos <= 0){
            atualizarSegundos()
            decrescerMinutos()
            atualizarMinutos()
            decrescerHoras()
        }
        return () => clearInterval(id);   
    }, [segundos, stop])
    
    return(
            <div>
                <LabelTemporizador name={`${horas < 10 ? "0"+horas : horas}:${minutos < 10 ? "0"+minutos : minutos}:${segundos < 10 ? "0"+segundos : segundos}`}/>
                <Botao onClick={() => {zerarTemporizador()}} label="Stop"/>
                <Botao onClick={() => {pararTemporizador()}} label={namePause}/>
            </div>
        )
}
export default ContagemRegressiva
