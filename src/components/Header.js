import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Header extends React.Component {
  constructor() {
    super();
  }


  render() {

    return (
      <div className="container">
        <div className="navbar-brand">
          {/* <Link to="/"> */}
          {/* <figure className="image is-128x128"> */}
          {/* <img className="is-rounded"src="https://scontent.ftpe1-2.fna.fbcdn.net/v/t31.0-8/886258_1655718751383540_4217715958903882440_o.jpg?_nc_cat=103&_nc_ht=scontent.ftpe1-2.fna&oh=7e6ddcd1e154116a4efbdefa28672d0d&oe=5CCC90D1" alt="Logo"/> */}
          {/* </figure> */}
          {/* </Link> */}
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item">
              <a className="button is-white is-outlined" href="#">
                {/* <span className="icon">
                  <i className="fa fa-home"></i>
                </span> */}
                <span>Home</span>
              </a>
            </span>
            <span className="navbar-item">
              <a className="button is-white is-outlined" href="https://www.google.com/">
                {/* <span className="icon">
                  <i className="fa fa-superpowers"></i>
                </span> */}
                <span>Facebook</span>
              </a>
            </span>
            <span className="navbar-item">
              <a className="button is-white is-outlined" href="#">
                {/* <span className="icon">
                  <i className="fa fa-book"></i>
                </span> */}
                <span className="has-text-centered">Contact</span>
              </a>
            </span>
            <span className="navbar-item">
              {/* <a className="button is-white is-outlined" href="">
                  <span className="icon">
                  <i className="fa fa-github"></i>
                  </span>
                  <span>View Source</span>
                </a> */}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
