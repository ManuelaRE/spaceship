# Mr Little Z spaceship

### **Tooling used in this project**

Linting - ESLint  and stylelint to be able to run

`npm run lint`

Formatting

prettier - *de-facto* formatter for Typescript that allows us to run: 

`npm run reformat` and `npm run format` 

### About the solution

This solution tried to implement a form based on the requirements using basic html form elements.

In a real life environment I would have maybe chosen to build the form using Formik and yup as it handles much better:

- getting values out of form state
- validation and error display
- form submission

I used MaterialUI date-picker for the date  field

### Known issues and if I had more time

- fix console error on form key
- improve the styling
- fix form submission for the date. At the moment it’s being picked up automatically by the form
- Just to output a query string for the purpose of the exercise  I’m creating a URL parameter. This is triggering an error: `Argument of type 'FormData' is not assignable to parameter of type 'string | string[][]`