import React from "react";
import {useForm} from '../../Hooks/useForm'
export const CrudFormUser = () => {
  const [{name}, handleInputChange, reset] = useForm({
    name: ''
  })
  console.log(name)
  return (
    <>
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="User Name"
        autoComplete="off"
        value={name}
        onChange={handleInputChange}
      />
    </>
  );
};
