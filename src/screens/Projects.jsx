<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dokumentasi Flow Registrasi SeaBank</title>
    <style>
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        /* CSS Variables for easy theme management */
        :root {
            --primary-color: #FF7426; /* Warna oranye khas SeaBank */
            --dark-color: #2F3542;
            --light-color: #F7F8FA;
            --gray-color: #747D8C;
            --white-color: #FFFFFF;
            --border-color: #EAECEF;
            --border-radius: 12px;
            --shadow: 0 4px 25px rgba(47, 53, 66, 0.08);
        }

        /* General Reset and Body Styling */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--light-color);
            color: var(--dark-color);
            line-height: 1.7;
        }

        /* Container for the main content */
        .container {
            max-width: 850px;
            margin: 2rem auto;
            padding: 2rem;
        }

        /* Header Styling */
        header {
            text-align: center;
            margin-bottom: 3rem;
        }

        header h1 {
            color: var(--primary-color);
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        header p {
            color: var(--gray-color);
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
        }

        /* Main content styling */
        main {
            display: grid;
            gap: 2rem;
        }

        /* Step Card Styling */
        .step {
            background-color: var(--white-color);
            border-radius: var(--border-radius);
            padding: 2rem;
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .step:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(47, 53, 66, 0.12);
        }

        .step-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .step-number {
            background-color: var(--primary-color);
            color: var(--white-color);
            font-weight: 700;
            font-size: 1.2rem;
            min-width: 40px;
            height: 40px;
            display: grid;
            place-items: center;
            border-radius: 50%;
        }

        .step h2 {
            color: var(--dark-color);
            font-size: 1.5rem;
            font-weight: 600;
        }

        .step p {
            margin-bottom: 1rem;
            color: var(--gray-color);
        }

        .step ul {
            list-style-type: none;
            padding-left: 0;
        }

        .step ul li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 0.75rem;
        }

        .step ul li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--primary-color);
            font-weight: bold;
        }

        .step ul ul {
            margin-top: 0.75rem;
            padding-left: 20px;
        }

        .step ul ul li::before {
             content: '•';
        }

        strong {
            color: var(--dark-color);
            font-weight: 600;
        }

        /* Footer Styling */
        footer {
            text-align: center;
            margin-top: 3rem;
            padding-top: 1.5rem;
            border-top: 1px solid var(--border-color);
            font-size: 0.9rem;
            color: var(--gray-color);
        }
        
        footer code {
            background-color: #e0e0e0;
            padding: 2px 5px;
            border-radius: 4px;
        }

        /* Download Button Styling */
        #download-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--primary-color);
            color: var(--white-color);
            border: none;
            border-radius: var(--border-radius);
            padding: 12px 20px;
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 116, 38, 0.4);
            transition: background-color 0.3s ease, transform 0.3s ease;
            z-index: 1000;
        }

        #download-btn:hover {
            background-color: #e6601a;
            transform: translateY(-2px);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 1rem;
                margin: 1rem auto;
            }
            
            header h1 {
                font-size: 2rem;
            }
            
            header p {
                font-size: 1rem;
            }
            
            .step {
                padding: 1.5rem;
            }
            
            #download-btn {
                padding: 10px 15px;
                font-size: 0.9rem;
                bottom: 20px;
                right: 20px;
                top: auto;
            }
        }
        
        /* Print-specific styles to hide button */
        @media print {
            #download-btn, footer {
                display: none;
            }
            body {
                background-color: var(--white-color);
            }
            .container {
                margin: 0;
                padding: 0;
                max-width: 100%;
            }
            .step {
                box-shadow: none;
                border: 1px solid #ccc;
                page-break-inside: avoid;
            }
        }

    </style>
