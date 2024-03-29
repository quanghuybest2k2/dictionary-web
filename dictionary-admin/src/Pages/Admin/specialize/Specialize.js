import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Loading from "../../../Components/Loading";
import { getSpecialize } from "../../../Services/specializeRepository";
import SpecializeFilterPane from "../../../Components/Admin/SpecializeFilterPane";

const Specialize = () => {
  const [specializeList, setSpecializeList] = useState([]);
  const [specializeQuery, setSpecializeQuery] = useState({});
  const [isVisibleLoading, setIsVisibleLoading] = useState(true);
  let stt = 1;

  useEffect(() => {
    document.title = "Danh sách chuyên ngành";
    getSpecialize().then((data) => {
      if (data) {
        setSpecializeQuery((pre) => {
          return { ...pre, to: "/admin/specialize" };
        });
        setSpecializeList(data);
      } else setSpecializeList([]);
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
            {specializeList && specializeList.length > 0 ? (
              specializeList.map((item, index) => (
                <tr key={index}>
                  <td>{stt++}</td>
                  <td>{item.specialization_name}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <Link
                        to={`/admin/specialize/edit/${item.id}`}
                        className="text-bold px-2"
                      >
                        Sửa
                        <span className="small"></span>
                      </Link>
                      <Button variant="danger">Xoá</Button>
                    </div>
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
