/* eslint-disable react/jsx-no-bind */
import {
    Form, Input, Button, Row, Col, notification,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SetStateAction, useState } from 'react';
import { setClient } from '../../store/global/client.store';
import { increment } from '../../store/global/global.store';
import { RootState } from '../../atoms/interface';
import MaskedInput from './maskInput';

function FormClient() {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.clientStore);
    const [values, setValues] = useState('');

    const verifyCNPJ = (cnpj: string, cep: string) => {
        if (cnpj.length !== 14) {
            notification.error({
                message: 'CNPJ mandatory size 13',
            });
            return false;
        }
        if (cep.length !== 8) {
            notification.error({
                message: 'CEP mandatory size 8',
            });
            return false;
        }
        return true;
    };

    const onFinish = (value: any) => {
        const {
            cnpj, fantasy_name, social_reason, cep, address, number, complement, district, city, uf,
        } = value;
        const resultcnpj = verifyCNPJ(cnpj, cep);
        if (resultcnpj) {
            dispatch(setClient({
                cnpj,
                fantasy_name,
                social_reason,
                cep: Number(cep),
                address,
                number,
                complement,
                district,
                city,
                uf,
            }));
            dispatch(increment());
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    function handleChange(event: { target: { value: SetStateAction<string>; }; }) {
        console.log('event.target.value :', event.target.value);
        setValues(event.target.value);
    }

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
                        label="CNPJ"
                        name="cnpj"
                        rules={[{ required: true, message: 'Por favor, insira o seu CNPJ!' }]}
                    >
                        <MaskedInput
                            name="cnpj"
                            mask="99.999.999/9999-99"
                            value={values}
                            onChange={handleChange}
                        />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="Nome Fantasia"
                        name="fantasy_name"
                        rules={[{ required: true, message: 'Por favor, insira o seu Nome Fantasia!' }]}
                    >
                        <Input placeholder={data.fantasy_name} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="Razão Social"
                        name="social_reason"
                        rules={[{ required: true, message: 'Por favor, insira o seu Razão Social!' }]}
                    >
                        <Input placeholder={data.social_reason} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="CEP"
                        name="cep"
                        rules={[{ required: true, message: 'Por favor, insira o seu CEP!' }]}
                    >
                        <Input placeholder={String(data.cep)} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="Endereço"
                        name="address"
                        rules={[{ required: true, message: 'Por favor, insira o seu Endereço!' }]}
                    >
                        <Input placeholder={data.address} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="Número"
                        name="number"
                        rules={[{ required: true, message: 'Por favor, insira o seu Número!' }]}
                    >
                        <Input placeholder={data.number} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="Complemento"
                        name="complement"
                        rules={[{ required: true, message: 'Por favor, insira o seu Complemento!' }]}
                    >
                        <Input placeholder={data.complement} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="Bairro"
                        name="district"
                        rules={[{ required: true, message: 'Por favor, insira o seu Bairro!' }]}
                    >
                        <Input placeholder={data.district} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="Cidade"
                        name="city"
                        rules={[{ required: true, message: 'Por favor, insira o seu Cidade!' }]}
                    >
                        <Input placeholder={data.city} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        style={{ margin: '5px 10px' }}
                        label="UF"
                        name="uf"
                        rules={[{ required: true, message: 'Por favor, insira o seu UF!' }]}
                    >
                        <Input placeholder={data.uf} />
                    </Form.Item>
                </Col>
                <Form.Item wrapperCol={{ span: 24 }} style={{ margin: '25px' }}>
                    <Button type="primary" htmlType="submit">
                        Proximo
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
}

export default FormClient;
