import { useDispatch, useSelector } from "react-redux";
import { setPaymentMethod } from "../../../reducers/cartSlice";

export const PayMethodSelector = () => {
  const { payment_method: userPayMethod } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const checkedColor = (val) => {
    return {
      backgroundColor: val === userPayMethod ? "var(--logo)" : "",
      border: val === userPayMethod ? "2px solid transparent" : "",
      color: val === userPayMethod ? "white" : "" ,
    };
  };
  return (
    <div>
      <form>
        <div className="form-item-heading">Select Payment Method</div>
        <div className="form-pay-options">
          <div
            className="pay-input-container"
            key="Gpay"
            style={checkedColor("Gpay")}
          >
            <input
              type="radio"
              id={1}
              name="Select Payment"
              value="GPay"
              onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
              checked={"Gpay" === userPayMethod}
            />

            <label className="form-pay-detail" htmlFor={1}>
              Gpay
            </label>
          </div>

          <div
            className="pay-input-container"
            key="Paytm"
            style={checkedColor("Paytm")}
          >
            <input
              type="radio"
              id={2}
              name="Select Payment"
              value="Paytm"
              onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
              checked={"Paytm" === userPayMethod}
            />

            <label className="form-pay-detail" htmlFor={2}>
              Paytm
            </label>
          </div>

          <div
            className="pay-input-container"
            key="Credit Card"
            style={checkedColor("Credit Card")}
          >
            <input
              type="radio"
              id={3}
              name="Select Payment"
              value="Credit Card"
              onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
              checked={"Credit Card" === userPayMethod}
            />

            <label className="form-pay-detail" htmlFor={3}>
              Credit Card
            </label>
          </div>

          <div
            className="pay-input-container"
            key="Debit Card"
            style={checkedColor("Debit Card")}
          >
            <input
              type="radio"
              id={4}
              name="Select Payment"
              value="Debit Card"
              onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
              checked={"Debit Card" === userPayMethod}
            />

            <label className="form-pay-detail" htmlFor={4}>
              Debit Card
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
