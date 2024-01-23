import SearchBar from "@/components/SearchBar"
import dataPerijinan from "@/data/dataPerijinan"

export default function page(params) {

  return (
    <div class="container-fluid text-black p-3">
      <div class="bg-white p-3">
        <div class="">
          <h4 className="fw-bold">Surat Perijinan</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maiores.</p>
          <div class="text-center my-4">
            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 w-50 navbar-search" >
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Cari surat sesuai dengan nama pengajuan" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-primary" type="button" id="button-addon2">Cari surat</button>
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
