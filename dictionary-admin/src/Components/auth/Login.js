import React, { useState } from "react";

import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import config from "../../../config";

function Login() {
  document.title = "Đăng nhập";
  const navigate = useNavigate();

  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios
      .get("/sanctum/csrf-cookie", {
        baseURL: config.BASE_URL, // ghi đề base url của axios
      })
      .then((response) => {
        axios.post(`login`, data).then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem("auth_token", res.data.token);
            localStorage.setItem("auth_name", res.data.username);
            swal("Success", res.data.message, "success");
            if (res.data.role === "admin") {
              navigate("/admin/dashboard");
            } else {
              navigate("/");
            }
          } else if (res.data.status === 401) {
            swal("Warning", res.data.message, "warning");
          } else {
            setLogin({ ...loginInput, error_list: res.data.validator_errors });
          }
        });
      });
  };

  return (
    <div className="container p-5 mt-5">
      <div className="row border shadow p-3 mb-5 bg-body rounded">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <h1 className="text-center text-uppercase py-3">Đăng nhập</h1>
          <form onSubmit={loginSubmit}>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                onChange={handleInput}
                value={loginInput.email}
                className="form-control"
              />
              <label>Email</label>
              <span className="text-danger">{loginInput.error_list.email}</span>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                onChange={handleInput}
                value={loginInput.password}
                className="form-control"
              />
              <label>Mật khẩu</label>
              <span className="text-danger">
                {loginInput.error_list.password}
              </span>
            </div>
            <div className="d-grid col-6 mx-auto">
              <button type="submit" className="btn btn-primary btn-lg">
                Đăng nhập
              </button>
            </div>
          </form>
          <div class="d-flex justify-content-between mt-5">
            <Link to="#" class="link-dark col-6">
              Quên mật khẩu?
            </Link>
            <p>Bạn chưa có tài khoản?</p>
            <Link to="/register" class="link-hover">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
