import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../../hooks/useFirebase";


const AddServices = () => {
  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div>
      <h1 className="mt-5 text-center text-dark">For Booking Our Offering Packages, Please Add to Your Wish List</h1>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("Your Name")}
                placeholder="Your Name"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("date")}
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("Duration")}
                placeholder="Duration"
                className="p-2 m-2 w-100"

              />
              <br />
              <input
                {...register("image", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("Location")}
                placeholder="Location"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />

              <br />
              <select {...register("Offering Package")} className="p-2 m-2 w-100">
                <option value=" No Package">no package</option>
                <option value="Package1">Package 1</option>
                <option value="Package2">Package 2</option>
                <option value="Package3">Package 3</option>
                <option value="Package4">Package 4</option>

              </select>
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add" className="btn btn-info w-50" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;