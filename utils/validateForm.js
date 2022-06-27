import * as Yup from "yup";
// import { checkImageSize } from "./validateUploadFile";

export const validateForm = Yup.object().shape({

  CardNumber: Yup.string()
    .required("Card number is required")
    .min(19, "Card number is too short - should be 16 chars min"),

  ExpDate: Yup.string()
    .required("Expire date is required")
    .min(7, "Expire date is too short - should be 6 chars min"),

  Cvv: Yup.string()
    .required("Cvv number is required")
    .matches(/^[0-9]+$/g, "Please use only numbers")
    .min(3, "Cvv number is too short - should be 3 chars min"),
  
  Amount: Yup.string()
    .required("Amount is required")
    .matches(/^[0-9]+$/g, "Please use only numbers"),
});
