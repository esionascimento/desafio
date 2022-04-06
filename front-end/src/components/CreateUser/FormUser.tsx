import {
    Form, Input, Button, Row, Col, notification,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/global/global.store';
import { setUser } from '../../store/global/user.store';
import { RootState } from '../../atoms/interface';

function FormUser() {
    const dispatch = useDispatch();
    const index = useSelector((state: RootState) => state.globalStore.index);

    const verifyPass = ({ confirmed_password, password }: any) => {
        if (confirmed_password === password) {
            return true;
        }
        return false;
    };
    const onFinish = (values: any) => {
        const resultPass = verifyPass(values);
        if (resultPass) {
            const {
                email, first_name, last_name, password, phone,
            } = values;
            dispatch(setUser({
                email, first_name, last_name, password, phone,
            }));
            dispatch(increment());
        } else {
            notification.error({
                message: 'Passwords do not match',
            });
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const prev = () => {
        dispatch(decrement());
    };

    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
        >
            <Row justify="center" style={{ display: 'flex' }}>
                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="Primeiro Nome"
                        name="first_name"
                        rules={[{ required: true, message: 'Please input your Primeiro Nome!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="Último Nome"
                        name="last_name"
                        rules={[{ required: true, message: 'Please input your Último Nome!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="Celular"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your Celular!' }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="E-mail"
                        name="email"
                        rules={[{ required: true, message: 'Please input your E-mail!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="Confirmed Password"
                        name="confirmed_password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ margin: '25px' }}>
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Anterior
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}

export default FormUser;
