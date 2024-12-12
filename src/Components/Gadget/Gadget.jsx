import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
    console.log(gadget);

    const {product_id, product_title, product_image,price } = gadget;
    return (
        <div >
            
            <div className="card bg-base-100  shadow-xl border">
                <figure className="px-5 pt-5">
                    <img 
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl border" />
                </figure>
                <div className="card-body p-3 pl-12 space-y-2   ">
                    <h2 className="card-title font-bold ">{product_title}</h2>
                    <p className=" font-semibold text-[rgba(9,8,15,0.6)] ">Price: {price} </p>
                    <div className="card-actions">
                    <Link to={`/gadgets/${product_id}`}>
                        <button className="btn btn-outline btn-primary rounded-full">View Details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;