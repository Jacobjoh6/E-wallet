import './Home.css'
import { useNavigate } from 'react-router-dom'
import Card from '../Components/Card/Card'
import CardStack from '../Components/CardStack/CardStack'


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
            
            <section className='home-view__card'>
                <article className='home-view__card__img'>
                    <div>
                        <svg width="40" height="64" viewBox="0 0 50 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="44" width="50" height="40" rx="8" fill="#ECE6DF"/>
                            <line y1="56.5" x2="18" y2="56.5" stroke="black" strokeOpacity="0.11"/>
                            <line x1="33" y1="56.5" x2="50" y2="56.5" stroke="black" strokeOpacity="0.11"/>
                            <line x1="32.5" y1="44" x2="32.5" y2="84" stroke="black" strokeOpacity="0.11"/>
                            <line y1="70.5" x2="18" y2="70.5" stroke="black" strokeOpacity="0.11"/>
                            <line x1="32" y1="70.5" x2="50" y2="70.5" stroke="black" strokeOpacity="0.11"/>
                            <line x1="18.5" y1="44" x2="18.5" y2="84" stroke="black" strokeOpacity="0.11"/>
                            <g opacity="0.5">
                            <path d="M32.8487 26.5009C33.5267 27.1657 33.5267 28.2441 32.8487 28.9097C32.1698 29.5753 31.0693 29.5753 30.3913 28.9097C27.4169 25.9941 22.5778 25.9941 19.6038 28.9097C18.9249 29.5753 17.824 29.5753 17.146 28.9097C16.8067 28.5771 16.6378 28.1423 16.6378 27.7049C16.6378 27.2692 16.8072 26.8331 17.146 26.5009C21.4756 22.2567 28.5191 22.2567 32.8487 26.5009Z" fill="white"/>
                            <path d="M38.8186 21.073C39.4967 21.7381 39.4967 22.817 38.8186 23.4826C38.1397 24.1482 37.0397 24.1482 36.3612 23.4826C30.0956 17.339 19.9004 17.339 13.6348 23.4826C12.9563 24.1482 11.8554 24.1482 11.1778 23.4826C10.8386 23.15 10.6683 22.7135 10.6683 22.2778C10.6683 21.8412 10.8386 21.406 11.1778 21.073C14.869 17.4538 19.7772 15.4608 24.9978 15.4608C30.2184 15.4608 35.1266 17.4538 38.8186 21.073Z" fill="white"/>
                            <path d="M44.2866 15.0204C44.965 15.6856 44.965 16.7644 44.2866 17.4296C43.6081 18.0948 42.5081 18.0948 41.8296 17.4296C37.3332 13.0218 31.3554 10.5945 24.9974 10.5945C18.6394 10.5945 12.662 13.0218 8.16651 17.4296C7.48715 18.0948 6.38715 18.0948 5.70911 17.4296C5.36987 17.097 5.20047 16.6609 5.20047 16.2248C5.20047 15.7891 5.37031 15.353 5.70911 15.0204C10.8611 9.96901 17.7119 7.18752 24.9974 7.18752C32.2842 7.18752 39.1346 9.96901 44.2866 15.0204Z" fill="white"/>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <svg width="23" height="30" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.497 17.9058C24.5399 16.8521 25.8181 14.9964 25.5195 11.905C25.1174 7.68022 21.5145 6.26356 16.9662 5.86011L16.9653 0H13.4413L13.4403 5.706C12.5132 5.706 11.568 5.72444 10.6271 5.74356L10.6263 0.000777774L7.10548 0.000444465L7.10482 5.85911C6.34178 5.87489 5.59243 5.88989 4.86075 5.88989V5.87256L0 5.87056L0.000657952 9.67967C0.000657952 9.67967 2.60307 9.63011 2.5602 9.67822C3.98706 9.67922 4.45296 10.5181 4.58695 11.2422L4.58805 17.9181V27.2956C4.52522 27.75 4.26086 28.4761 3.26316 28.4774C3.30855 28.5179 0.699671 28.477 0.699671 28.477L0.000657952 32.7364H4.58586C5.44024 32.7374 6.27971 32.7509 7.10329 32.7576L7.10636 38.684L10.6263 38.685L10.6253 32.8207C11.5937 32.8407 12.5285 32.8493 13.4416 32.8481L13.4406 38.685H16.9645L16.9664 32.7684C22.8899 32.424 27.0368 30.9132 27.5524 25.2812C27.968 20.7469 25.8601 18.7229 22.497 17.9058ZM10.7113 9.93678C12.6988 9.93678 18.9494 9.296 18.9503 13.4994C18.9494 17.5293 12.7008 17.0586 10.7113 17.0586V9.93678ZM10.7098 28.5063L10.7113 20.6539C13.0992 20.6532 20.589 19.9582 20.59 24.5783C20.591 29.009 13.0992 28.5046 10.7098 28.5063Z" fill="#333333"/>
                        </svg>
                    </div>
                </article>
                <h1 className='home-view__card__numbers'>1234  5678  9101  1121</h1>
                <article className='home-view__card__label'>
                    <p className='home-view__card__label__text'>CARDHOLDER NAME</p>
                    <p className='home-view__card__label__text'>VALID THRU</p>
                </article>
                <article className='home-view__card__info'>
                    <h2 className='home-view__card__label__h2'>JACOB JOHANSSON</h2>
                    <h2 className='home-view__card__label__h2'>10/10</h2>
                </article>
            </section>
            
            < CardStack />

            <button onClick={ navigateAdd }>ADD NEW CARD</button>
        </section>
    )
}

export default Home