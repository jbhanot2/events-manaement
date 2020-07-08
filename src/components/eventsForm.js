import React from 'react';
import { connect } from 'react-redux'
import * as action from '../redux/action';
import { Field, reduxForm, reset} from 'redux-form';
import * as validate from './validation';

let self;

// Input Validation
const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
      <div className="row">
          <div className="input-group">
            <input required maxLength={"60"} {...input} type={type} autoComplete="ae1dsde" />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="label">{label}</label>
            <div className="error-msg">{touched && error ? error : "" }</div>
        </div>
        </div>
)

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        self = this;
    }
    
    render() {
    const { handleSubmit } = this.props;
    return(
        <div>
            <form onSubmit={handleSubmit(submit)} autoComplete="off">
                <Field  name="event_name"                         
                        type="text"
                        component={renderField}
                        validate={[validate.required, validate.name]}
                        label="Event Name"
                    />
                <Field  name="description"                         
                        type="text"
                        component={renderField}
                        validate={[validate.required, validate.name]}
                        label="Description"
                    />
                <Field  name="venue"                         
                        type="text"
                        component={renderField}
                        validate={[validate.required, validate.name]}
                        label="Venue"
                    />
                <Field  name="price"                         
                        type="text"
                        component={renderField}
                        validate={[validate.required, validate.number]}
                        label="Price"
                    />
                <Field  name="discount"                         
                        type="text"
                        component={renderField}
                        validate={[validate.required, validate.number]}
                        label="Discount"
                    />
                    <div className="row btn-wrapper">
                        <button className={"btn-name btn btn-primary col-md-4 " + (!this.props.valid || this.props.pristine || this.props.submitting ? "address-disabled-btn": "")}
                            type="submit" disabled={!this.props.valid || this.props.pristine || this.props.submitting}>
                            Submit
                        </button>
                        <button className={"btn-name btn btn-primary col-md-4"} onClick={() => {self.props.reset()}}>
                            Reset
                        </button>

                    </div>
            </form>
        </div>
    )}
}
function submit(values) {
    self.props.reset();
    self.props.getData({payload: values});
}

EventForm = reduxForm({
    form: 'eventManagement',
    touchOnChange: true,
  })(EventForm)
  
const mapStateToProps = (state) => ({
    data: state
})

const mapDispatchToProps = {
    getData: action.formAction
}
export default connect(mapStateToProps, mapDispatchToProps)(EventForm);