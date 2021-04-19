/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import {VscError} from "react-icons/vsc";
const InputStyle = tw.input`w-full rounded-3xl focus:(ring-4  outline-none) text-black px-4 py-3`;

interface InputInterface {
  label: string;
  isError: any;
  register: any;
  type?: string;
  placeholder?: string;
}
const Input = ({
  label,
  isError,
  register,
  type,
  placeholder,
}: InputInterface) => {
  return (
    <div>
      <div tw=" pb-1 relative">
        <label tw="inline-block mb-1 ml-2">{label}</label>

        <InputStyle
          type={type}
          placeholder={placeholder}
          css={[
            isError ? tw`ring ring-red-400  mb-0 ` : tw`ring-blue-400 mb-7`,
          ]}
          {...register}
        />
        {isError && (
          <>
            {" "}
            <VscError tw="absolute h-6 w-6 top-10 right-2 text-red-500" />{" "}
            <p tw="ml-2 text-red-500 mt-1 ">{isError.message}</p>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
