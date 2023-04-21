import './AddCard.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../Components/Card/Card';
import { addCard } from '../action';

function AddCard() {
    const [cardnr, setCardnr] = useState('XXXX XXXX XXXX XXXX')
    const [name, setName]     = useState('NAME LASTNAME')
    const [date, setDate]     = useState('10/10')
    const [ccv, setCcv]       = useState('')
    const [vendor, setVendor] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate();
        const card = {
            cardnr: cardnr,
            name: name,
            date: date,
            ccv: ccv,
            vendor: vendor
        }
    function handleClick() {

        navigate('/')
        dispatch(addCard(card))
    }
    

    return(
        <section className="addcard-view">
            <header>
                <h1 className='home-view__h1'>ADD NEW CARD</h1>
            </header>
            <p className='home-view__p'>NEW CARD</p>

            < Card fullCard={card}/>

            <section className='cardform'>
                <article className='cardform-upper'>
                    <h3 htmlFor="card-nr" className='cardform-input__label'>CARD NUMBER</h3>
                    <input type="text" id="card-nr" className='cardform-input__upper' onChange={ (event) => setCardnr(event.target.value) }/>
                    <h3 htmlFor="card-name" className='cardform-input__label'>CARDHOLDER NAME</h3>
                    <input type="text" id="card-name" className='cardform-input__upper' onChange={ (event) => setName(event.target.value) }/>
                </article>
                <article className='cardform-lower'>
                    <div className='hje'>
                        <h3 htmlFor="card-date" className='cardform-input__label'>VALID THRU</h3>
                        <input type="text" id="card-date" className='cardform-input__lower' onChange={ (event) => setDate(event.target.value) }/>
                    </div>
                    <div className='hej'>
                        <h3 htmlFor="card-ccv" className='cardform-input__label' >CCV</h3>
                        <input type="text" id="card-ccv" className='cardform-input__lower' onChange={ (event) => setCcv(event.target.value) }/>
                    </div>
                </article> 
                <select name="" id="" className='cardform-select' onChange={ (event) => setVendor(event.target.value) }>
                    <option value="bank" className='bankOpt'>Välj bank</option>
                    <option value="bitcoin" className='bitcoin'>Bitcoin</option>
                    <option value="ninja" className='ninja'>Ninja bank</option>
                    <option value="blockchain" className='blockchain'>Blockchain</option>
                    <option value="evil" className='evil'>Evil corp</option>
                </select>
            </section>
            <button onClick={ handleClick } className='cardform-btn'>ADD CARD</button>
        </section>
    )
}
// 
export default AddCard