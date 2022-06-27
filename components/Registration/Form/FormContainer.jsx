import { useDispatch, useSelector } from "react-redux";
import s from "./Form.module.scss";
// import Success from "./Success";
import Form from "./Form";

const FormContainer = () => {
  const dispatch = useDispatch();

  const { isServerError } = useSelector((s) => s.app);
  // const { positions, isSuccessRegistration } = useSelector((s) => s.sign);

  return (
    <section id="form" className={s.section}>
      <div className={s.container}>

        {/* {isSuccessRegistration ? (
          <Success t={t} />
        ) : (
          <Form isServerError={isServerError} positions={positions} t={t} />
        )} */}

        <Form isServerError={isServerError} />
      </div>
    </section>
  );
};

export default FormContainer;
