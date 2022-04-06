import { SetStateAction, useState } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import { setHeader, setKeyCreate } from '../../store/global/global.store';

interface RootState {
  globalStore: {
    headerCreate: string
  }
}

function NavigationTop() {
    const dispatch = useDispatch();
    const headerCreate = useSelector((state: RootState) => state.globalStore.headerCreate);
    const [current, setCurrent] = useState(headerCreate);

    const handleClick = (e: { key: SetStateAction<string>; }) => {
        setCurrent(e.key);
        dispatch(setHeader(e.key));
        if (e.key === 'create') {
            dispatch(setKeyCreate(false));
        } else {
            dispatch(setKeyCreate(true));
        }
    };

    return (
        <Menu theme="dark" selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="create" onClick={handleClick}>
                Create User
            </Menu.Item>
            <Menu.Item key="app" onClick={handleClick}>
                Cancel
            </Menu.Item>
        </Menu>
    );
}

export default NavigationTop;
