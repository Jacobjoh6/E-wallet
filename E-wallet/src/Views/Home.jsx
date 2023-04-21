import './Home.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Card from '../Components/Card/Card'
import CardStack from '../Components/CardStack/CardStack'
import ActiveCard from '../Components/ActiveCard/ActiveCard'


function Home() {
    const navigate = useNavigate()

    function navigateAdd() {
        navigate('/add')
    }

    return(
        <section className='home-view'>
            <header>
                <h1 className='home-view__h1'>E-WALLET</h1>
            </header>
            <p className='home-view__p'>ACTIVE CARD</p>

            < ActiveCard />
               <button onClick={ navigateAdd } className='home-view__btn' >ADD NEW CARD</button>
            <hr />
            
            < CardStack />

     
        </section>
    )
}

export default Home