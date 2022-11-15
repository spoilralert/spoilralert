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
    .min(5, "The password must be at least 6 characters"),
});

export default function SignupForm() {
  // let message = "";
  const [invalidSignUpState, setInvalidSignUpState] = useState(false);
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data, e) {
    e.preventDefault();
    e.target.reset();
    try {
      const response = await Register(data.email, data.username, data.password);
      // location.href = "/login";
      setMessage(
        "Hooray! Thank you for signing up to spoilralert! You will soon receve an email when we are up and running with beta"
      );
    } catch (error) {
      // setInvalidSignUpState(true);
      setMessage(
        "oh no! The username or email is already taken, please try another one"
      );
    }
  }

  return (
    <form id="form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username:</label>
      <input name="username" {...register("username")} placeholder="Username" />
      {errors.username && <span>{errors.username.message}</span>}

      <label htmlFor="email">Email:</label>
      <input name="email" {...register("email")} placeholder="email" />
      {errors.email && <span>{errors.email.message}</span>}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        {...register("password")}
        placeholder="password"
      />
      {errors.password && <span>{errors.password.message}</span>}

      {/* {invalidSignUpState && (
        // <div className="message">Username or email is already taken</div>
        <div>{message}</div>
      )} */}

      <div>{message}</div>

      <button>Sign Up</button>
    </form>
  );
}
