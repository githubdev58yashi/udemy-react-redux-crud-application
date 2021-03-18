import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

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

class App extends Component {
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>value: {this.state.count}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
      )
  }
}

// mapStateToProps
//  Storeが持つ状態stateをどのようにpropsに混ぜ込むか
// mapDispatchToProps
//  Reducerにアクションを通知する関数dispatchをどのようにpropsに混ぜ込むか

const mapStateToProps = state => ({ value: state.count.value });

const mapDispatchToProps = ({ increment, decrement});

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
