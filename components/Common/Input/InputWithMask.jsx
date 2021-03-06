import React from 'react'
import MaskedInput from "react-input-mask";
import s from "./Input.module.scss";
import { variables } from "../../../utils/variables";
import { InputWithStyle } from "./Input";

const InputWithMask = ({
  inputmode,
  placeholder,
  label,
  marginBottom,
  helperText,
  errorMessage,
  touched,
  disable = false,
  o,
  n = null,
  mask,
  value,
  name,
  onChange,
  handleBlur,
  setFieldValue,
  formatChars,
  onPaste,
  setFieldTouched,
}) => {
  console.log("render InputWithMask");
  const counterStyle = {
    color: ` ${disable ? variables.disableBorder : variables.textColor} `,
  };

  const isError = !!errorMessage && touched;

  const trimSpace = (str) =>
    str
      .replace(/^[\s]*/, "")
      .replace(/[\s]*$/, "")
      .replace(/\s{2,}/g, " ");

  const onBlurReplaceValue = (e) => {
    // console.log(e.target.value);
    setFieldValue(name, trimSpace(e.target.value));
    handleBlur(e);
  };

  return (
    <div style={{ marginBottom: marginBottom }} className={s.wrapper}>
      <MaskedInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlurReplaceValue}
        mask={mask}
        disabled={disable}
        maskChar={null}
        formatChars={formatChars}
        onPaste={onPaste}
      >
        {(inputProps) => (
          <InputWithStyle
            placeholder={placeholder}
            label={label}
            fullWidth
            error={isError}
            disabled={disable}
            variant="outlined"
            helperText={(touched && errorMessage) || helperText}
            name={name}
            inputProps={{
              inputMode: inputmode,
            }}
            {...inputProps}
          />
        )}
      </MaskedInput>
      {n && (
        <span style={counterStyle} className={s.span}>{`${o} / ${n}`}</span>
      )}
    </div>
  );
};

export default React.memo(InputWithMask);
