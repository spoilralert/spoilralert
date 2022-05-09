import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstname: yup.string().required("Please enter your firstname"),
  lastname: yup.string().required("Please enter your lastname"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstname">Firstname:</label>
      <input
        name="firstname"
        {...register("firstname")}
        placeholder="Firstname"
      />
      {errors.firstname && <span>{errors.firstname.message}</span>}

      <label htmlFor="lastname">Lastname:</label>
      <input name="lastname" {...register("name")} placeholder="Lastname" />
      {errors.lastname && <span>{errors.lastname.message}</span>}

      <label htmlFor="email">Email:</label>
      <input name="email" {...register("email")} placeholder="email" />
      {errors.email && <span>{errors.email.message}</span>}

      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        {...register("message")}
        placeholder="Write your message here"
      />
      {errors.message && <span>{errors.message.message}</span>}
      <button>Send</button>
    </form>
  );
}
