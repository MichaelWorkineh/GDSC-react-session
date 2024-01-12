import "./ItemCard.css"
export default function ItemCard({item}){
    return ( 
        <div className="itemCard">
            <img src = {item.image.locaton} alt={item.image.alt} className="itemImage" id="imgItemCard"/>
            <div className="discription">
                <p className="item price">$ {item.price} USD</p>
                <p className="item name">{item.name}</p>
            </div>
        </div>
    )
}
