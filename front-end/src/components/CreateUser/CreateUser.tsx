import { useState } from 'react'

import { Steps, Button, message } from 'antd';
import { OptionsSteps } from './options'
import FormUser from './FormUser';
import FormClient from './FormClient'
import 'antd/dist/antd.css';

const { Step } = Steps;

const CreateUser = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div style={{ margin: '10px', alignContent: 'center', alignItems: 'center'}}>
      <Steps current={current}>
        {OptionsSteps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div style={{ margin: '10px'}}>
        {current === 0
          ? <FormUser />
          : current === 1
            ? <FormClient />
            : ""
        }
      </div>
      <div className="steps-action">
        {current < OptionsSteps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Próximo
          </Button>
        )}
        {current === OptionsSteps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Feito
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Anterior
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateUser;
