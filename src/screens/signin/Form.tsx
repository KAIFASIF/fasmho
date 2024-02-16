import { memo, useState } from "react";
import Button from "../../components/Button";
import { FormProvider, useForm } from "react-hook-form";
import RHFTextField from "../../libraries/form-fields/RHFTextField";
import Switch from "../../components/Switch";
import { Link } from "react-router-dom";

const Form = () => {
  const methods = useForm();
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => setIsChecked((prev: boolean) => !prev);
  const onSubmit = () => {};

  return (
    <section className="flex flex-col   items-center  xs:w-[100%]  lg:w-[30%]  w-full">
      <div className="mt-20 md:mt-40 lg:mt-20">
        <img
         src="/assets/images/FES_Logo.png"
          alt="Fashmo Image"
          className="w-50 h-auto object-fill"
        />
      </div>

      <FormProvider {...methods}>
        <div className="flex  w-full justify-center items-center   p-10 md:p-20 ">
          <div className="flex flex-col w-full">
            <RHFTextField
              name="email"
              label="Email"
              required
              className="border-2 bg-gray-200 border-lightGray200 line-height"
            />

            <RHFTextField
              name="password"
              label="Password"
              type="password"
              required
              className="border-2 bg-gray-200 border-lightGray200 line-height"
            />

            <div className="mt-2 flex justify-between">
              <div className="flex">
                <Switch checked={isChecked} onChange={handleChecked} />
                <h1 className="-ml-4">Remember me</h1>
              </div>
              <Link to="/d" className="text-primary">
                Forgot Password?{" "}
              </Link>
            </div>

            <div className="flex justify-center w-full mt-10">
              <Button
                label="Signin"
                onClick={methods.handleSubmit(onSubmit)}
                className=" rounded-full py-2 px-4 bg-primary text-white w-full"
              />
            </div>
          </div>
        </div>
      </FormProvider>
    </section>
  );
};

export default memo(Form);
