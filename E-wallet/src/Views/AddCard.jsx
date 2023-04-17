import './AddCard.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Card from '../Components/Card/Card';


function AddCard() {
    const [cardnr, setCardnr] = useState('')
    const [name, setName]     = useState('')
    const [date, setDate]     = useState('')
    const [ccv, setCcv]       = useState('')
    const navigate = useNavigate();

    function handleClick() {
        const card = {
            cardnr: cardnr,
            name: name,
            date: date,
            ccv: ccv
        }
        navigate('/', {state: {card: card} })
    }
    

    return(
        <section className="addcard-view">
            <header>
                <h1 className='home-view__h1'>ADD NEW CARD</h1>
            </header>
            <p className='home-view__p'>NEW CARD</p>
            <Card />

            <section className='cardform'>
                <article className='cardform-upper'>
                    <label htmlFor="card-nr" className='cardform-input__label'>CARD NUMBER</label>
                    <input type="text" id="card-nr" onChange={ (event) => setCardnr(event.target.value) }/>
                    <label htmlFor="card-name" className='cardform-input__label'>CARDHOLDER NAME</label>
                    <input type="text" id="card-name" onChange={ (event) => setName(event.target.value) }/>
                </article>
                <article className='cardform-lower'>
                    <label htmlFor="card-date">VALID THRU</label>
                    <input type="text" id="card-date" onChange={ (event) => setDate(event.target.value) }/>
                    <label htmlFor="card-ccv">CCV</label>
                    <input type="text" id="card-ccv" />
                </article> 
            </section>
            <button onClick={ handleClick }>ADD CARD</button>
        </section>
    )
}
// onChange={ (event) => setCcv(event.target.value) }
export default AddCard