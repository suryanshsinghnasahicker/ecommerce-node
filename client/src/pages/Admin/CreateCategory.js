import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";
import { Toast } from "react-toastify/dist/components";
import axioss from "axios";
const CreateCategory = () => {
  const [Category, setCategory] = useState([]);

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
    } catch (error) {
      console.log(error);
      Toast.error("something went wrong in getting category");
    }
  };
  return (
    <Layout title={"Dashboard-Create Category"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Category</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
