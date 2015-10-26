import 'whatwg-fetch';
import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import {Button, Modal} from 'react-bootstrap';

console.log('ReactDOM =', ReactDOM);


/*
fetch('/addressbook').
  then(res => {
    return res.json(); // a promise
  }).
  then(obj => {
    console.log('obj =', obj);
  }).
  catch(e => {
    console.error('parsing failed', e);
  });
*/

const Body = () => (
  <section>
    <div>
      <div className="heading">Calendar</div>
      <div className="content">
        <ul>
          <li>Social Committee Meeting</li>
          <li>HOA Party</li>
        </ul>
      </div>
    </div>
    <div>
      <div className="heading">News</div>
      <div className="content">
        <ul>
          <li>Committee Meeting</li>
          <li>HOA Board Member Opening</li>
        </ul>
      </div>
    </div>
    <div>
      <div className="heading">Upcoming Events</div>
      <div className="content">
        <ul>
          <li>Annual Dues $150</li>
        </ul>
      </div>
    </div>
    <div>
      <div className="heading">Survey</div>
      <div className="content">
        <p>
          Drainage Problem - $8K to fix<br/>
          Our options are:
        </p>
        <ol>
          <li>Fix it ourselves.</li>
          <li>Keep fighting with the city.</li>
          <li>Do nothing for now.</li>
        </ol>
        <button>Vote</button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
  </footer>
);

const Header = () => (
  <header>
    <div>
      <img src="images/monument.jpg" alt="subdivision monument"/>
      <Login/>
    </div>
    <div>
      <div className="title">
        Welcome<br/>
        to<br/>
        Trails of<br/>
        Jacob's Summit
      </div>
      <div>
        Please feel free to
        <a href="mailto:r.mark.volkmann@gmail.com">
          contact us with your comments and suggestions
        </a>.
      </div>
    </div>
  </header>
);

const Home = () => (
  <div>
    <Header/>
    <Nav/>
    <Body/>
    <Footer/>
  </div>
);

// Defining a stateless component this way
// for components that have references to "this"
// avoids ESLint no-invalid-this warning.
//function Login() {
const Login = React.createClass({

  getInitialState() {
    return {showModal: false};
  },

  close() {
    this.setState({showModal: false});
  },

  open() {
    console.log('open entered');
    this.setState({showModal: true});
  },

  render() {
    console.log('render entered');
    return (
      <div>
        <Button bsStyle="default" bsSize="small"
          onClick={this.open}>
          Login...
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Modal body</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

const Nav = () => (
  <nav>
    <div className="heading">Welcome</div>
    <a href="board-members.html">Board Members</a>
    <a href="not-implemented.html">Committees</a>

    <div className="heading">Documents</div>
    <a href="not-implemented.html">Covenants & Restrictions</a>
    <a href="not-implemented.html">Newsletters</a>

    <div className="heading">Members</div>
    <a href="not-implemented.html">Home Owner Directory</a>

    <div className="heading">Miscellaneous</div>
    <a href="not-implemented.html">Find Handyman</a>
    <a href="not-implemented.html">Find Lawncare</a>
    <a href="not-implemented.html">Find Pet Care</a>
    <a href="not-implemented.html">Find Sitter</a>
    <a href="not-implemented.html">Find Snowblowing</a>
    <a href="not-implemented.html">Favorite Recipes</a>
  </nav>
);

ReactDOM.render(
  <Home></Home>,
  document.getElementById('content'));
