import React from "react";
import s from "./style.module.css";
export default function Card({ name, username, email }) {
  return (
    <div className={s.container}>
      <div>{name}</div>
      <div>{username}</div>
      <div>{email}</div>
    </div>
  );
}
