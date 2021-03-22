import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { postEvent } from '../actions';

class EventsNew extends Component {
  constructor(props) {
    console.log("eventNew");
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderFiled(Field) {
    const { input, label, type, meta: { touched, error}} = Field;

    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    );
  }

  async onSubmit(values) {

    await this.props.postEvent(values);
    this.props.history.push('/');
  }

  

  render() {
    const {handleSubmit, pristine, submitting, invalid} = this.props;
    const style = { margin: 12}

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderFiled} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderFiled} /></div>
        <RaisedButton 
          label="Submit"
          type="submit"
          style={style}
          disabled={pristine || submitting || invalid}
        ></RaisedButton>
        <RaisedButton 
          label="Cancel"
          style={style}
          containerElement={<Link to="/"></Link>}
        ></RaisedButton>

      </form>
    );
  }
}

// mapStateToProps
//  Storeが持つ状態stateをどのようにpropsに混ぜ込むか
// mapDispatchToProps
//  Reducerにアクションを通知する関数dispatchをどのようにpropsに混ぜ込むか

 const mapDispatchToProps = ({ postEvent });

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const validate = values => {
  const errors = {};

  if (!values.title) errors.title = "Enter a Title, Please."
  if (!values.body) errors.body = "Enter a Body, Please."

  return errors;
}

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm'})(EventsNew)
  );

// export default App;
