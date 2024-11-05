import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://43.200.191.24:8081/item").then(function (res) {
      if (res.status === 200) {
        setList(res.data.list);
      } else {
        alert("error");
      }
    });
  }, []);

  return (
    <div>
      <h3>상품 목록</h3>
      <ul>
        {list.map((item) => (
          <li>
            {item.name}
            <img
              src={"http://43.200.191.24:8081/read-img/" + item.path}
              className="imgstyle"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
