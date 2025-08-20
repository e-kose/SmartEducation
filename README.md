## 📚 SmartEducation

**SmartEducation**, modern eğitim platformları için geliştirilen, modüler ve ölçeklenebilir bir **öğrenci ve kurs yönetim sistemidir**. Express altyapısı kullanılarak TypeScript ile yazılmıştır.

> ⚠️ **Not:** Bu proje hâlâ geliştirilmektedir. Yeni özellikler eklenmekte ve sistem iyileştirilmektedir. Dökümantasyon ve kod yapısı zamanla güncellenebilir.

---

## 🚀 Özellikler

- 👥 Kullanıcı kayıt ve kimlik doğrulama
- 🎓 Kurs oluşturma, güncelleme, silme
- 📚 Kullanıcıların kurslara katılabilmesi
- 🛡️ Rol tabanlı erişim kontrolü (RBAC)
- 🔒 JWT ile güvenli oturum yönetimi
- 🧩 Modüler yapı (her özellik kendi modülünde)
- 📁 Mongoose ile veritabanı yönetimi

---       

---

## 📦 Kurulum

### 1. Depoyu klonlayın

```bash
git clone https://github.com/e-kose/SmartEducation.git
cd SmartEducation
```
###2. Bağımlılıkları yükleyin
```bash
npm install
npm run start:dev
```

```plaintext
src/
│
├── auth/           # Kimlik doğrulama işlemleri
├── user/           # Kullanıcı CRUD işlemleri
├── course/         # Kurs yönetimi
├── database/       # TypeORM yapılandırması
├── common/         # Ortak yardımcılar, guard'lar, decorator'lar
└── main.ts         # Giriş noktası
```
