import React from 'react'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';


const UserForms = (props) => {

    // 入力一覧
    const [input, setInput] = useState({
        user_name: '',
        task_name: '',
        n_team: '',
        date: '',
        start_time: '',
        end_time: '',
    });

    // 親コンポーネントも更新
    props.setSchedule(input);

    // マージン設定
    const margin = "mb-2";

    // 確認用
    // useEffect(() => {
    //     console.log(input);
    // }, [input])


    return (
        <Container>
            <Row className="justify-content-sm-center">
                <Col sm="auto" md={6}>
                    <Form>
                        <Form.Group className={margin} >
                            <Form.Label>ユーザ名</Form.Label>
                            <Form.Control type="input" value={input.user_name} onChange={(e) => { setInput((prevState) => ({ ...prevState, "user_name": e.target.value })) }} placeholder="スケスケ太郎" />
                        </Form.Group>

                        <Form.Group className={margin}>
                            <Form.Label>タスク名</Form.Label>
                            <Form.Control type="input" value={input.task_name} onChange={(e) => { setInput((prevState) => ({ ...prevState, "task_name": e.target.value })) }} placeholder="チーム札幌" />
                        </Form.Group>

                        <Form.Group className={margin}>
                            <Form.Label>チームの人数</Form.Label>
                            <Form.Control type="number" value={input.n_team} onChange={(e) => { setInput((prevState) => ({ ...prevState, "n_team": e.target.value })) }} placeholder="5" />
                        </Form.Group>
                        <Form.Group className={margin}>
                            <Form.Label>日付</Form.Label>
                            <Form.Control type="date" value={input.date} onChange={(e) => { setInput((prevState) => ({ ...prevState, "date": e.target.value })) }} />
                        </Form.Group>

                        <Form.Group className={margin}>
                            <Form.Label>開始時刻</Form.Label>
                            <Form.Control type="time" value={input.start_time} onChange={(e) => { setInput((prevState) => ({ ...prevState, "start_time": e.target.value })) }} />
                        </Form.Group>

                        <Form.Group className={margin}>
                            <Form.Label>終了時刻</Form.Label>
                            <Form.Control type="time" value={input.end_time} onChange={(e) => { setInput((prevState) => ({ ...prevState, "end_time": e.target.value })) }} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default UserForms