import { useDispatch, useSelector } from "react-redux";
import { buyProd } from "../../STORE/Slices/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Card({ id, img, title, text }) {
  const arr = useSelector((state) => state.product[1].prods);

  const dispatch = useDispatch();
  const buy = (id) => {
    let res = arr.find((obj) => obj === id);
    res
      ? toast("Product Already Exists!", { position: "top-right" })
      : dispatch(buyProd(id));
  };

  return (
    <div
      className="card d-flex align-items-center justify-content-center"
      style={{ width: 18 + "rem" }}
    >
      <img src={img} className="card-img-top w-50" alt="..." />
      <div className="card-body d-flex align-items-center justify-content-center flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-center">{text}</p>
        <button className="btn btn-dark" onClick={() => buy(id)}>
          Buy
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}
