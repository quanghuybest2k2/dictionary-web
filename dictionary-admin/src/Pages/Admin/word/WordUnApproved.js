import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Loading from "../../../Components/Loading";
import { getWordUnApproved } from "../../../Services/wordRepository";

const WordUnApproved = () => {
  const [wordUnApprovedList, setWordUnApprovedList] = useState([]);
  const [wordUnApprovedQuery, setWordUnApprovedQuery] = useState({});
  const [isVisibleLoading, setIsVisibleLoading] = useState(true);
  let stt = 1;

  useEffect(() => {
    document.title = "Danh sách từ chưa duyệt";
    getWordUnApproved().then((data) => {
      if (data) {
        setWordUnApprovedQuery((pre) => {
          return { ...pre, to: "/admin/word-unapproved" };
        });
        setWordUnApprovedList(data);
      } else setWordUnApprovedList([]);
      setIsVisibleLoading(false);
    });
  }, []);

  return (
    <>
      <h1>Danh sách từ chưa duyệt</h1>
      {isVisibleLoading ? (
        <Loading />
      ) : (
        <Table striped responsive bordered>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên từ</th>
              <th>Phiên âm</th>
              <th>Đồng nghĩa</th>
              <th>Trái nghĩa</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {wordUnApprovedList && wordUnApprovedList.length > 0 ? (
              wordUnApprovedList.map((item, index) => (
                <tr key={index}>
                  <td>{stt++}</td>
                  <td>{item.word_name}</td>
                  <td>{item.pronunciations}</td>
                  <td>{item.synonymous}</td>
                  <td>{item.antonyms}</td>
                  <td>{item.status === 0 ? "Chưa duyệt" : "Đã duyệt"}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <Link
                        to={`/admin/specialize-unapproved/edit/${item.id}`}
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
                    Không tìm thấy từ vựng
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
export default WordUnApproved;
