import { Fragment } from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <Fragment>
      <div className="form-container">
        <form action="" className="form">
          <div className="form__row">
            <label className="form__label" for="name">
              Name:
            </label>
            <input className="form__input" type="text" id="name" />
          </div>
          <div className="form__row">
            <label className="form__label" for="password">
              Password:
            </label>
            <input className="form__input" type="password" id="password" />
          </div>
        </form>
      </div>
    </Fragment>
  );
}
export default HomePage;
