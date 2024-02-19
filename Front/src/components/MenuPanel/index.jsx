import React, { useContext, useEffect, useState } from "react";
import Mode from "../Mode";
import { UserContext } from "../../context/userContext";

function MenuPanel() {
  const [products, setProducts] = useState([]);
  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [categoryName, setcategoryName] = useState("");
  const [ingredient, setingredient] = useState("");
  const [description, setdescription] = useState("");
  const { token, decode } = useContext(UserContext);

  useEffect(() => {
    getAll();
  }, []);


  function getAll() {
    fetch("http://localhost:3000/menuWithCategory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", categoryName);
    formData.append("ingredient", ingredient);
    formData.append("description", description);

    const data = await fetch("http://localhost:3000/api/menu/", {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    getAll();
    console.log(data);
  }

  async function deleteById(id) {
    if (decode && decode.role === "admin") {
      await fetch(`http://localhost:3000/api/menu/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      await getAll();
    }
  }


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={(e) => setimage(e.target.files[0])} />
          <br />
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setname(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="price"
            onChange={(e) => setprice(e.target.value)}
          />
          <br />
          {/* <input
            type="text"
            placeholder="category"
            onChange={(e) => setcategoryName(e.target.value)}
          /> */}
          <br />
          <input
            type="text"
            placeholder="ingredient"
            onChange={(e) => setingredient(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="description"
            onChange={(e) => setdescription(e.target.value)}
          />
          <br />
          <button>add</button>
        </form>
        <table border={"1px solid gray"}>
          <thead>
            <tr>
              <th>image</th>
              <th>name</th>
              <th>price</th>
              {/* <th>category</th> */}
              <th>ingredient</th>
              <th>description</th>
              <th>update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((x) => (
                <tr key={x._id}>
                  <td>
                    <img src={x.image} alt="" width={120} />
                  </td>
                  <td>{x.name}</td>
                  <td>${x.price}</td>
                  {/* <td>{x.categoryId.categoryName}</td>  */}
                  <td>{x.ingredient}</td>
                  <td>{x.description}</td>
                  <td>
                    <button>update</button>
                  </td>
                  <td>
                    <button onClick={() => deleteById(x._id)}>delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Mode />
    </>
  );
}

export default MenuPanel;
