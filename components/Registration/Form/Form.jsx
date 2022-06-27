import s from "./Form.module.scss";
import { Formik } from "formik";
import { validateForm } from "../../../utils/validateForm";
import Input from "../../Common/Input/Input";
import InputWithMask from "../../Common/Input/InputWithMask";
import Btn from "../../Common/Buttons/Btn/Btn";
import { createPayTC } from "../../../store/reducers/app-reducer";
import { useDispatch } from "react-redux";
import Preloader from "../../Common/Preloader/Preloader";

const Form = ({ isServerError, isPreloader }) => {
  const dispatch = useDispatch();

  const initialValues = {
    CardNumber: "",
    ExpDate: "",
    Cvv: "",
    Amount: "",
  };

  return (
    <div className={s.formWrapper}>

      { isPreloader ? <Preloader/> : (

      <Formik
        initialValues={initialValues}
        validationSchema={validateForm}
        onSubmit={(values, { resetForm }) => {
          values.CardNumber = values.CardNumber.replace(/[\s()/]*/gm, "");
          dispatch(
            createPayTC(values)
          );

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

          const onChangeCardNumber = (e) => {
            // console.log(e);
            if (e.nativeEvent.inputType === "insertFromPaste") {
              // console.log(e.nativeEvent, 'input value');
              e.preventDefault();
              return;
            }
            handleChange(e);
          };

          const onPasteCardNumber = (e) => {
            const pasteText = e.clipboardData.getData("Text");
            // console.log("onPaste", pasteText);
            // console.log(e.clipboardData.getData('Text'));
            const onlyNumbers = pasteText.replace(/[\s()/]*/gm, "");
            setFieldValue("CardNumber", onlyNumbers);
          };

          const onPasteExpDate = (e) => {
            const pasteText = e.clipboardData.getData("Text");
            // console.log("onPaste", pasteText);
            // console.log(e.clipboardData.getData('Text'));
            const onlyNumbers = pasteText.replace(/[\s()/]*/gm, "");
            // console.log(onlyNumbers);
            // const last9 = onlyNumbers.slice(-9);
            setFieldValue("ExpDate", onlyNumbers);
          };

          return (
            <form className={s.form} onSubmit={handleSubmit}>
              <InputWithMask
                label="Card number"
                marginBottom={57}
                mask="9999/9999/9999/9999"
                helperText="xxxx/xxxx/xxxx/xxxx"
                errorMessage={errors.CardNumber}
                touched={touched.CardNumber}
                placeholder="xxxx/xxxx/xxxx/xxxx"
                value={values.CardNumber}
                maxLength={16}
                name="CardNumber"
                onChange={onChangeCardNumber}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                inputmode=""
                handleReset={handleReset}
                onPaste={onPasteCardNumber}
                validateField={validateField}
                setFieldTouched={setFieldTouched}
              />

              <InputWithMask
                label="Expire date"
                marginBottom={57}
                mask="99/9999"
                helperText="MM/YYYY"
                errorMessage={errors.ExpDate}
                touched={touched.ExpDate}
                placeholder="Enter expire date MM/YYYY"
                value={values.ExpDate}
                maxLength={6}
                name="ExpDate"
                onChange={onChangeCardNumber}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                handleReset={handleReset}
                onPaste={onPasteExpDate}
                validateField={validateField}
                setFieldTouched={setFieldTouched}
              />

              <Input
                label="CVV"
                marginBottom={57}
                errorMessage={errors.Cvv}
                touched={touched.Cvv}
                helperText="Format xxx"
                placeholder="Enter your cvv number"
                n={3}
                value={values.Cvv}
                name="Cvv"
                onChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                inputmode=""
                validateField={validateField}
                setFieldTouched={setFieldTouched}
              />

              <Input
                label="Amount"
                marginBottom={57}
                errorMessage={errors.Amount}
                touched={touched.Amount}
                helperText="Payment currency RUB"
                placeholder="Enter the amount of your payment"
                n={128}
                value={values.Amount}
                name="Amount"
                onChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                inputmode=""
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

      )}

      {isServerError && <span className={s.error}>{isServerError}</span>}

    
    </div>
  );
};

export default Form;
