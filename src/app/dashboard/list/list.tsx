import React from 'react';
import { RouterProps } from 'react-router';
import { Dispatch } from 'redux';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';

import { Container, Card, CardContent, CardActionArea, Typography, TextField, Button, CardMedia, Avatar, Divider, Tooltip } from '@material-ui/core';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CopyrightIcon from '@material-ui/icons/Copyright';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';

import { TeacherState, Teacher } from '../../common/core/models';

import './list.scss';
import { getTeachers } from '../../common/core/actions';

interface TeacherStateProps {
    content: Teacher[];
}

interface TeacherDisptachProps {
    getTeachers: (term?: string) => void;
}

type TeacherListContainerProps = TeacherDisptachProps & TeacherStateProps & RouterProps;

interface TeacherListContainerState {
    teachers: Teacher[];
}

class TeacherListContainer extends React.Component<TeacherListContainerProps, TeacherListContainerState> {
    constructor(props: TeacherListContainerProps) {
        super(props);
        this.state = {
            teachers: []
        };
    }

    componentDidMount() {
        this.props.getTeachers();
    }

    render() {
        return (
            <div className="list-container-view">
                <Container>
                    <form className="form-container">
                        <TextField onKeyUp={(e: any) => this.onSearch(e)} className="form-search-box" placeholder="Search teacher" />
                        <Button variant="contained" color="primary" onClick={this.navigateToAddScreen}>
                            <AddIcon /> Add Teacher
                        </Button>
                    </form>
                    {this.props.content.map((content: Teacher, idx: number) => {
                        return (
                            <Card style={{ marginBottom: '10px' }} key={content.email + '_' + idx}>
                                <CardActionArea>
                                    <CardContent>
                                        <Avatar src={content.profileImage} alt={content.firstName + ' ' + content.lastName} />
                                        <Divider orientation="vertical" />
                                        <div className="teacher-detail-container">
                                            <div className="flex-row">
                                                <span className="pr-10"><PersonIcon /></span>
                                                <span>{content.firstName + ' ' + content.lastName}</span>
                                            </div>
                                            <div className="flex-row">
                                                <span className="pr-10"><AlternateEmailIcon /></span>
                                                <span>{content.email}</span>
                                            </div>
                                            <div className="flex-row">
                                                <span className="pr-10"><BusinessIcon /></span>
                                                <span>{content.address}</span>
                                            </div>
                                        </div>
                                        <div className="teacher-detail-container">
                                            <div className="flex-row">
                                                <span className="pr-10"><AttachMoneyIcon /></span>
                                                <span>{content.lessonPrice}</span>
                                            </div>
                                            <div className="flex-row">
                                                <span className="pr-10"><CopyrightIcon /></span>
                                                <span>{content.teachingSince}</span>
                                            </div>
                                            <div className="flex-row">
                                                <span className="pr-10"><PeopleIcon /></span>
                                                <span>{content.teachingLevel.join(', ')}</span>
                                            </div>
                                        </div>
                                        <div className="teacher-detail-container">
                                            <div className="flex-row">
                                                <span className="pr-10"><AudiotrackIcon /></span>
                                                <span>{content.instrument.join(', ')}</span>
                                            </div>
                                            <div className="flex-row">
                                                <Tooltip title={content.about}>
                                                    <span className="pr-10"><InfoIcon /></span>
                                                </Tooltip>
                                                <span>About Me</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        );
                    })}
                </Container>
            </div>
        );
    }

    private onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        this.props.getTeachers(term);
    }

    private navigateToAddScreen = () => {
        this.props.history.push('/new');
    }
}

const mapStateToProps: MapStateToProps<TeacherStateProps, TeacherListContainerProps, TeacherState> = (state: TeacherState) => ({
    content: state.teacher.content
});

const mapDispatchToProps: MapDispatchToProps<TeacherDisptachProps, TeacherListContainerProps> = (dispatch: Dispatch) => ({
    getTeachers: (term?: string) => {
        dispatch(getTeachers(term));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeacherListContainer);