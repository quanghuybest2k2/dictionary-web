const Index = () => {
  return (
    <div class="container-fluid">
      {/* <!-- Content Row --> */}
      <div class="row">
        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Tổng số từ vựng
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">12</div>
                </div>
                <div class="col-auto">
                  <i class="fa fa-clipboard fs-2" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Số lượng chuyên ngành
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">2</div>
                </div>
                <div class="col-auto">
                  <i class="fa fa-check-square fs-2" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Số lượng từ loại
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">4</div>
                </div>
                <div class="col-auto">
                  <i class="fa fa-eye fs-2" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
