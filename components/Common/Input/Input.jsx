import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import s from "./Input.module.scss";
import { variables } from "../../../utils/variables";

const Input = ({
  marginBottom,
  inputmode,
  placeholder,
  label,
  helperText,
  touched,
  errorMessage,
  disable = false,
  n = null,
  value,
  name,
  onChange,
  handleBlur,
  setFieldValue,
  validateField,
  setFieldTouched,
}) => {
  const counterStyle = {
    color: ` ${disable ? variables.disableBorder : variables.textColor} `,
  };

  const isError = !!errorMessage && touched;
  // const isOk = touched && !errorMessage && !!value.length;
  // const isPaddingRight = isError || isOk;

  const trimSpace = (str) =>
    str
      .replace(/^[\s]*/, "")
      .replace(/[\s]*$/, "")
      .replace(/\s{2,}/g, " ");

  const onBlurReplaceValue = (e) => {
    const trimValue = trimSpace(e.target.value);
    setFieldValue(name, trimValue);
    setTimeout(() => {
      validateField(name, trimValue);
    }, 0);

    handleBlur(e);
  };

  // const onChangeHandler = (e) => {
  //   if (e.target.value.length) {
  //     setFieldTouched(name, true);
  //   }
  //   onChange(e);
  // };

  return (
    <div style={{ marginBottom: marginBottom }} className={s.wrapper}>
      <InputWithStyle
        placeholder={placeholder}
        value={value}
        label={label}
        fullWidth
        error={isError}
        disabled={disable}
        variant="outlined"
        helperText={(touched && errorMessage) || helperText}
        name={name}
        onChange={onChange}
        onBlur={onBlurReplaceValue}
        inputProps={{
          maxLength: n,
          inputMode: inputmode,

          style: {
            // paddingRight: isPaddingRight && 44,
          },
        }}
      />
      {n && (
        <span style={counterStyle} className={s.span}>{`${
          value ? value.length : 0
        } / ${n}`}</span>
      )}
    </div>
  );
};

export const InputWithStyle = styled(TextField)`
  & .MuiInputBase-input.MuiOutlinedInput-input {
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: normal;
    color: ${variables.textColor};
    height: 21px;
    -webkit-box-shadow: inset 0 0 0 50px ${variables.backgroundColor}; /* накладываеть тень поверх инпута т.к. с автозполнением из браузера прилетают другие стили*/
    -webkit-text-fill-color: ${variables.textColor}; // побочный эффект => перезаливает плейсхолдер

    &::placeholder {
      color: ${variables.labelColor};
      -webkit-text-fill-color: ${variables.labelColor};
      opacity: 1;
    }
  }

  & fieldset {
    border: 1px solid ${variables.enabledBorder} !important;
  }

  & label {
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    color: ${variables.labelColor};
  }

  & .MuiInputLabel-shrink {
    font-size: 12px;
    line-height: 14px;
    transform: translate(16px, -7px) scale(1);
  }

  & .MuiInputLabel-shrink.Mui-focused {
    color: ${variables.secondaryColor} !important;
  }

  & .Mui-focused {
    & fieldset {
      border: 2px solid ${variables.secondaryColor} !important;
      // @media (max-width: 600px) {
      //   border: 1px solid ${variables.primaryColor} !important;
      // }
    }
  }

  & .Mui-error fieldset {
    border: 2px solid ${variables.errorColor} !important;
  }

  & .Mui-disabled fieldset {
    border: 1px solid ${variables.disableBorder} !important;
  }

  & .Mui-focused .MuiInputLabel-shrink {
    color: ${variables.secondaryColor} !important;
  }

  & .Mui-error.MuiInputLabel-root {
    color: ${variables.errorColor} !important;
  }

  & .Mui-disabled.MuiInputLabel-root {
    color: ${variables.disableBorder} !important;
  }

  // & .Mui-focused {
  //   color: ${variables.secondaryColor};
  // }

  & .MuiFormHelperText-root {
    word-break: break-word;
    position: absolute;
    top: 55px;
    left: 2px;
    //max-width: 310px;
    width: 100%;
    padding: 3px 70px 0 14px;
    margin: 0;
    
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: normal;
    color: ${variables.textColor};
    //@media (max-width: 600px) {
    //  max-width: 250px;
    //}
  }

  & .MuiFormHelperText-root.Mui-error {
    color: ${variables.errorColor} !important;
  }

  & .MuiFormHelperText-root.Mui-disabled {
    color: ${variables.disableBorder} !important;
  }
`;

export default Input;
