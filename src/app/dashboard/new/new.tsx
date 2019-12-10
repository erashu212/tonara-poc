import React from 'react';
import { RouterProps } from 'react-router';

import './new.scss';
import { Container, Paper, Tabs, Tab } from '@material-ui/core';
import BasicTeacherForm from '../../common/components/BasicTeacherForm';
import AdvanceTeacherForm from '../../common/components/AdvanceTeacherForm';

import HomeIcon from '@material-ui/icons/Home';

interface NewTeacherContainerProps extends RouterProps {

}

interface NewTeacherContainerState {
    activeTab: number;
}

export class NewTeacherContainer extends React.Component<NewTeacherContainerProps, NewTeacherContainerState> {
    constructor(props: NewTeacherContainerProps) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    render() {
        return (
            <div className="add-container-view">
                <Container>
                    <HomeIcon fontSize="large" onClick={this.navigateToList} />
                    <Paper square>
                        <Tabs
                            value={this.state.activeTab}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.handleTabChange}
                            aria-label="disabled tabs example"
                        >
                            <Tab label="Basic Details" />
                            <Tab label="Advance Details"/>
                        </Tabs>
                    </Paper>
                    {this.state.activeTab === 0
                        ? <BasicTeacherForm onSubmit={() => this.setState({ activeTab: 1 })} />
                        : <AdvanceTeacherForm onSubmit={() => this.setState({ activeTab: 1 })} />
                    }
                </Container>
            </div>
        );
    }

    private handleTabChange = (event: React.ChangeEvent<any>, value: any) => {
        this.setState({activeTab: value});
    }

    private navigateToList = () => {
        this.props.history.push('/');
    }
}