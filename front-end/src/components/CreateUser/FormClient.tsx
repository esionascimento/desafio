import { Form, Input, Button, Checkbox } from 'antd';

const FormClient = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="CNPJ"
        name="cnpj"
        rules={[{ required: true, message: 'Por favor, insira o seu CNPJ!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Nome Fantasia"
        name="fantasy_name"
        rules={[{ required: true, message: 'Por favor, insira o seu Nome Fantasia!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Razão Social"
        name="social_reason"
        rules={[{ required: true, message: 'Por favor, insira o seu Razão Social!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="CEP"
        name="cep"
        rules={[{ required: true, message: 'Por favor, insira o seu CEP!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Endereço"
        name="address"
        rules={[{ required: true, message: 'Por favor, insira o seu Endereço!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Número"
        name="number"
        rules={[{ required: true, message: 'Por favor, insira o seu Número!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Complemento"
        name="complement"
        rules={[{ required: true, message: 'Por favor, insira o seu Complemento!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Bairro"
        name="district"
        rules={[{ required: true, message: 'Por favor, insira o seu Bairro!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Cidade"
        name="city"
        rules={[{ required: true, message: 'Por favor, insira o seu Cidade!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="UF"
        name="uf"
        rules={[{ required: true, message: 'Por favor, insira o seu UF!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormClient;
