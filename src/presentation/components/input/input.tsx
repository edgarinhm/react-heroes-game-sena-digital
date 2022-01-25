import Styles from './input-styles.scss';

import React, { useRef } from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  state: any;
  setState: any;
  name: string;
  placeholder: string;
};

const Input: React.FC<Props> = ({ state, setState, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>();
  const error = state[`${props.name}Error`];
  return (
    <div
      data-testid={`${props.name}-wrap`}
      className={Styles.inputWrap}
      data-status={error ? 'invalid' : 'valid'}
    >
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={e => {
          e.target.readOnly = false;
        }}
        onChange={e => {
          setState({ ...state, [e.target.name]: e.target.value });
        }}
      />
      <div
        role="button"
        onClick={() => {
          inputRef.current.focus();
        }}
        onKeyPress={() => {
          inputRef.current.focus();
        }}
        tabIndex={0}
      >
        <label data-testid={`${props.name}-label`} title={error}>
          {props.placeholder}
        </label>
      </div>
    </div>
  );
};

export default Input;
