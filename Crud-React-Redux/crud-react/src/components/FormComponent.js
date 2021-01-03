import React, { Component } from 'react'
import {  reduxForm , Field } from 'redux-form'
import { FormGroup, Col, Label, Input, Row, Button, Form } from "reactstrap";
import { connect } from 'react-redux';
import UserValidation from '../validations/UserValidation';

const mapStateToProps = (state) => {
    return {
        initialValues: {
            name: state.person.getUserDetail.name,
            lastname: state.person.getUserDetail.lastname,
            age: state.person.getUserDetail.age,
            ci: state.person.getUserDetail.ci
        }
    };
};


const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning },
}) => (
        <Row>
            <Col md="12">
                <Label htmlFor="{input}" className="col-form-label">
                    {label}
                </Label>
            </Col>
            <Col md="12">
                <Input
                    {...input}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                ></Input>
                {touched &&
                    ((error && <p style={{ color: "red" }}>{error}</p>) ||
                        (warning && <p style={{ color: "brown" }}>{warning}</p>))}
            </Col>
        </Row>
    );


class FormComponent extends Component {
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="name"
                                component={renderField}
                                label="Nombre :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="lastname"
                                component={renderField}
                                label="Apellido :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="number"
                                name="age"
                                component={renderField}
                                label="Edad :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="number"
                                name="ci"
                                component={renderField}
                                label="C.I. :"
                            />
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="12">
                        <FormGroup>
                            <Button
                                color="dark"
                                type="submit"
                                disabled={this.props.submitting}
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

FormComponent = reduxForm({
    // especificamos de que es el form
    form: 'formCreateUser',
    validate: UserValidation,
    enableReinitialize: true,
})(FormComponent)

export default connect(mapStateToProps,null)(FormComponent)

