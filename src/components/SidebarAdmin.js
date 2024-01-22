'use client';
import { usePathname } from "next/navigation"


export default function SidebarAdmin() {
  const handleActiveMenu = (menu) => (
    usePathname() == menu ? 'active' : null
  )
  return (
    <ul
      class="navbar-nav sidebar sidebar-dark accordion bg-dark-teal"
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
      <li class={`nav-item ${handleActiveMenu('/admin')}`}>
        <a class="nav-link" href="/admin">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span className="fw-normal mx-2" style={{ fontSize: '16px' }}>Dashboard</span></a
        >
      </li>
      <hr class="sidebar-divider" />
      <div class="sidebar-heading" style={{ fontSize: '13px' }}>MANAJEMEN DATA</div>
      <li class={`nav-item ${handleActiveMenu('/admin/identitas') || handleActiveMenu('/admin/keanggotaan')}`}>
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
            <a class={`collapse-item ${handleActiveMenu('/admin/identitas')}`} href="/admin/identitas">Identitas Desa</a>
            <hr class="dropdown-divider" />
            <a class={`collapse-item ${handleActiveMenu('/admin/keanggotaan')}`} href="/admin/keanggotaan">Perangkat Desa</a>
          </div>
        </div>
      </li>
      <li class={`nav-item ${handleActiveMenu('/admin/arsip_desa')}`}>
        <a
          class="nav-link collapsed" href="/admin/arsip_desa">
          <i class="fas fa-folder-open"></i>
          <span className="fw-normal mx-2" style={{ fontSize: '16px' }}>Pengarsipan</span>
        </a>
      </li>
      <li class={`nav-item ${handleActiveMenu('/admin/pengelolaan')}`}>
        <a
          class="nav-link collapsed"
          href="/admin/pengelolaan"
        >
          <i class="fas fa-folder-open"></i>
          <span className="fw-normal mx-2" style={{ fontSize: '16px' }}>Pengelolaan</span>
        </a>
      </li>

      <hr class="sidebar-divider d-none d-md-block" />
    </ul>
  )
};
