import dataPerijinan from "@/data/dataPerijinan"

export default function page(params) {

  return (
    <div class="container-fluid p-3">
      <div class="bg-white p-3">
        <div class="">
          <h4>Surat Perijinan</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maiores.</p>
        </div>
        <div class="d-flex flex-wrap">
          {
            dataPerijinan.map(val => (
              <div class="col-3 p-2">
                <div class="card h-100">
                  <div class="card-body d-flex flex-column justify-content-around">
                    <div class="">
                      <h5 class="card-title">{val.judul}</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">{val.tanggal}</h6>
                    </div>
                    <p class="card-text">{val.desk}</p>
                    <div class="">
                      <p>Pengaju : {val.pengaju}</p>
                      <a href="#" class="card-link">Lihat Surat</a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};
