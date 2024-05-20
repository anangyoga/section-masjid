"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <section className="bg-gradient-to-b from-[#a2b5d5] to-[#dadad8]">
      <div className="w-full relative">
        <img src="/istiqlal.webp" alt="Masjid Istiqlal" className="w-full relative sm:h-[500px] object-cover object-center " />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/55"></div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl text-center text-3xl font-bold leading-snug text-white lg:text-4xl xl:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Masjid Penuh Simbol
        </motion.h2>
      </div>
      <div className="mx-auto max-w-[65ch] py-8 flex flex-col gap-5 px-4">
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          Jika kawan GNFI datang ke Masjid Istiqlal, tidak banyak hiasan atau ornamen yang terlihat sehingga suasana yang dihasilkan cenderung lebih clean. Di bagian mihrab atau tempat imam terdapat kiswah, yakni bekas kain penutup ka’bah
          yang merupakan hadiah dari Raja Arab Saudi.
        </motion.p>
        <motion.img initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: "easeOut" }} src="/ragam-simbol-masjid.webp" alt="gambar-ragam-simbol-masjid" />
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          Masjid Istiqlal mengadopsi konsep bangunan tropis dengan tidak menggunakan jendela atau pintu sehingga udara dapat bebas masuk ke dalam masjid. Konsep itu digunakan untuk menciptakan kesan sejuk secara alami sehingga meminimalisir
          penggunaan AC.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          Masjid Istiqlal selain dikenal akan sejarahnya, juga dikenal dengan fasilitas yang sangat nyaman. Bahkan, setiap bagian dari bangunannya memiliki makna tersendiri. Karena masjid ini adalah wujud rasa syukur atas kemerdekaan,
          banyak simbol-simbol dalam Masjid Istiqlal yang merujuk pada keislaman dan keindonesiaan.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          “Desain arsitektur Masjid Istiqlal ini mengandung beberapa simbol terkait dengan nilai-nilai Islam atau simbol-simbol Islam, dan juga terkait nilai-nilai atau simbol negara,” papar Saparwadi.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          Masjid Istiqlal tersusun dalam lima lantai yang merupakan lambang dari Rukun Islam. Lima lantai masjid juga merujuk pada Dasar Negara Republik Indonesia, yakni Pancasila. Kelima lantai tersebut disangga oleh tiang-tiang dengan
          berbagai ukuran.
        </motion.p>
        <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: "easeOut" }} src="/lima-lantai.webp" alt="gambar-masjid-lima-lantai" />
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          Tiang berukuran kecil berjumlah sekitar 4 ribu, sedangkan tiang yang berukuran besar berjumlah 12 buah. Angka 12 tersebut merujuk pada tanggal lahir Nabi Muhammad SAW, yakni 12 Rabiul Awwal.
        </motion.p>
        <motion.img initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: "easeOut" }} src="/tiang-raksasa.webp" alt="gambar-tiang-raksasa" />
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          Dari luar, Masjid Istiqlal juga terlihat kubah besar di bagian atas bangunan. Itu adalah kubah utama dengan diameter 45 meter yang merujuk pada tahun kemerdekaan Republik Indonesia, yakni 1945. Selain itu, Masjid Istiqlal juga
          memiliki kubah kedua yang berdiameter 8 meter. Angka tersebut menunjukkan bahwa Kemerdekaan Indonesia tepat pada bulan ke-8, yakni Agustus. Di atas kubah utama terdapat simbol bulan bintang dengan ketinggian 17 meter yang merujuk
          pada tanggal kemerdekaan Republik Indonesia.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          Sementara itu, menara Masjid Istiqlal hanya satu ini menunjukkan bahwa Allah itu esa. Tingginya yang 6666 cm atau 66,66 meter melambangkan jumlah ayat Al Qur’an, dengan bentuk seperti obor atau lilin yang merepresentasikan bahwa
          Masjid Istiqlal berfungsi sebagai cahaya penunjuk jalan. Di bagian puncak menara terdapat besi anti petir dengan ketinggian 30 meter yang merujuk pada jumlah juz dalam Al Qur’an.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          Jika ditotal, menara Masjid Istiqlal memiliki ketinggian 114 meter yang menyimbolkan jumlah surat dalam Al Qur’an.
        </motion.p>
        <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: "easeOut" }} src="/info.webp" alt="gambar-info" />
      </div>
    </section>
  );
}
