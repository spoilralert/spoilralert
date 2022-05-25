import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Checkbox from "../Checkboxes";
import { AddSpoilr } from "../../lib/spoilrs";
import { getUserId } from "../../lib/storage";
import { useState, useEffect } from "react";

const schema = yup.object().shape({
  title: yup.string().required("Please enter a title"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

export default function PostForm({ movieId, tags }) {
  const [userId, setUserId] = useState();
  const [checked, setChecked] = useState([]);
  const [postedMessage, setPostedMessage] = useState(false);

  const handleCheck = (e) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };

  useEffect(() => {
    const id = getUserId();
    setUserId(id);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Checkbox: false,
    },
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    console.log(checked);
    const response = AddSpoilr(
      movieId,
      data.title,
      data.message,
      checked,
      userId
    );
    setChecked([]);
    setPostedMessage(true);
    reset();
    console.log(response);
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
      <div className="checkbox__container">
        <Checkbox
          title="Choose tags:"
          items={tags}
          checked={checked}
          handleCheck={handleCheck}
        />
      </div>
      {postedMessage && (
        <div className="message">
          Yeay! Your spoilr has been added, +1 point for you!
        </div>
      )}
      <button>Post</button>
    </form>
  );
}
