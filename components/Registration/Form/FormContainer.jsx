import { useDispatch, useSelector } from "react-redux";
import s from "./Form.module.scss";
import Success from "./Success";
import Form from "./Form";

const FormContainer = () => {

  const { isSucces, isServerError, isPreloader } = useSelector((s) => s.app);

  return (
    <section id="form" className={s.section}>
      <div className={s.container}>

        {isSucces ? (
          <Success/>
        ) : (
          <Form isServerError={isServerError} isPreloader={isPreloader} />
        )}
      
      </div>
    </section>
  );
};

export default FormContainer;
