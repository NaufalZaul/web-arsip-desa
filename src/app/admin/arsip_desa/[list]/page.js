import SearchBar from "@/components/SearchBar"
import dataPerijinan from "@/data/dataPerijinan"

export default function page(params) {

  return (
    <div class="container-fluid text-black p-3">
      <div class="bg-white p-3">
        <div class="">
          <h4 className="fw-bold">Surat Perijinan</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maiores.</p>
          <div class="text-center my-3">
            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search w-50" >
              <div class="input-group">
                <input
                  type="text"
                  class="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-info" type=" button">
                    <i class="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="d-flex flex-wrap">
          {
            dataPerijinan.map(val => (
              <div class="col-4 p-2">
                <div class="card border-0 shadow-sm h-100">
                  <div class="card-body d-flex flex-column justify-content-around p-0">
                    <div class="px-3 py-2 rounded-top" style={{ backgroundColor: '#f3f4f6' }}>
                      <p class="card-title mb-1 fw-semibold" style={{ fontSize: '17px' }}>{val.judul}</p>
                      <p class="card-subtitle mb-2 text-body-secondary">{val.tanggal}</p>
                    </div>
                    <div class="p-3">
                      <p class="card-text">{val.desk}</p>
                    </div>
                    <div class="p-3">
                      <button type="button" className="btn btn-primary px-3" style={{ fontSize: '15px' }}>Lihat Surat</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div class="my-4">
          <nav aria-label="...">
            <ul class="pagination justify-content-center mb-0">
              <li class="page-item disabled">
                <a class="page-link" style={{ fontSize: '13px' }}>Previous</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#" style={{ fontSize: '13px' }}>1</a>
              </li>
              <li class="page-item" aria-current="page">
                <a class="page-link" href="#" style={{ fontSize: '13px' }}>2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" style={{ fontSize: '13px' }}>3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" style={{ fontSize: '13px' }}>Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
};
