import s from "./Form.module.scss";
import DisabledModal from "./DisabledModal";
import { Formik } from "formik";
import { validateForm } from "../../../utils/validateForm";
import Input from "../../Common/Input/Input";
import InputWithMask from "../../Common/Input/InputWithMask";
import Btn from "../../Common/Buttons/Btn/Btn";
import { createPayTC } from "../../../store/reducers/app-reducer";
import { useDispatch } from "react-redux";

const Form = ({ isServerError }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    position: "",
  };

  return (
    <div className={s.formWrapper}>

      {isServerError && <DisabledModal t={t} />}

      <Formik
        initialValues={initialValues}
        validationSchema={validateForm}
        onSubmit={(values, { resetForm }) => {
          // eslint-disable-next-line prefer-const
          let { name, email, phone, position } = values;
          phone = phone.replace("(", "").replace(")", "").replace("-", "");
          dispatch(
            createPayTC({ name, email, phone, position })
          );

          // console.log("values: ", values);
          setUploadFileName("");
          resetForm(initialValues);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          // isSubmitting,
          setFieldValue,
          setFieldError,
          setFieldTouched,
          validateField,
          isValid,
          dirty,
          validateForm,
        }) => {
          // console.log("upload value: ", values.upload);
          // console.log('FormContainer render');
          // console.table([values, errors, touched]);
          // console.log("values: ", values);

          // const onBlurAnotherPhonesHandler = (e) => {
          //   const replaceValue = e.target.value
          //     .replace(/^[;, ]*/g, "")
          //     .replace(/[;,+ ]*$/g, "")
          //     .replace(/\s{2,}/g, " ");
          //   setFieldValue("anotherPhones", replaceValue);
          //   handleBlur(e);
          // };

          const onChangePhoneHandler = (e) => {
            // console.log(e);
            if (e.nativeEvent.inputType === "insertFromPaste") {
              // console.log(e.nativeEvent, 'input value');
              e.preventDefault();
              return;
            }
            handleChange(e);
          };

          const onPastePhoneHandler = (e) => {
            const pasteText = e.clipboardData.getData("Text");
            // console.log("onPaste", pasteText);
            // console.log(e.clipboardData.getData('Text'));
            const onlyNumbers = pasteText.replace(/[\s()+-]*/gm, "");
            // console.log(onlyNumbers);
            const last9 = onlyNumbers.slice(-9);
            setFieldValue("phone", last9);
          };

          return (
            <form className={s.form} onSubmit={handleSubmit}>
              <Input
                // required
                label="name"
                marginBottom={57}
                errorMessage={errors.name}
                touched={touched.name}
                helperText="helperText"
                placeholder="placeholder"
                n={128}
                value={values.name}
                name="name"
                onChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                inputmode=""
                validateField={validateField}
                setFieldTouched={setFieldTouched}
              />

              <Input
                label="name"
                // required
                marginBottom={57}
                errorMessage={errors.email}
                touched={touched.email}
                helperText="helperText"
                placeholder="placeholder"
                n={128}
                value={values.email}
                name="email"
                onChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                inputmode="email"
                validateField={validateField}
                setFieldTouched={setFieldTouched}
              />

              <InputWithMask
                label="name"
                marginBottom={57}
                // required
                mask="+38(099)999-9999"
                helperText="helperText"
                errorMessage={errors.phone}
                touched={touched.phone}
                placeholder="placeholder"
                value={values.phone}
                maxLength={16}
                name="phone"
                onChange={onChangePhoneHandler}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                inputmode="tel"
                handleReset={handleReset}
                onPaste={onPastePhoneHandler}
                validateField={validateField}
                setFieldTouched={setFieldTouched}
              />

              <div className={s.submitWrapper}>
                <Btn type="submit" disabled={!(dirty && isValid)}>
                  Pay
                </Btn>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
