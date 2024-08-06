import React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DefinisiSholatAsar, HeaderSholatAsar, Icon, KotakNiat, Rakaat1, TatacaraSholat, } from '../../assets/images';

const windowHeight = Dimensions.get('window').height;
const SholatAsar = () => {
  return (
    <ScrollView style={styles.container} backgroundColor="#FFD700">
      <View style={styles.contentContainer}>
        <ImageBackground source={Icon} style={styles.IconImage}>
          <View style={styles.header}>
            <Image source={HeaderSholatAsar} style={styles.headerImage} />
          </View>

          <View style={styles.imageContainer}>
            <Image source={DefinisiSholatAsar} style={styles.image} />
          </View>
          <Image source={TatacaraSholat} style={styles.imageTatacaraSholat} />
          <Image source={Rakaat1} style={styles.imageRakaat1} />
        </ImageBackground>

        {/* Niat */}
        <View style={styles.imageContainer}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat}>
            <Text style={styles.niatText}>1. Niat</Text>
            <Text style={styles.definisiniat}>
              Niat merupakan syarat shalat. Tidak sah shalat tanpa niat.
            </Text>
            <Text style={styles.bacaanniatText}>
              Bacaan Niat Sholat Dzuhur:
            </Text>
            <Text style={styles.ArabniatText}>
              اُصَلِّيْ فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعاَتٍ مُسْتَقْبِلَ
              الْقِبْلَةِ أَدَاءً لله تَعَالَى
            </Text>
            <Text style={styles.Artiniat}>
              Artinya: “aku niat sholat fardhu Dzuhur empat rakaat menghadap
              kiblat karena Allah ta’ala.”
            </Text>
          </ImageBackground>
        </View>

        {/* Takbiratul Ihram */}
        <View style={styles.imageContainer2}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat2}>
            <Text style={styles.takbiratulText}>2. Takbiratul Ihram</Text>
            <Text style={styles.Definisitakbiratul}>
              Gerakan takbir dilakukan untuk memulai shalat dengan mengucapkan
              kalimat, Allahu akbar. Saat takbir pula, seseorang berniat dalam
              hatinya untuk melaksanakan shalat, baik shalat wajib atau sunah.
              Ketika takbir sepatutnya pandangan mata ditujukan kepada tempat
              sujud, sambil mengangkat kedua tangan sejajar dengan bahu atau
              telingan dengan jari-jari yang dirapatkan. Setelahnya letakkan
              kedua tangan di dada, dengan posisi tangan kanan di atas punggung
              tangan kiri atau di pergelangan tangan kiri, atau di lengan tangan
              kiri.
            </Text>

            <Text style={styles.bacaanTakbiratulihram}>
              Bacaan Takbiratur Ihram:
            </Text>

            <Text style={styles.Takbiratulihram}>اَللهُ أَكْبَرُ</Text>
            <Text style={styles.ArtiTakbiratulihram}>
              Artinya: "Allah Maha Besar"
            </Text>
          </ImageBackground>
        </View>

        {/* Doa Iftitah */}
        <View style={styles.imageContainer}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat3}>
            <Text style={styles.Doaifititah}>3. Doa Iftitah</Text>
            <Text style={styles.DefinisiDoaiftitah}>
              Setelah takbiratul ihram, bacaan berikutnya adalah doa iftitah.
              Doa ini adalah salah satu doa penting yang dibaca dalam shalat.
              Doa iftitah mengandung permohonan kepada Allah dan pengagungan
              terhadap-Nya.
            </Text>
            <Text style={styles.bacaanDoaiftitah}>Bacaan Doa Iftitah:</Text>
            <Text style={styles.ArabDoaiftitah}>
              اللهُ اَكْبَرُ كَبِرًا وَالْحَمْدُ لِلهِ كَشِيْرًا وَسُبْحَانَ
              اللهِ بُكْرَةً وَاَصِيْلًا . اِنِّى وَجَّهْتُ وَجْهِيَ لِلَّذِيْ
              فَطَرَالسَّمَاوَاتِ وَالْااَرْضَ حَنِيْفًا مُسْلِمًا وَمَا اَنَا
              مِنَ الْمُشْرِكِيْنَ . اِنَّ صَلَاتِيْ وَنُسُكِيْ وَمَحْيَايَ
              وَمَمَاتِيْ لِلهِ رَبِّ الْعَا لَمِيْنَ . لاَ شَرِيْكَ لَهُ وَبِذَ
              لِكَ اُمِرْتُ وَاَنَ مِنَ الْمُسْلِمِيْنَ
            </Text>
            <Text style={styles.ArtiDoaiftitah}>
              Artinya: "Ya Allah, jauhkanlah dosa-dosaku sebagaimana Engkau
              menjauhkan antara timur dan barat."
            </Text>
          </ImageBackground>
        </View>

        {/* Surat Al Fatihah */}

        <View style={styles.imageContainer}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat4}>
            <Text style={styles.Suratfatihah}>4. Surat Al-Fatihah</Text>
            <Text style={styles.Definisifatihah}>
              Membaca Surah Al-Fatihah wajib dilakukan dalam menunaikan ibadah
              shalat, bila seseorang tidak membacanya maka shalatnya tidak sah.
            </Text>
            <Text style={styles.bacaanfatihah}>Bacaan Surat Al-Fatihah:</Text>
            <Text style={styles.Arabfatihah}>
              بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ(1) قُلْ هُوَ اللَّهُ
              أَحَدٌ(2) اللَّهُ الصَّمَدُ.(3) لَمْ يَلِدْ وَلَمْ يُولَدْ.(4)
              وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ(5)
            </Text>
            <Text style={styles.Artifatihah}>
              Artinya : [1.]Dengan nama Allah Yang Maha Pengasih lagi Maha
              Penyayang. [2.]Katakanlah (Muhammad), “Dialah Allah Yang Maha Esa.
              [3.]Allah tempat meminta segala sesuatu [4.] (Allah) tidak beranak
              dan tidak pula diperanakkan [5.]Dan tidak ada sesuatu yang setara
              denganDia.
            </Text>
          </ImageBackground>
        </View>

        {/* Surat Pendek */}
        <View style={styles.imageContainer}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat5}>
            <Text style={styles.Ikhlas}>5. Surat Al-Ikhlas</Text>
            <Text style={styles.Definisiikhlas}>
              Kemudian membaca surat atau ayat-ayat tertentu dari al-Qur’an
              setelah selesai membaca surat al-Fatihah. Pada kali ini kami
              contohkan adalah surat al-Ikhlas.
            </Text>
            <Text style={styles.bacaanIkhlas}>Bacaan Surat Ikhlas:</Text>
            <Text style={styles.ArabIkhlas}>
              بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ(1) قُلْ هُوَ اللَّهُ
              أَحَدٌ(2) اللَّهُ الصَّمَدُ.(3) لَمْ يَلِدْ وَلَمْ يُولَدْ.(4)
              وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ(5)
            </Text>
            <Text style={styles.ArtiIkhlas}>
              Artinya : 1. Dengan nama Allah Yang Maha Pengasih lagi Maha
              Penyayang. 2.Katakanlah (Muhammad), “Dialah Allah Yang Maha Esa
              3.Allah tempat meminta segala sesuatu4.(Allah) tidak beranak dan
              tidak pula diperanakkan 5.Dan tidak ada sesuatu yang setara dengan
              Dia.
            </Text>
          </ImageBackground>
        </View>

        {/* Ruku' */}

        <View style={styles.imageContainer}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat6}>
            <Text style={styles.Ruku}>6.Ruku'</Text>
            <Text style={styles.DefinisiRuku1}>
              Setelah selesai membaca Surat atau Ayat dalam Al-Quran Kemudian
              melakukan ruku’. Yakni dengan cara mengangkat kedua tangan
              setinggi telinga seraya membaca “Allahu Akbar” .
            </Text>
            <Text style={styles.Arab}>اَللهُ أَكْبَرُ</Text>
            <Text style={styles.ArtiArab}>Artinya: "Allah Maha Besar"</Text>

            <Text style={styles.bacaanRuku}>
              Lalu badan membungkuk, kedua tangan menggengam lutut, mata
              memandang tempat sujud, punggung dan kepala rata, kemudian membaca
              doa:
            </Text>
            <Text style={styles.ArabRuku}>
              سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ (3x)
            </Text>
            <Text style={styles.ArtiRuku}>
              Artinya : “Maha Suci Tuhanku Yang Maha Agung Dan Dengan
              Memuji-Nya.”( Di Baca 3 Kali)
            </Text>
          </ImageBackground>
        </View>

        {/* itidal */}
        <View style={styles.imageContainer}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat7}>
            <Text style={styles.Itidal}>7. I'tidal</Text>
            <Text style={styles.DefinisiItidal}>
              Kemudian melakukan i’tidal, yakni bangun dari ruku’ untuk berdiri
              tegak, dengan mengangkat kedua tangan sejajar dengan telinga,
              seraya mengucapkan :
            </Text>
            <Text style={styles.ArabItidal1}>سَمِعَ اللهُ لِمَنْ حَمِدَه</Text>
            <Text style={styles.ArtiItidal1}>
              Artinya : “ Allah mendengar orang yang memuji-Nya. “
            </Text>

            <Text style={styles.bacaanItidal}>
              Saat i’tidal, Mata memandang tempat sujud dan membaca doa i’tidal
            </Text>

            <Text style={styles.ArabItidal2}>
              رَبَّنَا لَكَ الْحَمْدُ مِلْءُ السَّموَاتِ وَمِلْءُ الاَرْضِ
              وَمِلْءُ مَا شِئتَ مِنْ شَيْئٍ بَعْدُ.
            </Text>

            <Text style={styles.ArtiItidal2}>
              Artinya : “Ya Allah ya Tuhan kami, bagi-Mu-lah segala puji,
              sepenuh langit dan sepenuh bumi, dan sepenuh apa saja yang Engkau
              kehendaki sesudah itu.”
            </Text>
          </ImageBackground>
        </View>

        {/* Sujud Pertama ' */}

        <View style={styles.imageContainer}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat8}>
            <Text style={styles.Sujud}>8.Sujud(Pertama)</Text>
            <Text style={styles.DefinisiSujud1}>
              Kemudian dilanjutkan dengan melakukan gerakan sujud seraya membaca
              “Allahu Akbar”
            </Text>
            <Text style={styles.Arab}>اَللهُ أَكْبَرُ</Text>
            <Text style={styles.ArtiArab}>Artinya: "Allah Maha Besar"</Text>

            <Text style={styles.bacaanSujud}>
              Dengan kedua lutut terlebih dulu, yakni meletakkan Dahi dan
              Hidung, Kedua Telapak Tangan, kedua lutut dan Kedua Kaki menempel
              di lantai (Tempat Sholat), kemudian membaca doa Sujud :
            </Text>
            <Text style={styles.ArabSujud}>
              سُبْحَانَ رَبِّيَ الأَعْلَى وَبِحَمْدِهِ (3x)
            </Text>
            <Text style={styles.ArtiSujud}>
              Artinya : “Maha Suci Tuhanku Yang Maha Tinggi, dan dengan segala
              puji bagi-Nya.” 3x
            </Text>
          </ImageBackground>
        </View>

        {/* Antara Dua Sujud' */}

        <View style={styles.imageContainer}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat9}>
            <Text style={styles.ADS}>9. Iftirasy (Antara Dua Sujud) </Text>
            <Text style={styles.DefinisiADS}>
              Kemudian bangun dari sujud dengan mengucapkan “Allaahu Akbar”,
              untuk kemudian melakukan duduk di antara dua sujud. Pada saat
              sudah duduk dengan sempurna [menduduki kaki kiri, dengan telapak
              kaki kanan berdiri dan jarinya terletak di alas (lantai/tanah)
              menghadap kiblat]
            </Text>
            <Text style={styles.Arab}>اَللهُ أَكْبَرُ</Text>
            <Text style={styles.ArtiArab}>Artinya: "Allah Maha Besar"</Text>

            <Text style={styles.bacaanADS}>Bacaan Duduk Antara 2 Sujud:</Text>
            <Text style={styles.ArabADS}>
              رَبِّ اغْفِرْ لِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ
              وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ.
            </Text>
            <Text style={styles.ArtiADS}>
              Artinya : “Ya Allah, ampunilah aku, kasihanilah aku, cukupilah
              aku, angkatlah derajatku, berikanlah rejeki kepadaku, berikanlah
              petunjuk kepadaku, berilah kesehatan kepadaku dan ampunilah aku.”
            </Text>
          </ImageBackground>
        </View>

        {/* Sujud Kedua ' */}

        <View style={styles.imageContainer}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat10}>
            <Text style={styles.Sujud2}>10.Sujud(Kedua)</Text>
            <Text style={styles.DefinisiSujud2}>
              Kemudian dilanjutkan dengan melakukan gerakan sujud seraya membaca
              “Allahu Akbar”
            </Text>
            <Text style={styles.Arab2}>اَللهُ أَكْبَرُ</Text>
            <Text style={styles.ArtiArab}>Artinya: "Allah Maha Besar"</Text>

            <Text style={styles.bacaanSujud2}>
              Dengan kedua lutut terlebih dulu, yakni meletakkan Dahi dan
              Hidung, Kedua Telapak Tangan, kedua lutut dan Kedua Kaki menempel
              di lantai (Tempat Sholat), kemudian membaca doa Sujud :
            </Text>
            <Text style={styles.ArabSujud2}>
              سُبْحَانَ رَبِّيَ الأَعْلَى وَبِحَمْدِهِ (3x)
            </Text>
            <Text style={styles.ArtiSujud2}>
              Artinya : “Maha Suci Tuhanku Yang Maha Tinggi, dan dengan segala
              puji bagi-Nya.” 3x
            </Text>
          </ImageBackground>
        </View>

        {/* Tasyahud Akhir ' */}

        <View style={styles.imageContainer}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat11}>
            <Text style={styles.TasyahudAkhir}>11.Tasyahud Akhir</Text>
            <Text style={styles.DefinisiTasyahudAkhir1}>
              Setelah sujud yang ke dua kemudian melakukan Doa Tahiyat Akhir
              dengan cara duduk tasyahhud (tahiyat) akhir. Adapun tata cara
              duduk pada Tasyahhud Akhir ini hendaknya orang yang sholat duduk
              pada pangkal pahanya yang kiri dengan posisi kaki kiri yang keluar
              dari bagian bawahnya, sementara telapak kaki kanan dalam posisi
              tegak.
            </Text>

            <Text style={styles.DefinisiTasyahudAkhir2}>
              Hendaklah tangan kiri diletakkan di atas paha kiri dengan posisi
              jari-jari tangan yang terkembang, dan banyak muslim di Indonesia
              yang menegakkan jari telunjuk ketika saat mulai membaca bagian
              kalimat asyhadu an laa ilaaha illallah, terdapat pendapat lain
              yang menerangkan menegakkan jari telunjuk dimulai dari awal
              tasyahhud (Atahiyat)
            </Text>

            <Text style={styles.bacaanTayahudakhir1}>
              Bacaan Tasyahud Akhir:
            </Text>

            <Text style={styles.ArabTasyahudakhir1}>
              اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ.
              اَلسَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ
              وَبَرَكَاتُهُ. اَلسَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ
              الصَّالِحِيْنَ. أَشْهدُ اَنْ لاَإِلَهَ إِلاَّ اللهُ وَاَشْهَدُ
              أَنَّ مُحَمَّدًا رَسُوْلُ اللهِ
            </Text>

            <Text style={styles.ArtiArabTasyahudakhir1}>
              Artinya : “Segala kehormatan, keberkahan, rahmat dan keselamatan
              (shalawat), serta kebaikan hanyalah kepunyaan Allah. Keselamatan,
              rahmat dan berkah dari Allah semoga tetap tercurah atasmu, wahai
              Nabi (Muhammad). Keselamatan, rahmat dan berkah dari Allah semoga
              juga tercurah atas kami, dan juga atas seluruh hamba Allah yang
              shaleh. Aku bersaksi bahwa tiada Tuhan selain Allah dan bahwa
              Muhammad adalah utusan allah.
            </Text>

            <Text style={styles.bacaanTayahudakhir2}>
              Ketika melakukan Tasyahhud Akhir maka kemudian berikutnya membaca
              Shalawat, yang lebih sempurna yaitu Shalawat Ibrahimiah :
            </Text>

            <Text style={styles.ArabTasyahudakhir2}>
              اَللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى اَلِ مُحَمَّدٍ، كَمَا
              صَلَّيْتَ عَلَى إِبْرَاهِيْمِ وَعَلَى اَلِ إِبْرَاهِيْمِ.
              وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى اَلِ مُحَمَّدٍ، كََمَا بَارَكْتَ
              عَلَى إِبْرَاهِيْمِ وَعَلَى اَلِ إِبْرَاهِيْمِ . فِى
              الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ
            </Text>
            <Text style={styles.ArtiTasyahudakhir2}>
              Artinya : Ya Allah, limpahkanlah rahmat dan keselamatan (Shalawat)
              untuk Nabi Muhammad. Dan juga limpahkanlah rahmat dan keselamatan
              (shalawat) kepada keluarga Muhammad, sebagaimana telah Engkau
              limpahkan rahmat dan keselamatan (shalawat) kepada Ibrahim dan
              kepada keluarga Ibrahim. Limpahkanlah keberkahan kepada Muhammad
              dan kepada keluarga Muhammad, sebagaimana Engkau telah melimpahkan
              keberkahan kepada Ibrahim dan kepada keluarga Ibrahim. Di seluruh
              alam semesta, sesungguhnya Engkau adalah Maha Terpuji lagi Maha
              Agung (Mulia).
            </Text>
          </ImageBackground>
        </View>

        {/* Salam */}
        <View style={styles.imageContainer}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat12}>
            <Text style={styles.Salam}>12. Salam</Text>
            <Text style={styles.DefinisiSalam}>
              Kemudian dilanjutkan dengan mengucapkan salam (assalaamu’alaikum
              wa rahmatullaah), yang diikuti dengan menengokkan wajah ke kanan
              pada saat mengucapkan salam yang pertama dan menengokkan wajah ke
              kiri pada saat mengucapkan salam yang kedua
            </Text>
            <Text style={styles.bacaanSalam}>Bacaan Salam:</Text>
            <Text style={styles.ArabSalam}>
              السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ
            </Text>
            <Text style={styles.ArtiSalam}>
              Artinya : “ Semoga keselamatan dan rahmat Allah limpahkan
              kepadamu“
            </Text>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundColor: {
    color: '#FFD700',
  },
  contentContainer: {
    paddingBottom: 7000,
    overflowY: 'auto',
  },

  IconImage: {
    width: 450,
    height: 300,
    position: 'absolute',
  },
  headerImage: {
    width: 400,
    height: windowHeight * 0.2,
  },
  imageContainer: {
    top: 0,
    width: '100%',
    height: windowHeight * 0.2,
    alignItems: 'right',
  },
  image: {
    width: '80%',
    height: '110%',
    left: -2,
  },
  imageTatacaraSholat: {
    top: 30,
    right: 0,
    width: '80%',
    height: windowHeight * 0.16,
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
  imageRakaat1: {
    width: '120%',
    top: 30,
    marginLeft: -20,
    height: windowHeight * 0.09,
  },

  //Niat
  imageKotakNiat: {
    width: '98%',
    marginTop: 420,
    marginRight: 10,
    marginLeft: 20,
    height: windowHeight * 0.5,
    alignSelf: 'center',
    top: 90,
    justifyContent: 'center',
  },
  niatText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    color: '#058D1A',
  },
  definisiniat: {
    fontSize: 14,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 30,
    left: 10,
    color: 'black',
    fontStyle: 'italic',
  },
  bacaanniatText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 60,
    left: 10,
    color: 'black',
  },
  ArabniatText: {
    fontSize: 17,
    fontFamily: 'Knewave',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 90,
    right: 30,
    color: 'black',
  },
  Artiniat: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 120,
    color: 'black',
  },

  // Takbiratul Ihram
  imageContainer2: {
    marginBottom: 20,
    marginVertical: 650,
    width: '100%',
    height: windowHeight * 0.2,
    alignItems: 'right',
  },
  imageKotakNiat2: {
    width: '98%',
    marginVertical: 120,
    marginRight: 10,
    marginLeft: 20,
    height: windowHeight * 0.7,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  takbiratulText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 0,
    right: 20,
    color: '#058D1A',
  },
  Definisitakbiratul: {
    fontSize: 12,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    color: 'black',
  },
  bacaanTakbiratulihram: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Knewe',
    textAlign: 'center',
    position: 'absolute',
    top: 170,
    left: 10,
    color: 'black',
  },
  Takbiratulihram: {
    fontSize: 30,
    fontFamily: 'Knewave',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 220,
    right: 30,
    color: 'black',
  },
  ArtiTakbiratulihram: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 240,
    color: 'black',
  },

  //Doa Iftitah

  imageKotakNiat3: {
    marginBottom: 20,
    marginVertical: 500,
    marginLeft: 10,
    width: '98%',
    position: 'center',
    margin: 2,
    height: windowHeight * 0.7,
    alignItems: 'right',
  },
  Doaifititah: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    color: '#058D1A',
  },

  DefinisiDoaiftitah: {
    fontSize: 14,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    color: 'black',
  },

  bacaanDoaiftitah: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 110,
    left: 10,
    color: 'black',
  },
  ArabDoaiftitah: {
    fontSize: 18,
    margin: 10,
    fontFamily: 'Knewave',
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    top: 125,
    color: 'black',
  },
  ArtiDoaiftitah: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 250,
    color: 'black',
  },

  //Surat al Fatihah

  imageKotakNiat4: {
    marginBottom: 20,
    marginVertical: 900,
    marginLeft: 10,
    width: '98%',
    position: 'center',
    margin: 2,
    height: windowHeight * 0.8,
    alignItems: 'right',
  },
  Suratfatihah: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 0,
    right: 15,
    color: '#058D1A',
  },

  Definisifatihah: {
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    color: 'black',
  },

  bacaanfatihah: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 110,
    left: 10,
    color: 'black',
  },
  Arabfatihah: {
    fontSize: 18,
    margin: 10,
    fontFamily: 'Knewave',
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    top: 125,
    color: 'black',
  },
  Artifatihah: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 200,
    right: 6,
    left: -5,
    color: 'black',
  },

  //Surat Pendek

  imageKotakNiat5: {
    marginBottom: 20,
    marginVertical: 1400,
    marginLeft: 10,
    width: '98%',
    position: 'center',
    margin: 2,
    height: windowHeight * 0.9,
    alignItems: 'right',
  },
  Ikhlas: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    color: '#058D1A',
  },

  Definisiikhlas: {
    fontSize: 14,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    color: 'black',
  },

  bacaanIkhlas: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 110,
    left: 10,
    color: 'black',
  },
  ArabIkhlas: {
    fontSize: 18,
    margin: 10,
    fontFamily: 'Knewave',
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    top: 125,
    color: 'black',
  },
  ArtiIkhlas: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 250,
    color: 'black',
  },

  //Ruku'

  imageKotakNiat6: {
    marginBottom: 20,
    marginVertical: 1900,
    marginLeft: 10,
    width: '98%',
    position: 'center',
    margin: 2,
    height: windowHeight * 1.1,
    alignItems: 'right',
  },
  Ruku: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 0,
    left: 5,
    color: '#058D1A',
  },

  DefinisiRuku1: {
    fontSize: 17,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    color: 'black',
  },

  Arab: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 120,
    right: 25,
    color: 'black',
  },
  ArtiArab: {
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 170,
    left: 10,
    color: 'black',
  },

  bacaanRuku: {
    margin: 10,
    fontSize: 18,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 320,
    left: 10,
    color: 'black',
  },
  ArabRuku: {
    fontSize: 24,
    margin: 10,
    fontFamily: 'Knewave',
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    top: 415,
    right: 10,
    color: 'black',
  },
  ArtiRuku: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 470,
    right: 6,
    left: -5,
    color: 'black',
  },

  //Iktidal

  imageKotakNiat7: {
    marginBottom: 20,
    marginVertical: 2500,
    marginLeft: 10,
    width: '98%',
    position: 'center',
    margin: 2,
    height: windowHeight * 1.1,
    alignItems: 'right',
  },
  Itidal: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 0,
    right: 15,
    color: '#058D1A',
  },

  DefinisiItidal: {
    fontSize: 17,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    color: 'black',
  },

  ArabItidal1: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 130,
    right: 25,
    color: 'black',
  },
  ArtiItidal1: {
    fontSize: 18,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 170,
    left: 10,
    color: 'black',
  },

  bacaanItidal: {
    fontSize: 18,
    margin: 10,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 350,
    left: 5,
    color: 'black',
  },
  ArabItidal2: {
    fontSize: 24,
    margin: 10,
    fontFamily: 'Knewave',
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    top: 410,
    right: 10,
    color: 'black',
  },
  ArtiItidal2: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 490,
    right: 6,
    left: -5,
    color: 'black',
  },

  //Sujud Pertama '

  imageKotakNiat8: {
    marginBottom: 20,
    marginVertical: 3100,
    marginLeft: 10,
    width: '98%',
    position: 'center',
    margin: 2,
    height: windowHeight * 1.1,
    alignItems: 'right',
  },
  Sujud: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 0,
    left: 5,
    color: '#058D1A',
  },

  DefinisiSujud1: {
    fontSize: 17,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    color: 'black',
  },

  Arab: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 100,
    right: 25,
    color: 'black',
  },
  ArtiArab: {
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 120,
    left: 10,
    color: 'black',
  },

  bacaanSujud: {
    margin: 10,
    fontSize: 18,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 320,
    left: 0,
    color: 'black',
  },
  ArabSujud: {
    fontSize: 24,
    margin: 10,
    fontFamily: 'Knewave',
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    top: 440,
    right: 10,
    color: 'black',
  },
  ArtiSujud: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 490,
    right: 6,
    left: -5,
    color: 'black',
  },

  //Antara Dua Sujud

  imageKotakNiat9: {
    marginBottom: 20,
    marginVertical: 3700,
    marginLeft: 10,
    width: '98%',
    position: 'center',
    margin: 2,
    height: windowHeight * 1.2,
    alignItems: 'right',
  },
  ADS: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 0,
    right: 5,
    color: '#058D1A',
  },

  DefinisiADS: {
    fontSize: 17,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    color: 'black',
  },

  Arab: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 180,
    right: 25,
    color: 'black',
  },
  ArtiArab: {
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 190,
    left: 10,
    color: 'black',
  },

  bacaanADS: {
    margin: 10,
    fontSize: 18,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 370,
    left: 0,
    color: 'black',
  },
  ArabADS: {
    fontSize: 24,
    margin: 10,
    fontFamily: 'Knewave',
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    top: 400,
    right: 10,
    color: 'black',
  },
  ArtiADS: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 490,
    right: 6,
    left: -5,
    color: 'black',
  },

  //Sujud Kedua '

  imageKotakNiat10: {
    marginBottom: 20,
    marginVertical: 4400,
    marginLeft: 10,
    width: '98%',
    position: 'center',
    margin: 2,
    height: windowHeight * 1.1,
    alignItems: 'right',
  },
  Sujud2: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 0,
    left: 5,
    color: '#058D1A',
  },

  DefinisiSujud2: {
    fontSize: 17,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    color: 'black',
  },

  Arab2: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 100,
    right: 25,
    color: 'black',
  },
  ArtiArab: {
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 120,
    left: 10,
    color: 'black',
  },

  bacaanSujud2: {
    margin: 10,
    fontSize: 18,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 320,
    left: 0,
    color: 'black',
  },
  ArabSujud2: {
    fontSize: 24,
    margin: 10,
    fontFamily: 'Knewave',
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    top: 440,
    right: 10,
    color: 'black',
  },
  ArtiSujud2: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 490,
    right: 6,
    left: -5,
    color: 'black',
  },
  //Tayahud Akhir'

  imageKotakNiat11: {
    marginBottom: 20,
    marginVertical: 5000,
    marginLeft: 10,
    width: '98%',
    position: 'center',
    margin: 2,
    height: windowHeight * 2.4,
    alignItems: 'right',
  },
  TasyahudAkhir: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 0,
    right: 10,
    color: '#058D1A',
  },

  DefinisiTasyahudAkhir1: {
    fontSize: 14,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    color: 'black',
  },

  DefinisiTasyahudAkhir2: {
    fontSize: 14,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 300,
    left: 10,
    right: 10,
    color: 'black',
  },

  bacaanTayahudakhir1: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 400,
    left: 0,
    color: 'black',
  },

  ArabTasyahudakhir1: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 430,
    margin: 10,
    right: 2,
    color: 'black',
  },
  ArtiArabTasyahudakhir1: {
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 540,
    margin: 10,
    left: 0,
    color: 'black',
  },

  bacaanTayahudakhir2: {
    margin: 10,
    fontSize: 18,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 800,
    left: 0,
    color: 'black',
  },
  ArabTasyahudakhir2: {
    fontSize: 20,
    margin: 10,
    fontFamily: 'Knewave',
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    top: 890,
    right: 10,
    color: 'black',
  },
  ArtiTasyahudakhir2: {
    margin: 10,
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 1000,
    right: 10,
    left: -10,
    color: 'black',
  },

  //Salam

  imageKotakNiat12: {
    marginBottom: 20,
    marginVertical: 6400,
    marginLeft: 10,
    width: '98%',
    position: 'center',
    margin: 2,
    height: windowHeight * 0.8,
    alignItems: 'right',
  },
  Salam: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 0,
    right: 15,
    color: '#058D1A',
  },

  DefinisiSalam: {
    fontSize: 16,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    color: 'black',
  },

  bacaanSalam: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 180,
    left: 10,
    color: 'black',
  },
  ArabSalam: {
    fontSize: 18,
    margin: 10,
    fontFamily: 'Knewave',
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    top: 220,
    right: 0,
    color: 'black',
  },
  ArtiSalam: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Knewave',
    textAlign: 'left',
    position: 'absolute',
    top: 270,
    right: 6,
    left: -5,
    color: 'black',
  },
});
export default SholatAsar;