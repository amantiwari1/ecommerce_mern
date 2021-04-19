/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import {useForm} from "react-hook-form";
import {Input, FormWrapper} from "../components";
import {Link, useHistory} from "react-router-dom";
import {useRef} from "react";
import userActionCreator from "../../actions/userAction";
import {useAppDispatch} from "../../shared/reduxHooks";

type Inputs = {
  email: string;
  name: string;
  password: string;
  confirmpassword: string;
};

const SignUp = () => {
  const history = useHistory();

  const dispatch = useAppDispatch();

  const {
    register,
    watch,
    formState: {errors},
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    dispatch(userActionCreator.signup({data: data, history: history}));
  };

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div tw=" flex mb-3 pb-5 justify-center ">
        <h1 tw="font-bold text-3xl">Create Account</h1>
      </div>
      <Input
        isError={errors.name}
        placeholder="Enter your Full Name"
        label="Name"
        register={register("name", {
          required: "You must provide the name",
        })}
      />

      <Input
        placeholder="Enter your email"
        isError={errors.email}
        label="Email"
        register={register("email", {
          required: "You must provide the email address!",
          pattern: {
            // eslint-disable-next-line
            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Invalid email address",
          },
        })}
      />

      <Input
        placeholder="Enter your Password"
        type="password"
        isError={errors.password}
        label="Password"
        register={register("password", {
          required: "You must provide a password.",
          minLength: {
            value: 6,
            message: "Password must have at least 6 characters",
          },
        })}
      />

      <Input
        placeholder="Enter your confirm password"
        type="password"
        isError={errors.confirmpassword}
        label="Confirm Password"
        register={register("confirmpassword", {
          required: "You must provide a confirm password.",
          validate: (value) =>
            value === password.current || "The passwords do not match",
        })}
      />

      <div tw=" flex mb-3 pb-5 justify-center ">
        <button
          type="submit"
          tw="py-3  focus:outline-none w-40 text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-full ">
          Sign Up
        </button>
      </div>

      <div tw=" flex mb-3 pb-5 justify-center ">
        <p>
          have already account?
          <Link
            to="/signin"
            tw="ml-1  focus:outline-none   text-center text-indigo-600 hover:text-indigo-500 rounded-full ">
            Sign In
          </Link>
        </p>
      </div>
    </FormWrapper>
  );
};

export default SignUp;
