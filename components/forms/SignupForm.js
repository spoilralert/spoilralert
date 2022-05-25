import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Register } from "../../lib/auth";
import { useState } from "react";

const schema = yup.object().shape({
  username: yup.string().required("Please enter a username"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(5, "The message must be at least 5 characters"),
});

export default function SignupForm() {
  const [invalidSignUpState, setInvalidSignUpState] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    console.log(data);
    try {
      const response = await Register(data.email, data.username, data.password);
      console.log(response);
      location.href = "/login";
    } catch (error) {
      console.log(error);
      setInvalidSignUpState(true);
    }
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username:</label>
      <input name="username" {...register("username")} placeholder="Username" />
      {errors.username && <span>{errors.username.message}</span>}

      <label htmlFor="email">Email:</label>
      <input name="email" {...register("email")} placeholder="email" />
      {errors.email && <span>{errors.email.message}</span>}

      <label htmlFor="password">Password:</label>
      <input name="password" {...register("password")} placeholder="password" />
      {errors.password && <span>{errors.password.message}</span>}
      {invalidSignUpState && (
        <div className="message">Username or email is already taken</div>
      )}
      <button>Sign Up</button>
    </form>
  );
}
