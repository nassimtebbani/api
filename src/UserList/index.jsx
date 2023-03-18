import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import axios from "axios";
import "swiper/css";
import Card from "../Card";
function UserList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={style.container}>
      <h1>List of Users</h1>
      <ul>
        {list.map((user) => (
          <SwiperSlide key={user.id}>
            <Link to={`/users/${user.id}`}>
              <Card {...user} />
            </Link>
          </SwiperSlide>
          //<li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
