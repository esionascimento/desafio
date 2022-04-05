import { Layout } from 'antd';
import ListUser from './components/ListUser'
const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <Header  />
        <ListUser />
      </Content>
    </Layout>
  );
}

export default App;
