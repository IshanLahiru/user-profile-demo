import axios from "axios"
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";

export default function ViewProfile() {

  const user = {
    username: "john_doe",
    f_name: "John",
    l_name: "Doe",
    email: "john@example.com",
    contact: "123-456-7890",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image URL
  };

  const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
      axios.get('https://api.github.com/repos/IshanLahiru/user-profile-demo/contents/front-end/data.md').then(function(response) {
      const d = JSON.parse(atob(response.data.content));      
      console.log(d[0]);
            setUsers(d[0]);
        });
    }


  return (
    <>
      <NavBar />
      <div>
        <div className="container mx-auto py-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Your Profile
            </h2>
          </div>
          <div className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="text-center">
              {/* Add your profile picture here */}
              <img
                src={users.profilePicture}
                alt={users.username}
                className="w-32 h-32 rounded-full mx-auto"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {users.username}
              </h2>
              <div className="mt-4">
                <p>
                  <span className="font-bold">First Name:</span>{" "}
                  {users.f_name}
                </p>
                <p>
                  <span className="font-bold">Last Name:</span> {users.l_name}
                </p>
                <p>
                  <span className="font-bold">Email:</span> {users.email}
                </p>
                <p>
                  <span className="font-bold">Contact Number:</span>{" "}
                  {users.contact}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <a href="edit">Edit Profile</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
