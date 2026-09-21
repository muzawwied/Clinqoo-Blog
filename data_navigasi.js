// Clincoo Blog — Data kategori: navigasi
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["navigasi"] = {
  names: { "id": "Navigasi", "en": "Navigation" },
  flag: "🧭",
  articles: [
    {
      id: "nav-link-halaman-aktif-jelas",
      langs: {
        "id": {
          title: "Tandai Tautan Halaman Aktif pada Menu Clincoo",
          desc: "Pengunjung perlu tahu di halaman mana mereka berada. Tambahkan kelas aktif pada tautan saat ini.",
          content: '<p class="mb-4">Menu Clincoo yang semua tautannya sama membuat pengguna ragu apakah mereka sudah di Halaman Layanan atau masih di Beranda.</p><p class="mb-4">Tambahkan kelas is-active pada tautan yang cocok dengan path halaman. Bedakan warna atau ketebalan, bukan hanya hover.</p><p class="mb-4">Cek setiap halaman di editor.clincoo.buzz. Satu tautan aktif, yang lain biasa. Jangan biarkan dua item menyala.</p><p class="mb-4">Minta AI menambah kelas pada satu file menu. Tolak skrip deteksi path yang memuat pustaka routing.</p><p class="mb-4">Clincoo menayangkan HTML statis. Penanda aktif adalah kelas yang kamu tulis per halaman.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Mark the Active Page Link in a Clincoo Menu",
          desc: "Visitors need to know which page they are on. Add an active class to the current link.",
          content: '<p class="mb-4">A Clincoo menu where every link looks the same leaves people unsure whether they are on Services or still on Home.</p><p class="mb-4">Add an is-active class on the link that matches the page path. Change color or weight, not only hover.</p><p class="mb-4">Check every page in editor.clincoo.buzz. One link should be active, the others plain. Do not light two items.</p><p class="mb-4">Ask the AI to add the class in one menu file. Refuse a path-detection script that pulls a routing library.</p><p class="mb-4">Clincoo serves static HTML. The active mark is a class you write per page.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
