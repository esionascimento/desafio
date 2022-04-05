import { Layout } from 'antd';
import ListUser from './components/ListAllUser/ListUser'
import CreateUser from './components/CreateUser/CreateUser';
const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <Header  />
        {/* <ListUser /> */}
        <CreateUser />
      </Content>
    </Layout>
  );
}

export default App;
