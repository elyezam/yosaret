// Shared nav HTML - injected into every page
const NAV_HTML = `
<div class="ticker-bar">
  <div class="ticker-label"><span class="ticker-dot"></span> SON DAKİKA</div>
  <div class="ticker-track">
    <div class="ticker-inner">
      <span>YÖS 2026 başvuru takvimi açıklandı – 10 Şubat başlıyor</span>
      <span>ÖSYM 2026 sınav ücretleri güncellendi</span>
      <span>YÖS 2026 sınav tarihi: 21 Haziran 2026</span>
      <span>Yeni sınav merkezleri eklendi – 52 ülke</span>
      <span>2025 YÖS sonuçları açıklandı – sorgulama aktif</span>
      <span>YÖS 2026 kılavuzu yayımlandı</span>
      <span>YÖS 2026 başvuru takvimi açıklandı – 10 Şubat başlıyor</span>
      <span>ÖSYM 2026 sınav ücretleri güncellendi</span>
      <span>YÖS 2026 sınav tarihi: 21 Haziran 2026</span>
      <span>Yeni sınav merkezleri eklendi – 52 ülke</span>
      <span>2025 YÖS sonuçları açıklandı – sorgulama aktif</span>
      <span>YÖS 2026 kılavuzu yayımlandı</span>
    </div>
  </div>
</div>
<nav>
  <a class="nav-logo" href="index.html">Yösar<span>ete</span></a>
  <button class="nav-hamburger" onclick="toggleMobileNav()" id="hamburger">☰</button>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html" data-page="index">Ana Sayfa</a></li>
    <li><a href="sondakika.html" data-page="sondakika">Son Dakika <span class="nav-badge">CANLI</span></a></li>
    <li><a href="nethesapla.html" data-page="nethesapla">Net Hesapla</a></li>
    <li><a href="universiteler.html" data-page="universiteler">Üniversiteler</a></li>
    <li><a href="magaza.html" data-page="magaza">Mağaza</a></li>
    <li><a href="index.html#hakkimda" data-page="">Hakkımda</a></li>
  </ul>
</nav>`;

function injectNav(activePage) {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === activePage) a.classList.add('active');
  });
}

function toggleMobileNav() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}
