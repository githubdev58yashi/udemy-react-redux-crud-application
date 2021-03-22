import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { getEvent, deleteEvent, putEvent } from '../actions';

class EventsShow extends Component {
  constructor(props) {
    console.log("eventShow");

    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
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
    await this.props.putEvent(values);
    console.log(this.props);
    this.props.history.push('/');
  }

  async onDeleteClick() {
    // console.log(this.props.match);
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
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
        <RaisedButton 
          label="Delete"
          style={style}
          onClick={this.onDeleteClick}
        ></RaisedButton>
      </form>
    );
  }
}

// mapStateToProps
//  Storeが持つ状態stateをどのようにpropsに混ぜ込むか
// mapDispatchToProps
//  Reducerにアクションを通知する関数dispatchをどのようにpropsに混ぜ込むか

//  const mapDispatchToProps = ({ getEvent });

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

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event }
}

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent });

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true})(EventsShow)
  );

// export default App;
