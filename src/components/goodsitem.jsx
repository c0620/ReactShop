function  GoodsItem(props) {
    //const {id, name, description, price, full_background} = props;

    const id = props.offerId;
    const name = props.displayName;
    const description = props.displayType;
    const price = props.price.finalPrice;
    const full_background = props.displayAssets[0].full_background;
    const addToBasket = props.addToBasket;

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name} />
                <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="bnt"
                onClick={() =>
                addToBasket({
                    id, name, price,
                }
                )}
                >
                    Купить</button>
                <span className="right">{price}</span>
            </div>
        </div>
    );
}

export {GoodsItem};