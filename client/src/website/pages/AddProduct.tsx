/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { useForm } from 'react-hook-form'
import Product from "../../models/Product"
import productActionCreator from '../../actions/productAction'
import { useAppDispatch } from '../../shared/reduxHooks'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Input = tw.input`w-full  border   text-center text-black text-3xl focus:(outline-none ring-4)`
const Label = tw.label` font-bold m-4`

const AddProduct = () => {

  const { register, handleSubmit, setValue, formState: { errors }} = useForm<Product>()
  const dispatch = useAppDispatch()
  const onSubmit = (data: any) => {

    try {
      dispatch(productActionCreator.createProduct({...data, ImageArray: data.ImageArray.split('\n')}))
      console.log(data); 

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} tw="flex flex-col  min-h-screen max-w-5xl mx-auto p-10 text-center " >
      <p>Add Product</p>
      <Label>Title</Label>
      <Input {...register("title", {required: "this is Required"})} />
      { errors.title && <p>{errors.title.message}</p>  }
      <Label>Price</Label>
      <Input {...register("price", {required: "this is Required"})} />
      { errors.price && <p>{errors.price.message}</p>  }

      <Label>Feature Image</Label>
      <Input {...register("featureImage", {required: "this is Required"})} />
      { errors.featureImage && <p>{errors.featureImage.message}</p>  }

      <Label  >Category</Label>
      <select  {...register("category", {required: "this is Required"})} tw=" text-black border w-40 p-5">
        <option value="boba-kits">Boba Kits</option>
        <option value="powders">Powders</option>
        <option value="tea-leaves">Tea Leaves</option>
        <option value="must-haves">Must haves</option>
      </select>

      <Label>ImageUrl</Label>
      <textarea {...register("ImageArray", {required: "this is Required"})} tw="m-5 text-black border text-center focus:(outline-none ring-4)" />
    
      

      {/* <div>
              <label tw="block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div tw="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div tw="space-y-1 text-center">
                  <svg tw="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden=""this is Required"">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div tw="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" tw="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" tw="sr-only" />
                    </label>
                    <p tw="pl-1">or drag and drop</p>
                  </div>
                  <p tw="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div> */}

      <div tw='text-black'>
        <CKEditor
          editor={ClassicEditor}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            setValue("description", data)
          }}
        /> 
      </div>
      { errors.description && <p>{errors.description.message}</p>  }

      <button type="submit" tw="py-3 px-4 mt-3 inline-block focus:outline-none  text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-md" >Add Product</button>
    </form>
  )
}

export default AddProduct
