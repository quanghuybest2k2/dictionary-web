import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Loading from "../../../Components/Loading";
import { getSpecialize } from "../../../Services/specializeRepository";
import SpecializeFilterPane from "../../../Components/Admin/SpecializeFilterPane";

const Specialize = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [categoryQuery, setCategoryQuery] = useState({});
  const [isVisibleLoading, setIsVisibleLoading] = useState(true);
  let stt = 1;

  useEffect(() => {
    document.title = "Danh sách chuyên ngành";
    getSpecialize().then((data) => {
      if (data) {
        setCategoryQuery((pre) => {
          return { ...pre, to: "/admin/specialize" };
        });
        setCategoryList(data);
      } else setCategoryList([]);
      setIsVisibleLoading(false);
    });
  }, []);

  return (
    <>
      <h1>Danh sách chuyên ngành</h1>
      <SpecializeFilterPane />
      {isVisibleLoading ? (
        <Loading />
      ) : (
        <Table striped responsive bordered>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên chuyên ngành</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {console.log(categoryList)} */}
            {categoryList && categoryList.length > 0 ? (
              categoryList.map((item, index) => (
                <tr key={index}>
                  <td>{stt++}</td>
                  <td>{item.specialization_name}</td>
                  <td>
                    <Link
                      to={`/admin/specialize/edit/${item.id}`}
                      className="text-bold"
                    >
                      Sửa
                    </Link>
                    <Button variant="danger">Xoá</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  <h4 className="text-danger text-center">
                    Không tìm thấy chuyên ngành
                  </h4>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </>
  );
};
export default Specialize;
