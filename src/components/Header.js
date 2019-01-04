import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <nav className="navbar is-fixed-top has-text-black">
        <div className="navbar-menu is-active">
          <div className="navbar-start header">
            <Link id="home"className="navbar-item" to='/'>好好</Link>
            {/* <Link className="navbar-item bar" to='/bags'> COLLECTION</Link> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
