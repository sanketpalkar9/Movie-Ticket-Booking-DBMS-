import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { showLoginModal } from "../../../reducers/authSlice";
import { resetCart } from "../../../reducers/cartSlice";

export const HeroSection = () => {
  const navigate = useNavigate();
  const { isAuthenticated, signedPerson } = useSelector(
    (store) => store.authentication
  );
  const dispatch = useDispatch();

  return (
    <section className="section-hero">
      <div className="container hero">
        <div className="hero-text">
          {isAuthenticated && (
            <p className="heading-primary">Hello {signedPerson.first_name},</p>
          )}
          <h1 className="heading-primary">
            Welcome to Cinepass
          </h1>

          <p className="hero-description">
            Immerse yourself in the captivating allure of cinema as you step
            into our exquisite destination, designed to elevate your
            movie-watching experience to new heights.
          </p>
          <div className="hero-btn-container">
            <button
              onClick={() => {
                dispatch(resetCart());
                isAuthenticated && signedPerson.person_type === "Customer"
                  ? navigate("/purchase")
                  : dispatch(showLoginModal());
              }}
              className="btn btn-full"
            >
              Buy a ticket
            </button>
            <HashLink to="#nowShowing" className="btn btn-outline">
              Browse &darr;
            </HashLink>
          </div>
        </div>

        <div className="hero-img-box">
          <img
            className="hero-img"
            src="/Images/hero-img.webp"
            alt="Hero Image"
          />
        </div>
        
      </div>
    </section>
  );
};
