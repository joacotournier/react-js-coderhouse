function Item ({title, price, img}){
    return (
    <div>
        <span>{title}</span>
        <div>
            <img src={img} alt={title}></img>
        </div>
        <p>{price}</p>
    </div>
    );
}
export default Item;