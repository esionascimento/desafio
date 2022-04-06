import React from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import ListUser from './components/ListAllUser/ListUser';
import CreateUser from './components/CreateUser/CreateUser';
import HeaderHome from './components/Header';
import { RootState } from './atoms/interface';

const { Content } = Layout;

function App() {
    const key = useSelector((state: RootState) => state.globalStore.keyCreate);
    return (
        <Layout>
            <Content>
                <HeaderHome />
                {key
                    ? <ListUser />
                    : <CreateUser />}
            </Content>
        </Layout>
    );
}

export default App;
