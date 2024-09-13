import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddRecipeForm = () => {
  // Setup Formik
  const formik = useFormik({
    initialValues: {
      title: '',
      ingredients: '',
      steps: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Recipe title is required'),
      ingredients: Yup.string().required('Ingredients are required'),
      steps: Yup.string().required('Preparation steps are required'),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
      // Process form data here
    },
  });

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Recipe Title</label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title ? (
            <p className="text-red-500 text-sm">{formik.errors.title}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Ingredients</label>
          <textarea
            name="ingredients"
            className="mt-1 block w-full border border-gray-300 rounded-md"
            value={formik.values.ingredients}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.ingredients && formik.errors.ingredients ? (
            <p className="text-red-500 text-sm">{formik.errors.ingredients}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Preparation Steps</label>
          <textarea
            name="steps"
            className="mt-1 block w-full border border-gray-300 rounded-md"
            value={formik.values.steps}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.steps && formik.errors.steps ? (
            <p className="text-red-500 text-sm">{formik.errors.steps}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
