import '../../styles/page.login.css';
export default function page({ params }) {
  return (
    <div class="bg-login min-vh-100 d-flex justify-content-center align-items-center">
      <div class="d-flex bg-white shadow-sm w-75 rounded" style={{ height: '80vh' }}>
        <div class="col content-login d-flex flex-column justify-content-between text-black px-5 py-4">
          <div class="mt-4">
            <p className='text-uppercase'>Pemerintahan Desa Panjeng</p>
          </div>
          <div class="">
            <h1 className='fw-bold mb-4 '>Lorem ipsum, dolor sit amet</h1>
            <p className='lh-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque aspernatur corporis eius nesciunt rerum error repellat eaque, dolorum sunt praesentium.</p>
          </div>
          <div class=""></div>
        </div>
        <div class="col d-flex flex-column justify-content-around text-black px-5 py-4">
          <div class="">
            <a class="link-offset-2 link-underline link-underline-opacity-0 d-flex align-items-center" href="/">
              <i class="fas fa-chevron-left mr-2"></i>
              Kembali ke beranda
            </a>
          </div>
          <div class="">
            <div class="mb-4" style={{ fontSize: '15px' }}>
              <h3 className='fw-bold'>Login</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <form action="">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input class="form-control" type="email" id="email" placeholder='Masukkan email' style={{ fontSize: '15px' }} />
              </div>
              <div class="mb-5">
                <label for="password" class="form-label">Password</label>
                <input class="form-control" type="password" id="password" placeholder='Masukkan password' style={{ fontSize: '15px' }} />
              </div>
              <div class="mb-3">
                <button type="button" className='btn btn-primary w-100 d-flex justify-content-between align-items-center shadow-sm' style={{ fontSize: '15px' }}>
                  <p className='m-0'>Login</p>
                  <i class="fas fa-sign-in-alt"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};
