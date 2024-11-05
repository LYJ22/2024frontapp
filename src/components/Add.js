import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Add() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({ name: "", f: "" });
  const { name, f } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const add = () => {
    let fdata = new FormData(document.getElementById("addf"));
    axios
      .post("http://43.200.191.24:8081/item", fdata, {})
      .then(function (res) {
        //res.status:상태값, res.data:백에서 보낸 데이터
        if (res.status === 200) {
          if (res.data.flag) {
            alert("등록완료");
            navigate("/list");
          } else {
            alert("등록 취소");
          }
        } else {
          alert("비정상 응답");
        }
      });
  };
  return (
    <div>
      <h3>상품 등록</h3>
      <form id="addf">
        name:
        <input type="text" name="name" value={name} onChange={onChange} />
        <br />
        상품사진:
        <input type="file" name="f" value={f} onChange={onChange} />
        <button onClick={add}>등록</button>
      </form>
    </div>
  );
}
