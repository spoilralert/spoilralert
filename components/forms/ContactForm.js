import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostContactForm } from "../../lib/admin";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your firstname"),
  subject: yup.string().required("Please enter a subject"),
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
  const [sentMessage, setSentMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    PostContactForm(data.subject, data.message, data.name, data.email);
    setSentMessage(true);
    reset();
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input name="name" {...register("name")} placeholder="name" />
      {errors.name && <span>{errors.name.message}</span>}

      <label htmlFor="subject">Subject:</label>
      <input name="subject" {...register("subject")} placeholder="Subject" />
      {errors.subject && <span>{errors.subject.message}</span>}

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
      {sentMessage && (
        <div className="message">Yeay! Your message has been sent!</div>
      )}
      <button>Send</button>
    </form>
  );
}
