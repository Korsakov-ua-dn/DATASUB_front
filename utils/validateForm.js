import * as Yup from "yup";
// import { checkImageSize } from "./validateUploadFile";

export const validateForm = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name is too short - should be 2 chars min")
    // .max(128, "Name is too long - should be 128 chars max")
    .matches(/^[A-Za-z ]+$/g, "Please use only latin letters")
    // .test("name", 'Do not use only "-"', (value) => !/^[-]{2,}$/g.test(value))
    .trim(),

  email: Yup.string()
    .required("Email is required")
    .min(6, "The min email format should be x@x.xx")
    .test(
      "local part 64ch",
      "Local part of email should be 64 chars max",
      (value) => {
        if (value) {
          const atIndex = value.indexOf("@");
          return atIndex - 1 < 64;
        }
        return true;
      }
    )
    .test("if missing @", "Missing required character '@'", (value) => {
      // debugger
      if (value) {
        const isQuotes =
          value.indexOf('"') === -1 ||
          value.indexOf("'") === -1 ||
          value.indexOf("`") === -1;
        let domainPart;
        if (!isQuotes) {
          domainPart = value.slice(value.indexOf("@"));
        } else {
          domainPart = value.replace(/^["'`].*["'`]/g, "");
        }

        return domainPart.indexOf("@") !== -1;
      }
      return true;
    })
    .test(
      "domain with '-'",
      "Domain must not contain a hyphen at the beginning or end",
      (value) => {
        // debugger
        let domainPart;
        if (value && value.indexOf('"') === -1) {
          domainPart = value.slice(value.indexOf("@"));
        } else {
          value && (domainPart = value.replace(/^".*"/g, ""));
        }

        if (value) {
          // const domainPart = value.replace(/^".*"/g, "");
          // console.log("domainPart: ", domainPart);
          if (
            domainPart.match(/[@.]+-[a-z-]*/) ||
            domainPart.match(/[a-z-]*-[.]+/) ||
            domainPart.match(/[a-z-]*-$/)
          ) {
            return false;
          }
        }
        return true;
      }
    )
    .matches(/[a-z-]{2,}$/, "Email format should be x@x.xx"),

  phone: Yup.string()
    .required("Phone is required")
    .matches(
      /^(\+38)?(\(?0?\d{2}\)?\d{3}-?\d{2}-?\d{2})$/g,
      "Use format +38(0xx)xxx-xx-xx"
    ),

  upload: Yup.mixed()
    .required("Photo is required")
    .test("file size 5mb", "The file size should not exceed 5mb", (value) => {
      // debugger;
      if (value) {
        if (value.size >= 5 * 1048576) return false;
      }
      return true;
    })
    .test(
      "image size 70*70px",
      "Image size must be 70*70px or more",
      async (value) => {
        // debugger;
        if (value) {
          const size = await new Promise((resolve) => {
            const img = new Image();
            img.src = URL.createObjectURL(value);
            img.onload = function () {
              resolve({ width: img.width, height: img.height });
            };
          });

          if (size.width < 70 && size.height < 70) return false;
        }
        return true;
      }
    )
    .test(
      "image size 20000*20000px",
      "Please add an image less than 20000х20000рх",
      async (value) => {
        // debugger;
        if (value) {
          const size = await new Promise((resolve) => {
            const img = new Image();
            img.src = URL.createObjectURL(value);
            img.onload = function () {
              resolve({ width: img.width, height: img.height });
            };
          });

          if (size.width >= 20000 && size.height >= 20000) return false;
        }
        return true;
      }
    )
    .test("is jpeg", "Please add file in jpeg format.", async (value) => {
      // debugger;
      if (value) {
        const acceptFileType = await new Promise((resolve) => {
          const fileReader = new FileReader();
          fileReader.onloadend = function (e) {
            const arr = new Uint8Array(e.target.result).subarray(0, 4);
            let header = "";
            for (let i = 0; i < arr.length; i++) {
              header += arr[i].toString(16);
            }
            switch (header) {
              case "ffd8ffe0":
              case "ffd8ffe1":
              case "ffd8ffe2":
              case "ffd8ffe3":
              case "ffd8ffe8":
                resolve(true);
                break;
              default:
                resolve(false);
                break;
            }
          };
          fileReader.readAsArrayBuffer(value.slice(0, 4));
        });

        if (!acceptFileType) return false;
      }
      return true;
    }),
});
