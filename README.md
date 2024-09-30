# Pizza Sipariş Uygulaması 🍕

Bu proje, React ve Redux kullanılarak geliştirilmiş bir pizza sipariş uygulamasıdır. Kullanıcılar uygulamaya isimlerini girerek giriş yapar, menüden istedikleri pizzaları seçip sepetlerine ekler ve siparişlerini tamamlayabilir. Ayrıca her siparişe özel bir kod oluşturarak sipariş takibi yapma imkanı sunulmaktadır.

[Canlı Demo](https://yummy-pizzas.netlify.app/) 📍

## 🎯 Proje Özeti

- **React**: Kullanıcı arayüzünü oluşturmak için kullanılıyor.
- **Redux**: Uygulamanın state yönetimi için kullanılıyor.
- **Redux-Thunk**: Asenkron işlemleri yönetmek için middleware olarak tercih ediliyor.
- **React Router**: Uygulama içi sayfa yönlendirmeleri sağlanıyor.

### Uygulamanın Genel Akışı

1. **Kullanıcı Girişi**:
   - Uygulama başlangıcında kullanıcıdan bir isim girmesi istenir.
   - İsim girildikten sonra kullanıcı menü sayfasına yönlendirilir.

2. **Menü Sayfası**:
   - Kullanıcı, pizza menüsünü görüntüleyebilir.
   - Seçilen pizzaları sepete ekleyip çıkarabilir.

3. **Sepet**:
   - Kullanıcı sepetinde eklediği pizzaları inceleyebilir ve teslimat bilgilerini girdikten sonra siparişini tamamlayabilir.

4. **Sipariş Tamamlama**:
   - Sipariş verildiğinde her siparişe özel bir sipariş kodu oluşturulur.

5. **Sipariş Takibi**:
   - Kullanıcı, bu kodu kullanarak siparişini arayabilir ve durumu hakkında bilgi alabilir.

## 🚀 Projeyi Yerel Olarak Çalıştırma

Bu projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

### 1. Depoyu Klonlayın:

```bash
git clone https://github.com/kullanici-adi/pizza-siparis-uygulamasi.git
