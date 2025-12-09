import './page.css';

export default function Home() {
  return (
    <main className="kasir-container">
      <div className="kasir-wrapper">
        {/* Hero Section */}
        <div className="kasir-hero">
          <div className="kasir-hero-content">
            <div className="kasir-badge">
              <span className="badge-icon">💳</span>
              <span>Sistem Kasir Modern</span>
            </div>
            <h1 className="kasir-title">
              Kelola Transaksi dengan
              <span className="title-highlight"> Mudah & Cepat ya</span>
            </h1>
            <p className="kasir-subtitle">
              Sistem kasir terintegrasi untuk meningkatkan efisiensi bisnis Anda. 
              Transaksi lebih cepat, laporan real-time, dan manajemen inventori yang mudah.
            </p>
            <div className="kasir-cta">
              <button className="cta-primary">Coba Gratis</button>
              <button className="cta-secondary">Lihat Demo</button>
            </div>
            <div className="kasir-stats">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Pengguna Aktif</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500K+</div>
                <div className="stat-label">Transaksi/Bulan</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
          <div className="kasir-hero-visual">
            <div className="visual-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="card-title">Sistem Kasir</div>
              </div>
              <div className="card-content">
                <div className="receipt-preview">
                  <div className="receipt-header">STRUK PEMBELIAN</div>
                  <div className="receipt-items">
                    <div className="receipt-item">
                      <span>Produk A</span>
                      <span>Rp 50.000</span>
                    </div>
                    <div className="receipt-item">
                      <span>Produk B</span>
                      <span>Rp 75.000</span>
                    </div>
                    <div className="receipt-item">
                      <span>Produk C</span>
                      <span>Rp 30.000</span>
                    </div>
                  </div>
                  <div className="receipt-divider"></div>
                  <div className="receipt-total">
                    <span>Total</span>
                    <span>Rp 155.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="kasir-features">
          <div className="features-header">
            <h2 className="features-title">Fitur Unggulan</h2>
            <p className="features-subtitle">
              Semua yang Anda butuhkan untuk mengelola bisnis dengan lebih baik
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Transaksi Cepat</h3>
              <p className="feature-text">
                Proses pembayaran hanya dalam hitungan detik. Antrian lebih cepat, 
                pelanggan lebih puas.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Laporan Real-time</h3>
              <p className="feature-text">
                Pantau penjualan, stok, dan keuntungan secara real-time. 
                Data selalu update setiap saat.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3 className="feature-title">Manajemen Inventori</h3>
              <p className="feature-text">
                Kelola stok barang dengan mudah. Notifikasi otomatis saat stok menipis.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3 className="feature-title">Multi Payment</h3>
              <p className="feature-text">
                Terima pembayaran tunai, kartu, e-wallet, dan QR code dalam satu sistem.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Multi User</h3>
              <p className="feature-text">
                Kelola tim kasir dengan akses berbeda. Pantau performa setiap kasir.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3 className="feature-title">Cloud Sync</h3>
              <p className="feature-text">
                Data tersimpan aman di cloud. Akses dari mana saja, kapan saja.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="kasir-benefits">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2 className="benefits-title">Mengapa Pilih Sistem Kasir Kami?</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <div>
                    <h4>Mudah Digunakan</h4>
                    <p>Interface yang intuitif, tidak perlu training lama</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <div>
                    <h4>Harga Terjangkau</h4>
                    <p>Paket mulai dari Rp 99.000/bulan, cocok untuk semua bisnis</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <div>
                    <h4>Support 24/7</h4>
                    <p>Tim support siap membantu kapan saja Anda butuhkan</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <div>
                    <h4>Update Berkala</h4>
                    <p>Fitur baru dan perbaikan rutin tanpa biaya tambahan</p>
                  </div>
                </div>
              </div>
              <button className="benefits-cta">Mulai Sekarang</button>
            </div>
            <div className="benefits-visual">
              <div className="visual-dashboard">
                <div className="dashboard-header">Dashboard</div>
                <div className="dashboard-stats">
                  <div className="dashboard-stat">
                    <div className="stat-label-small">Penjualan Hari Ini</div>
                    <div className="stat-value">Rp 2.450.000</div>
                  </div>
                  <div className="dashboard-stat">
                    <div className="stat-label-small">Transaksi</div>
                    <div className="stat-value">127</div>
                  </div>
                  <div className="dashboard-stat">
                    <div className="stat-label-small">Produk Terjual</div>
                    <div className="stat-value">342</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="kasir-cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Siap Meningkatkan Bisnis Anda?</h2>
            <p className="cta-text">
              Mulai gratis selama 14 hari. Tidak perlu kartu kredit.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary-large">Coba Gratis Sekarang</button>
              <button className="cta-secondary-large">Hubungi Sales</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
