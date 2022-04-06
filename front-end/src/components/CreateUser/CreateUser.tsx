/* eslint-disable no-nested-ternary */
import { Steps } from 'antd';
import { useSelector } from 'react-redux';
import { OptionsSteps } from './options';
import FormUser from './FormUser';
import FormClient from './FormClient';
import FormConfirmed from './FormConfirmed';
import { RootState } from '../../store';
import 'antd/dist/antd.css';

const { Step } = Steps;

function CreateUser() {
    const index = useSelector((state: RootState) => state.globalStore.index);

    return (
        <div style={{ margin: '10px', alignContent: 'center', alignItems: 'center' }}>
            <Steps current={index}>
                {OptionsSteps.map((item) => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>

            <div style={{ margin: '10px' }}>
                {index === 0
                    ? <FormClient />
                    : index === 1
                        ? <FormUser />
                        : <FormConfirmed />}
            </div>
        </div>
    );
}

export default CreateUser;
