import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Login } from "../../lib/auth";
import { saveToken, saveUser } from "../../lib/storage";
import { useState } from "react";
// import DisplayMessage from "../DisplayMessage";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(5, "The password must be at least 5 characters"),
});

export default function LoginForm() {
  const [invalidLoginState, setInvalidLoginState] = useState(false);

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
      const response = await Login(data.email, data.password);
      console.log(response);

      saveToken(response.login.jwt);
      saveUser(response.login.user);

      location.href = "/";
    } catch (e) {
      console.log(e.message);
      setInvalidLoginState(true);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input name="email" {...register("email")} placeholder="email" />
      {errors.email && <span>{errors.email.message}</span>}

      <label htmlFor="password">Password:</label>
      <input name="password" {...register("password")} placeholder="password" />
      {errors.password && <span>{errors.password.message}</span>}
      {invalidLoginState && (
        <div className="message">Invalid email or password</div>
      )}
      <button>Login</button>
    </form>
  );
}
