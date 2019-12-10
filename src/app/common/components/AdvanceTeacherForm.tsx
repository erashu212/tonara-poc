import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { TextField, Button, TextareaAutosize } from '@material-ui/core';

import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

import './AdvanceTeacherForm.scss';

class AdvanceTeacherForm extends React.PureComponent<InjectedFormProps> {
    render() {
        return (
            <>
                <form className="advance-form-container" onSubmit={this.props.handleSubmit}>
                    <Field name="about" component={(props: any) => <TextareaAutosize style={{ resize: 'none', marginBottom: '10px', height: '80px', width: '100%', marginTop: '10px' }} rowsMax={4} rows={2} value={props.value} label="About" {...props} />} />
                    <Field name="teachingSince" component={(props: any) => <TextField label="Teaching Since" {...props} />} />
                    <Field name="teachingLevel" component={(props: any) => {
                        return (
                            <ToggleButtonGroup
                                value={'Beginner'}
                                exclusive
                                aria-label="Teaching Level"
                            >
                                <ToggleButton value="Beginner">
                                    Beginner
                            </ToggleButton>
                                <ToggleButton value="Intermediate" title="Intermediate">
                                    Intermediate
                            </ToggleButton>
                                <ToggleButton value="Advanced" title="Advanced">
                                    Advanced
                            </ToggleButton>
                            </ToggleButtonGroup>
                        );
                    }} />
                    <Field name="address" component={(props: any) => <TextField style={{ width: '100%' }} label="Address" {...props} />} />
                    <Field name="lessonPrice" component={(props: any) => <TextField style={{ width: '50%' }} label="Price" {...props} />} />

                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                        <Button onClick={this.props.reset} variant="contained" style={{ marginRight: '10px' }}>Back</Button>
                        <Button type="submit" variant="contained" color="primary">Save</Button>
                    </div>
                </form>
            </>
        );
    }
}

export default reduxForm({
    form: 'advanceForm'
})(AdvanceTeacherForm);