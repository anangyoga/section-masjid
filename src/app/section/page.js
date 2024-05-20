"use client";

import { motion } from "framer-motion";

export default function Page() {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const paragraphs = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <section className="bg-gradient-to-b from-[#5a7b78] to-[#95c4dc]">
      <div className="w-full relative">
        <img src="/masjid-istiqlal.webp" alt="Masjid Istiqlal" className="w-full relative sm:h-[500px] object-cover object-center " />
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl text-center text-3xl font-bold leading-snug text-white lg:text-4xl xl:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2">
          Masjid Penuh Simbol
        </motion.h2>
      </div>
      <motion.div variants={variants} initial="hidden" animate="show" className="mx-auto max-w-[65ch] py-10 flex flex-col gap-5 ">
        <motion.p variants={paragraphs}>
          Jika kawan GNFI datang ke Masjid Istiqlal, tidak banyak hiasan atau ornamen yang terlihat sehingga suasana yang dihasilkan cenderung lebih clean. Di bagian mihrab atau tempat imam terdapat kiswah, yakni bekas kain penutup ka’bah
          yang merupakan hadiah dari Raja Arab Saudi.
        </motion.p>
        <motion.p variants={paragraphs}>
          Masjid Istiqlal mengadopsi konsep bangunan tropis dengan tidak menggunakan jendela atau pintu sehingga udara dapat bebas masuk ke dalam masjid. Konsep itu digunakan untuk menciptakan kesan sejuk secara alami sehingga meminimalisir
          penggunaan AC.
        </motion.p>
        <motion.p variants={paragraphs}>
          Masjid Istiqlal selain dikenal akan sejarahnya, juga dikenal dengan fasilitas yang sangat nyaman. Bahkan, setiap bagian dari bangunannya memiliki makna tersendiri. Karena masjid ini adalah wujud rasa syukur atas kemerdekaan,
          banyak simbol-simbol dalam Masjid Istiqlal yang merujuk pada keislaman dan keindonesiaan.
        </motion.p>
        <motion.p variants={paragraphs}>
          “Desain arsitektur Masjid Istiqlal ini mengandung beberapa simbol terkait dengan nilai-nilai Islam atau simbol-simbol Islam, dan juga terkait nilai-nilai atau simbol negara,” papar Saparwadi.
        </motion.p>
        <motion.p variants={paragraphs}>
          Masjid Istiqlal tersusun dalam lima lantai yang merupakan lambang dari Rukun Islam. Lima lantai masjid juga merujuk pada Dasar Negara Republik Indonesia, yakni Pancasila. Kelima lantai tersebut disangga oleh tiang-tiang dengan
          berbagai ukuran. Tiang berukuran kecil berjumlah sekitar 4 ribu, sedangkan tiang yang berukuran besar berjumlah 12 buah. Angka 12 tersebut merujuk pada tanggal lahir Nabi Muhammad SAW, yakni 12 Rabiul Awwal.
        </motion.p>
        <motion.p variants={paragraphs}>
          Dari luar, Masjid Istiqlal juga terlihat kubah besar di bagian atas bangunan. Itu adalah kubah utama dengan diameter 45 meter yang merujuk pada tahun kemerdekaan Republik Indonesia, yakni 1945. Selain itu, Masjid Istiqlal juga
          memiliki kubah kedua yang berdiameter 8 meter. Angka tersebut menunjukkan bahwa Kemerdekaan Indonesia tepat pada bulan ke-8, yakni Agustus. Di atas kubah utama terdapat simbol bulan bintang dengan ketinggian 17 meter yang merujuk
          pada tanggal kemerdekaan Republik Indonesia.
        </motion.p>
        <motion.p variants={paragraphs}>
          Sementara itu, menara Masjid Istiqlal hanya satu ini menunjukkan bahwa Allah itu esa. Tingginya yang 6666 cm atau 66,66 meter melambangkan jumlah ayat Al Qur’an, dengan bentuk seperti obor atau lilin yang merepresentasikan bahwa
          Masjid Istiqlal berfungsi sebagai cahaya penunjuk jalan. Di bagian puncak menara terdapat besi anti petir dengan ketinggian 30 meter yang merujuk pada jumlah juz dalam Al Qur’an.
        </motion.p>
        <motion.p variants={paragraphs}>Jika ditotal, menara Masjid Istiqlal memiliki ketinggian 114 meter yang menyimbolkan jumlah surat dalam Al Qur’an.</motion.p>
      </motion.div>
    </section>
  );
}
