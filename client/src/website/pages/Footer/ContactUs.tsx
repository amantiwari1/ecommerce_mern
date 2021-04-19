/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import {useForm} from "react-hook-form";
import {Input, FormWrapper} from "../../components";

type Inputs = {
  email: string;
  password: string;
};

const ContactUs = () => {
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm<Inputs>();
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div tw=" flex mb-3 pb-5 justify-center ">
        <h1 tw="font-bold text-3xl">Contact Us</h1>
      </div>
      <Input
        isError={errors.password}
        label="Name"
        placeholder="Enter your Name"
        register={register("password", {
          required: "You must provide a name.",
        })}
      />

      <Input
        isError={errors.email}
        label="Email"
        placeholder="Enter your email"
        register={register("email", {
          required: "You must provide the email address!",
          pattern: {
            // eslint-disable-next-line
            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Invalid email address",
          },
        })}
      />

      <div tw=" flex mb-3 pb-5 justify-center ">
        <button
          type="submit"
          tw="py-3  focus:outline-none w-40 text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-full ">
          Send
        </button>
      </div>
    </FormWrapper>
  );
};

export default ContactUs;
