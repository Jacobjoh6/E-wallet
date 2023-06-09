import { useSelector } from "react-redux"
import Card from "../Card/Card"
import './CardStack.css'

function CardStack() {
    const cards = useSelector((state)=> {return state.cards})

    const cardComp = cards.map((card) => {
        return <Card fullCard ={ card } key={ card.cardnr } />
    })
    
    return(
        <section className="CardStack">
            {cardComp}
        </section>
    )
    
}

export default CardStack
