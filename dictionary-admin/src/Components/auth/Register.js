import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };
    // bảo vệ @cfrs
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`register`, data).then((res) => {
        // axios.post(`http://127.0.0.1:8000/api/v1/register`, data).then(res => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          swal("Success", res.data.message, "success");
          navigate("/");
        } else {
          setRegister({
            ...registerInput,
            error_list: res.data.validator_errors,
          });
        }
      });
    });
  };

  return (
    <div className="container p-5 mt-5">
      <div className="row border shadow p-3 mb-5 bg-body rounded">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <h1 className="text-center text-uppercase py-3">Đăng ký</h1>
          <form onSubmit={registerSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="name"
                onChange={handleInput}
                value={registerInput.name}
                className="form-control"
              />
              <label>Họ và tên</label>
              <span className="text-danger">
                {registerInput.error_list.name}
              </span>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="email"
                onChange={handleInput}
                value={registerInput.email}
                className="form-control"
              />
              <label>Email</label>
              <span className="text-danger">
                {registerInput.error_list.email}
              </span>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="password"
                onChange={handleInput}
                value={registerInput.password}
                className="form-control"
              />
              <label>Mật khẩu</label>
              <span className="text-danger">
                {registerInput.error_list.password}
              </span>
            </div>
            <div className="d-grid col-6 mx-auto">
              <button type="submit" className="btn btn-primary btn-lg">
                Đăng ký
              </button>
            </div>
          </form>
          <div className="d-flex justify-content-between mt-5">
            <p>Bạn đã có tài khoản rồi?</p>
            <Link to="/login" className="link-hover float-end">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
