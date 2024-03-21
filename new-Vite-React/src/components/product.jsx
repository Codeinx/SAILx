function Product(props) {
    return (
        <div id="card">
            <img src={props.img} />
            <h4>{props.name}</h4>
            <p>{props.price}</p>
        </div>
    )
}

export default Product;