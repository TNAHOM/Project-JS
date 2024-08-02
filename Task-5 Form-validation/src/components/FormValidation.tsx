import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

interface Form {
  username: string;
  email: string;
  message: string;
}

const FormValidation = () => {
  const form = useForm<Form>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: Form) => {
    console.log(data);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Register</h2>
        <div className="element">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your Username"
            {...register("username", {
              required: "Username is required",
            })}
          />
          <p>{errors.username?.message}</p>
        </div>
        <div className="element">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,

                message: "Invalid email address",
              },
            })}
            placeholder="Enter your Email"
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="element">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={10}
            {...register("message", {
              required: "Enter a message",
            })}
            placeholder="Enter a message"
          ></textarea>
          <p>{errors.message?.message}</p>
        </div>

        <button type="submit">Submit</button>

        <DevTool control={control} />
      </form>
    </div>
  );
};

export default FormValidation;
