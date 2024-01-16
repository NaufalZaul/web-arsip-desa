export default function SidebarAdmin() {
  return (
    <ul
      class="navbar-nav bg-gradient-info sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div class="sidebar-brand d-flex align-items-center justify-content-center">
        <div class="text-center d-none d-md-inline">
          <button className="border-0 bg-transparent text-white m-0" id="sidebarToggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <h6 class="sidebar-brand-text mx-1 mb-0" style={{ fontSize: '18px' }}>Administrator</h6>
      </div>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item active fs-3">
        <a class="nav-link" href="/admin">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span className="fw-normal mx-2" style={{ fontSize: '16px' }}>Dashboard</span></a
        >
      </li>
      <hr class="sidebar-divider" />
      <div class="sidebar-heading" style={{ fontSize: '13px' }}>MANAJEMEN DATA</div>
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <i class="fas fa-info-circle" style={{ fontSize: '17px' }}></i>
          <span className="fw-normal mx-2" style={{ fontSize: '16px' }}>Informasi Desa</span>
        </a>
        <div
          id="collapseOne"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            {/* <h6 class="collapse-header">Custom Components:</h6> */}
            <a class="collapse-item" href="/admin/identitas">Identitas Desa</a>
            <hr class="dropdown-divider" />
            <a class="collapse-item" href="/admin/keanggotaan">Perangkat Desa</a>
          </div>
        </div>
      </li>
      {/* <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-folder-open"></i>
          <span className="fw-normal mx-2" style={{ fontSize: '16px' }}>Pengelolaan Data</span>
        </a>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded text-capitalize">
            <a class="collapse-item" href="/admin/pengelolaan">kelola surat</a>
            <hr class="dropdown-divider" />
            <a class="collapse-item" href="/admin/cetak_surat">cetak surat</a>
          </div>
        </div>
      </li> */}
      <li class="nav-item">
        <a
          class="nav-link collapsed" href="/admin/arsip_desa"        >
          <i class="fas fa-folder-open"></i>
          <span className="fw-normal mx-2" style={{ fontSize: '16px' }}>Pengarsipan</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="/admin/pengelolaan"
        >
          <i class="fas fa-folder-open"></i>
          <span className="fw-normal mx-2" style={{ fontSize: '16px' }}>Pengelolaan</span>
        </a>
      </li>

      {/* <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i class="fas fa-user-cog"></i>
          <span className="fw-normal mx-2" style={{ fontSize: '16px' }}>Pengunjung</span>
        </a>
        <div
          id="collapseUtilities"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <a class="collapse-item" href="/kelola_pengguna">Kelola pengguna</a>
            <hr class="dropdown-divider" />
            <a class="collapse-item" href="/kelola_akun">Kelola akun</a>
          </div>
        </div>
      </li> */}
      <hr class="sidebar-divider d-none d-md-block" />
    </ul>
  )
};
