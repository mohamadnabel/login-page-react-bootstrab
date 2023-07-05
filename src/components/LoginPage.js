import React from "react";
import "../components/Loginstyleysheet.css";
const arrey = ["mohammad", "nabeel"];
function LoginBUT(Event) {
  if ((Event.target.value = arrey[0])) {
    alert("courrect");
  } else {
    alert("not courrect");
  }
}
function Onvloisl_myd(Event) {
  console.log(Event.target.value);
}
function Loginpage() {
  return (
    <div className="main-div-login">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            web app{" "}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">
                  {" "}
                  Countact With us at Email : mohamad.nabeel@outlook.com
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="main-login">
        <main class="form-signin w-100 m-auto">
          <form>
            {/* <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
              <input
                onChange={LoginBUT}
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                onChange={Onvloisl_myd}
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
              <input
                class="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button
              onClick={LoginBUT}
              class="btn btn-primary w-100 py-2"
              type="submit"
            >
              Sign in
            </button>
            <p class="mt-5 mb-3 text-body-secondary">© 2017 - 2023</p>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Loginpage;
