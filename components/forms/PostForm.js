import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Checkbox from "../Checkboxes";

const schema = yup.object().shape({
  title: yup.string().required("Please enter a title"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

export default function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Checkbox: false,
    },
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title:</label>
      <input name="title" {...register("title")} placeholder="Title" />
      {errors.title && <span>{errors.title.message}</span>}

      <label htmlFor="message">Spoilr:</label>
      <textarea
        name="message"
        {...register("message")}
        placeholder="Write your spoilr here"
      />
      {errors.message && <span>{errors.message.message}</span>}

      <Checkbox items={["Bad", "LOL", "Surprising", "Gory"]} />

      <button>Post</button>
    </form>
  );
}
