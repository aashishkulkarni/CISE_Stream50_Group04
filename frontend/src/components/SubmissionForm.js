import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const history = useHistory()

  const onSubmit = (data) => {
    setResult(JSON.stringify(data));
    const url = 'http://localhost:8080/article/submitArticle'

    axios.post(url, {
      ...data
    })
      .then((response) => {
        Swal.fire(
          'Submitting success',
          'Submitting Article has been done successfully ',
          'success'
        ).then((res) => {
          history.push('/moderator')
        })

      })
      .catch((error) => {
        Swal.fire(
          'Submitting Failed!',
          'The article submitting failed ',
          'error'
        ).then((res) => {
          history.push('/moderator')
        })
      })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("title")} placeholder="Title" />
      <p><input {...register("authors")} placeholder="Authors" /></p>
      <p><input {...register("source")} placeholder="Source" /></p>
      <p><input {...register("pubyear")} placeholder="Publication Year" /></p>
      <p><input {...register("doi")} placeholder="DOI" /></p>

      <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programmin</option>
      </select>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;