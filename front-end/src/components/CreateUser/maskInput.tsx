/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React from 'react';
import InputMask from 'react-input-mask';

interface Props {
  value?: any;
  onChange?: any;
  name?: any;
  mask?: any;
}

const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, '');

const MaskedInput: React.FC<Props> = ({
    value, onChange, name, mask,
}) => {
    function handleChange(event: { target: { value: string; }; }) {
        onChange({
            ...event,
            target: {
                ...event.target,
                name,
                value: onlyNumbers(event.target.value),
            },
        });
    }

    return (
        <InputMask
            style={{
                padding: '4px 11px',
                border: '1px solid #d9d9d9',
                borderRadius: '2px',
                width: '100%',
            }}
            name={name}
            mask={mask}
            value={value}
            onChange={handleChange}
        />
    );
};

export default MaskedInput;
