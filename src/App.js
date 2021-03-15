import React from 'react';
import PropTypes from  'prop-types';

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

const App = () => {
  const profiles = [
    { name: "Taro",age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName", age: 3 }
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return (
    <div>
      Hi, i am {props.name}! and {props.age} years old!
    </div>
  )
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
