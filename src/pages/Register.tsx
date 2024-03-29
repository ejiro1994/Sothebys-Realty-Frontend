import { useForm } from 'react-hook-form'


export interface RegisterFormData {
  firstName: string
  lastName: String
  email: string
  password: string
  confirmPassword: string
}
const Register = () => {


  const { register, watch, handleSubmit, formState: {errors} } = useForm<RegisterFormData>()
  
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-thin">Sign Up For an Account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          First Name
          <input
            className="border  w-full py-1 px-2 font-normal"
            {...register('firstName', { required: 'This field is required' })}
            placeholder="First Name"
          />
          {errors.firstName && (<span className='text-red-800 text-xs'>{errors.firstName.message}</span>)}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Last Name
          <input
            className="border  w-full py-1 px-2 font-normal"
            {...register('lastName', { required: 'This field is required' })}
            placeholder="Last Name"
          />
          {errors.lastName && (<span className='text-red-800 text-xs'>{errors.lastName.message}</span>)}

        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border  w-full py-1 px-2 font-normal"
          {...register('email', { required: 'Valid email required' })}
          placeholder="Email"
        />
          {errors.email && (<span className='text-red-800 text-xs'>{errors.email.message}</span>)}

      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border  w-full py-1 px-2 font-normal"
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          placeholder="Password"
        />
          {errors.password && (<span className='text-red-800 text-xs'>{errors.password.message}</span>)}

      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Confirm Password
        <input
          type="password"
          className="border  w-full py-1 px-2 font-normal"
          {...register('confirmPassword', {
            validate: (val) => {
              if (!val) {
                return 'This field is required'
              } else if (watch('password') !== val) {
                return 'Your passwords do not match'
              }
            },
          })}
          placeholder="Confirm Password"
        />
          {errors.confirmPassword && (<span className='text-red-800 text-xs'>{errors.confirmPassword.message}</span>)}

      </label>
      <span>
        <button
          type="submit"
          className="py-5 px-8 bg-oxford-blue text-white tracking-widest"
        >
          Sign Up
        </button>
      </span>
    </form>
  )
}

export default Register
