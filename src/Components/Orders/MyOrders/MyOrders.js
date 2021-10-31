import React, { useRef, useState } from "react";
import { useEffect } from "react";
import useFirebase from "../../../hooks/useFirebase";
import Service from "../../Home/Detail/Service/Service";

const MyOrders = () => {

  const [users, setUsers] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  const handleAddUser = e => {
    // console.log(nameRef.current.value);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name: name, email: email }

    // send data to the server
    fetch('http://localhost:5000/users', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        if (data._id) {
          alert('successfully added user.')
          e.target.reset();
        }
        // const addedUser = data;
        // const newUsers = [...users, addedUser];
        // setUsers(newUsers);
        console.log(data);

        // clear and reset name and email in input box
        nameRef.current.value = '';
        emailRef.current.value = '';
      })
    e.preventDefault();
  }






  // const { user } = useFirebase();
  // const [orders, setOrders] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/service/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data));
  // }, [user.email]);

  // console.log(orders);

  return (
    <div className="">

      <h3 className="my-5">Our Clients: {users.length}</h3>

      <form onSubmit={handleAddUser} className="pb-4">
        <input type="text" ref={nameRef} placeholder="name" />
        <input type="email" ref={emailRef} name="" id="" placeholder="Email" />
        <input type="submit" value="Submit" />
      </form>

      <ul className="">
        {
          users.map(user =>
            <li key={user.id}>
              {user.id}
              :
              <span className="fw-bold "> Name:</span>  {user.name}
              <br />
              <span className="fw-bold "> Email:</span> {user.email}


            </li>)


        }
      </ul>






      {/* <h1>Here is your all order</h1>
      <h1>My orders : {Service.length}</h1> */}
    </div>
  );
};

export default MyOrders;