</head>
<body>

    <!-- Tombol Download PDF -->
    <button id="download-btn" title="Download halaman ini sebagai PDF">
        Download PDF
    </button>

    <div class="container">
        <header>
            <h1>Flow Registrasi SeaBank</h1>
            <p>Dokumentasi langkah demi langkah untuk membuka rekening SeaBank berdasarkan alur di aplikasi.</p>
        </header>

        <main>
            <!-- Step 1: Pendaftaran -->
            <section class="step">
                <div class="step-header">
                    <div class="step-number">1</div>
                    <h2>Pendaftaran Akun</h2>
                </div>
                <p>Langkah pertama adalah mendaftar menggunakan nomor handphone atau akun Shopee.</p>
                <ul>
                    <li>Pilih opsi <strong>"Daftar dengan nomor handphone"</strong>.</li>
                    <li>Masukkan nomor handphone aktif Anda yang diawali dengan +62.</li>
                    <li>Masukkan kode referral <strong>"SALES"</strong> pada kolom yang tersedia.</li>
                    <li>Ambil tangkapan layar (screenshot) dari halaman ini setelah mengisi data.</li>
                </ul>
            </section>

            <!-- Step 2: OTP & Password -->
            <section class="step">
                <div class="step-header">
                    <div class="step-number">2</div>
                    <h2>Verifikasi OTP & Password</h2>
                </div>
                <p>Setelah mendaftarkan nomor handphone, sistem akan mengirimkan kode verifikasi (OTP) melalui SMS.</p>
                <ul>
                    <li>Masukkan 6 digit kode OTP yang Anda terima.</li>
                    <li>Selanjutnya, buat password yang aman untuk akun Anda.</li>
                    <li><strong>Ketentuan Password:</strong>
                        <ul>
                            <li>Terdiri dari 8-16 karakter.</li>
                            <li>Harus mengandung kombinasi huruf dan angka.</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <!-- Step 3: Verifikasi e-KTP -->
            <section class="step">
                <div class="step-header">
                    <div class="step-number">3</div>
                    <h2>Verifikasi e-KTP</h2>
                </div>
                <p>Siapkan e-KTP Anda untuk verifikasi identitas. Proses ini penting untuk membuka rekening SeaBank.</p>
                <ul>
                    <li>Posisikan e-KTP Anda di dalam bingkai yang telah disediakan.</li>
                    <li>Pastikan foto e-KTP terlihat jelas dan berada di tempat dengan pencahayaan yang cukup.</li>
                    <li>Sistem akan secara otomatis memindai dan mengekstrak data dari e-KTP Anda.</li>
                </ul>
            </section>

            <!-- Step 4: Verifikasi Wajah -->
            <section class="step">
                <div class="step-header">
                    <div class="step-number">4</div>
                    <h2>Verifikasi Wajah</h2>
                </div>
                <p>Untuk alasan keamanan, langkah selanjutnya adalah verifikasi wajah untuk memastikan data sesuai dengan pemilik akun.</p>
                <ul>
                    <li>Posisikan wajah Anda di dalam bingkai yang tersedia.</li>
                    <li><strong>Perhatikan hal berikut:</strong>
                        <ul>
                            <li>Jangan menggunakan aksesoris yang menutupi wajah (kacamata, topi, masker).</li>
                            <li>Pastikan pencahayaan cukup dan tidak ada orang lain dalam frame.</li>
                        </ul>
                    </li>
                </ul>
            </section>
            
            <!-- Step 5: Informasi Tambahan & PIN -->
            <section class="step">
                <div class="step-header">
                    <div class="step-number">5</div>
                    <h2>Informasi Tambahan & PIN</h2>
                </div>
                <p>Lengkapi beberapa informasi pribadi tambahan untuk menyesuaikan layanan dengan kebutuhan Anda.</p>
                <ul>
                    <li><strong>Informasi Penghasilan & Kekayaan:</strong> Isi sumber penghasilan, pekerjaan, dan jumlah pendapatan bulanan.</li>
                    <li><strong>Informasi Tambahan:</strong> Masukkan nama ibu kandung sesuai data.</li>
                    <li>Setelah itu, buat <strong>PIN 6 digit</strong> yang akan digunakan untuk validasi login dan transaksi.</li>
                </ul>
            </section>

            <!-- Step 6: Syarat & Ketentuan -->
            <section class="step">
                <div class="step-header">
                    <div class="step-number">6</div>
                    <h2>Persetujuan Syarat & Ketentuan</h2>
                </div>
                <p>Sebelum menyelesaikan, baca dan setujui Syarat & Ketentuan yang berlaku untuk dapat melanjutkan proses.</p>
                <ul>
                    <li>Centang semua kotak persetujuan terkait Persyaratan Layanan, Kebijakan Privasi, dan penawaran produk.</li>
                    <li>Klik "Lanjut" untuk menyelesaikan proses pendaftaran.</li>
                </ul>
            </section>

            <!-- Step 7: Screenshot Dashboard -->
            <section class="step">
                <div class="step-header">
                    <div class="step-number">7</div>
                    <h2>Screenshot Dashboard Utama</h2>
                </div>
                <p>Setelah proses registrasi selesai dan akun Anda aktif, mohon lakukan langkah berikut:</p>
                <ul>
                    <li>Buka aplikasi SeaBank dan login ke akun Anda.</li>
                    <li>Ambil tangkapan layar (screenshot) dari halaman <strong>dashboard utama</strong>.</li>
                    <li>Pastikan screenshot menampilkan <strong>nama lengkap</strong> dan <strong>saldo rekening</strong> Anda dengan jelas.</li>
                </ul>
            </section>
            
            <!-- Step 8: Screenshot Notifikasi -->
            <section class="step">
                <div class="step-header">
                    <div class="step-number">8</div>
                    <h2>Screenshot Notifikasi</h2>
                </div>
                <p>Sebagai bukti pembukaan rekening telah berhasil, mohon kirimkan screenshot notifikasi.</p>
                <ul>
                    <li>Masuk ke menu <strong>"Notifikasi"</strong> atau <strong>"Pesan"</strong> di dalam aplikasi.</li>
                    <li>Cari notifikasi yang berjudul <strong>"Pembukaan rekening berhasil!"</strong>.</li>
                    <li>Ambil tangkapan layar (screenshot) dari notifikasi tersebut.</li>
                </ul>
            </section>

            <!-- Step 9: Selesai -->
            <section class="step">
                <div class="step-header">
                    <div class="step-number">9</div>
                    <h2>Registrasi Berhasil!</h2>
                </div>
                <p>Selamat! Rekening SeaBank Anda telah berhasil dibuat. Anda kini dapat mulai menabung, bertransaksi, dan menikmati berbagai keuntungan.</p>
                <ul>
                    <li>Bunga tabungan yang kompetitif.</li>
                    <li>Gratis biaya transfer antarbank.</li>
                    <li>Kemudahan transaksi terintegrasi dengan Shopee.</li>
                </ul>
            </section>
        </main>
        
        <footer>
            <p>Dokumentasi ini dibuat berdasarkan file <code>flowregistseabank.pdf</code>.</p>
        </footer>
    </div>

    <!-- JavaScript untuk fungsionalitas tombol download -->
    <script>
        document.getElementById('download-btn').addEventListener('click', function() {
            // This function triggers the browser's print dialog
            window.print();
        });
    </script>
</body>
</html>
