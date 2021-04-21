/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import {useForm} from "react-hook-form";
import Product from "../../models/Product";
import productActionCreator from "../../actions/productAction";
import {useAppDispatch, useAppSelector} from "../../shared/reduxHooks";
import queryString from "query-string";

import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {useHistory, useLocation} from "react-router-dom";
import {useEffect} from "react";

const Input = tw.input`w-full  border   text-center text-black text-3xl focus:(outline-none ring-4)`;
const Label = tw.label` font-bold m-4`;

const AddProduct = () => {
  const {search} = useLocation();
  const values = queryString.parse(search);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
    getValues,
  } = useForm<Product>();
  const dispatch = useAppDispatch();
  const EditProductDetails = useAppSelector(
    (state) => state.productReducer.SingleProduct
  );

  const onSubmit = (data: Product) => {
    try {
      const formData = new FormData();

      for (let file of data.ImageArray) {
        formData.append("ImageArray", file);
      }

      if (data.featureImage) {
        formData.append("featureImage", data.featureImage[0]);
      }

      formData.append("description", data.description);
      formData.append("title", data.title);
      formData.append("price", data.price);
      formData.append("category", data.category);

      if (!values.edit) {
        formData.append(
          "titleslug",
          data.title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "")
        );
        dispatch(productActionCreator.createProduct(formData));
      } else {
        formData.append("_id", EditProductDetails._id);

        dispatch(
          productActionCreator.updateProduct({data: formData, history: history})
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (values.edit) {
      dispatch(productActionCreator.getProduct(values.id as string));
      setValue("description", EditProductDetails.description);
      setValue("title", EditProductDetails.title);
      setValue("price", EditProductDetails.price);
      setValue("category", EditProductDetails.category);
    } else {
      dispatch(productActionCreator.setProductEmpty());
      setValue("description", "");
      setValue("title", "");
      setValue("price", 0);
      setValue("category", "");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.edit]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      tw="flex flex-col  min-h-screen max-w-5xl mx-auto p-10 text-center justify-center items-center"
      encType="multipart/form-data">
      <p>Add Product</p>
      <Label>Title</Label>
      <Input {...register("title", {required: "this is Required"})} />
      {errors.title && <p>{errors.title.message}</p>}
      <Label>Price</Label>
      <Input {...register("price", {required: "this is Required"})} />
      {errors.price && <p>{errors.price.message}</p>}

      <Label>Category</Label>
      <select
        {...register("category", {required: "this is Required"})}
        tw=" text-black border w-40 p-5">
        <option value="boba-kits">Boba Kits</option>
        <option value="powders">Powders</option>
        <option value="tea-leaves">Tea Leaves</option>
        <option value="must-haves">Must haves</option>
      </select>

      <Label>featureImage</Label>
      <input
        {...register("featureImage", {required: "this is Required"})}
        type="file"
      />

      <Label>ImageArray</Label>
      <input
        {...register("ImageArray", {required: "this is Required"})}
        type="file"
        multiple
      />

      <div tw=" grid grid-cols-5   lg:grid-cols-8 gap-2 mt-2">
        {EditProductDetails.ImageArray &&
          EditProductDetails.ImageArray.map((image: string) => (
            <div tw="flex flex-col">
              <img
                tw="w-full cursor-pointer h-auto"
                src={`http://localhost:3001/images/${image}`}
                alt="..."
              />
              <button
                onClick={() =>
                  dispatch(
                    productActionCreator.deleteImageProduct(
                      EditProductDetails._id,
                      image
                    )
                  )
                }>
                X
              </button>
            </div>
          ))}
      </div>

      <div tw="text-black  mt-4">
        <CKEditor
          editor={ClassicEditor}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            setValue("description", data);
          }}
          data={getValues("description")}
        />
      </div>
      {errors.description && <p>{errors.description.message}</p>}

      <button
        type="submit"
        tw="py-3 px-4 mt-3 inline-block focus:outline-none  text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-md">
        {values.edit ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default AddProduct;
