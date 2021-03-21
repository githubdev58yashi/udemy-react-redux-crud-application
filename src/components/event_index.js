import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { readEvents } from '../actions';

// class App extends Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am Changed")}} />
//       </React.Fragment>
//     )
//   }
// }

// const App = () => (
//   <Counter>
    
//   </Counter>
// )

class EventsIndex extends Component {
  constructor(props) {
    super(props);
    console.log("eventIndex");
  }
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {this.renderEvents()}
            </tbody>
        </table>

        <Link to="/event/new">new Event</Link>
      </React.Fragment>
    );
  }
}

// mapStateToProps
//  Storeが持つ状態stateをどのようにpropsに混ぜ込むか
// mapDispatchToProps
//  Reducerにアクションを通知する関数dispatchをどのようにpropsに混ぜ込むか

const mapStateToProps = state => ({ events: state.events });

const mapDispatchToProps = ({ readEvents });

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);

// export default App;
