import {
    Form, Button, Row, Col, notification,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../../store/global/global.store';
import { RootState } from '../../atoms/interface';
import { APICreateClient, APICreateUser } from '../../services';

function FormClient() {
    const dispatch = useDispatch();
    const clientStore = useSelector((state: RootState) => state.clientStore);
    console.log('clientStore :', clientStore);
    const userStore = useSelector((state: RootState) => state.userStore);
    console.log('userStore :', userStore);

    const handleClick = async () => {
        APICreateClient(clientStore).then((result) => {
            console.log('result.data.data.insertId :', result.data.data.insertId);
            APICreateUser(result.data.data.insertId, userStore).then((sucess) => {
                notification.success({
                    message: 'User created successfully',
                });
            }).catch((err) => {
                notification.error({
                    message: `Error creating User: ${err}`,
                });
            });
        }).catch((err) => {
            notification.error({
                message: `Erro creating Client: ${err}`,
            });
        });
    };

    const prev = () => {
        dispatch(decrement());
    };

    return (
        <Row justify="center" style={{ display: 'flex', margin: '25px' }}>
            <Col span={12}>
                <div style={{ margin: '10px 0' }}>Client</div>
                <div>
                    CNPJ:
                    {clientStore.cnpj}
                </div>
                <div>
                    Fantasy Name:
                    {clientStore.fantasy_name}
                </div>
                <div>
                    Social Reason:
                    {clientStore.social_reason}
                </div>
                <div>
                    CEP:
                    {clientStore.cep}
                </div>
                <div>
                    Address:
                    {clientStore.address}
                </div>
                <div>
                    District:
                    {clientStore.district}
                </div>
                <div>
                    City:
                    {clientStore.city}
                </div>
                <div>
                    UF:
                    {clientStore.uf}
                </div>
            </Col>

            <Col span={12}>
                <div style={{ margin: '10px 0' }}>User</div>
                <div>
                    First Name:
                    {userStore.first_name}
                </div>
                <div>
                    Last Name:
                    {userStore.last_name}
                </div>
                <div>
                    Phone:
                    {userStore.phone}
                </div>
                <div>
                    Email:
                    {userStore.email}
                </div>
            </Col>

            <Form.Item wrapperCol={{ span: 24 }} style={{ margin: '25px' }}>
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Anterior
                </Button>
                <Button onClick={handleClick}>
                    Salvar
                </Button>
            </Form.Item>
        </Row>
    );
}

export default FormClient;
