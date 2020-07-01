import {useSession} from '@/entities';
import {Button, Col, Row, Steps, Typography} from 'antd';
import React from 'react';

const {Title} = Typography;

import {remote} from 'electron';

const {Step} = Steps;


export default () =>
{
    const [session, {login, logout}] = useSession();

    return <>
        <Title>My app</Title>

        <Row gutter={[10, 10]}>
            <Col span={8}>Load a file </Col>
            <Col span={8}>Analysis</Col>
            <Col span={8}>Result</Col>
        </Row>

        <Row gutter={[10, 10]}>
            <Col span={8}>
                <Button type={'primary'} onClick={() =>
                {
                    const {dialog} = remote;
                    const selectedFiles = dialog.showOpenDialogSync({
                        properties: ['openFile'],
                        title: 'Open file'
                    });
                    if (Boolean(selectedFiles) && selectedFiles.length > 0)
                    {
                        //ok
                    }
                }}>Select file</Button>
            </Col>
            <Col span={8}>
                <Steps direction="vertical" current={1}>
                    <Step title="Finished" description="This is a description."/>
                    <Step title="In Progress" description="This is a description."/>
                    <Step title="Waiting" description="This is a description."/>
                </Steps></Col>
            <Col span={8}>
                Result
            </Col>
        </Row>
    </>;
};
