import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { TextField, Input, Select, InputLabel, MenuItem, Checkbox, ListItemText, Button } from '@material-ui/core';

import './BasicTeacherForm.scss';

class BasicTeacherForm extends React.PureComponent<InjectedFormProps> {
    render() {
        return (
            <form className="basic-form-container" onSubmit={this.props.handleSubmit}>
                <Field name="firstName" component={(props: any) => <TextField value={props.value} label="First Name" {...props} />} />
                <Field name="lastName" component={(props: any) => <TextField label="Last Name" {...props} />} />
                <Field name="email" component={(props: any) => <TextField style={{ width: '50%' }} label="Email" {...props} />} />
                <Field name="profileImage" component={(props: any) => <TextField style={{ width: '50%' }} label="Profile Image" {...props} />} />
                <Field name="instruments" component={(props: any) => {
                    return (
                        <div
                            style={{ width: '100%' }}>
                            <InputLabel id="demo-mutiple-checkbox-label">&nbsp;</InputLabel>
                            <Select
                                style={{ width: '99%' }}
                                labelId="demo-mutiple-checkbox-label"
                                id="demo-mutiple-checkbox"
                                autoWidth={true}
                                multiple
                                value={[]}
                                onChange={props.onChange}
                                input={<Input />}
                                renderValue={selected => (selected as string[]).join(', ')}
                            >
                                <MenuItem value={'guitar'}>
                                    <Checkbox checked={false} />
                                    <ListItemText primary={'Guitar'} />
                                </MenuItem>
                                <MenuItem value={'piano'}>
                                    <Checkbox checked={false} />
                                    <ListItemText primary={'Piano'} />
                                </MenuItem>
                            </Select>
                        </div>
                    );
                }} />
                <div style={{ marginTop: '10px' }}>
                    <Button onClick={this.props.reset} variant="contained" style={{ marginRight: '10px' }}>Reset</Button>
                    <Button type="submit" variant="contained" color="primary">Next</Button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'basicForm'
})(BasicTeacherForm);