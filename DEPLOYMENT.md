# 🚀 Domain Bağlama Rehberi

Bu rehber, WMB Tracker web sitesini custom domain'e bağlamak için adım adım talimatlar içerir.

## 📋 Ön Hazırlık

1. ✅ Projeyi GitHub'a push edin
2. ✅ Vercel veya Netlify'a deploy edin
3. ✅ Domain satın aldınız (GoDaddy, Namecheap, vb.)

## 🌐 Vercel ile Domain Bağlama

### Adım 1: Vercel Dashboard

1. [vercel.com](https://vercel.com) adresine gidin ve giriş yapın
2. Projenizi seçin
3. **Settings** > **Domains** sekmesine gidin

### Adım 2: Domain Ekleme

1. **"Add Domain"** butonuna tıklayın
2. Domain adresinizi girin:
   - Ana domain: `wmb-tracker.com`
   - www subdomain: `www.wmb-tracker.com` (isteğe bağlı)
3. **"Add"** butonuna tıklayın

### Adım 3: DNS Kayıtları

Vercel size DNS kayıtlarını gösterecek. Domain sağlayıcınızda şu kayıtları ekleyin:

#### Ana Domain (Root Domain) için:

**Seçenek 1: A Record**
```
Type: A
Name: @ (veya boş)
Value: 76.76.21.21
TTL: 3600 (veya Auto)
```

**Seçenek 2: CNAME (Önerilen)**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 3600
```

#### www Subdomain için:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Adım 4: Domain Sağlayıcısında Ayarlama

#### GoDaddy

1. GoDaddy hesabınıza giriş yapın
2. **"My Products"** > Domain'inizin yanındaki **"DNS"** > **"Manage DNS"**
3. Mevcut A ve CNAME kayıtlarını silin (varsa)
4. Yeni kayıtları ekleyin:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
5. **"Save"** butonuna tıklayın

#### Namecheap

1. Namecheap hesabınıza giriş yapın
2. **"Domain List"** > Domain'inizin yanındaki **"Manage"**
3. **"Advanced DNS"** sekmesine gidin
4. Mevcut kayıtları silin (varsa)
5. Yeni kayıtları ekleyin:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
6. Kaydedin

#### Cloudflare

1. Cloudflare hesabınıza giriş yapın
2. Domain'inizi seçin
3. **"DNS"** sekmesine gidin
4. **"Add record"** ile kayıtları ekleyin:
   - **A Record**: `@` → `76.76.21.21` (Proxy: Açık - Turuncu bulut)
   - **CNAME**: `www` → `cname.vercel-dns.com` (Proxy: Açık)
5. Kaydedin

### Adım 5: SSL Sertifikası

- Vercel otomatik olarak **Let's Encrypt SSL** sertifikası ekler
- 1-5 dakika içinde aktif olur
- Vercel dashboard'da **"Valid"** yazısını göreceksiniz

### Adım 6: Doğrulama

DNS yayılması 1-48 saat sürebilir (genelde 1-2 saat).

Kontrol etmek için:

```bash
# Terminal'de DNS kontrolü
nslookup wmb-tracker.com
dig wmb-tracker.com

# Tarayıcıda test
https://wmb-tracker.com
```

Vercel dashboard'da domain durumunu görebilirsiniz:
- ✅ **Valid Configuration**: DNS doğru ayarlanmış
- ⏳ **Pending**: DNS yayılması bekleniyor
- ❌ **Invalid Configuration**: DNS kayıtlarını kontrol edin

---

## 🌐 Netlify ile Domain Bağlama

### Adım 1: Netlify Dashboard

1. [netlify.com](https://www.netlify.com) adresine gidin
2. Projenizi seçin
3. **"Domain settings"** > **"Add custom domain"**

### Adım 2: Domain Ekleme

1. Domain adresinizi girin
2. **"Verify"** butonuna tıklayın

### Adım 3: DNS Kayıtları

Netlify size DNS kayıtlarını gösterecek:

#### Ana Domain için:

```
Type: A
Name: @
Value: 75.2.60.5
```

#### www Subdomain için:

```
Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

### Adım 4: SSL Sertifikası

1. **"HTTPS"** sekmesine gidin
2. **"Verify DNS configuration"** butonuna tıklayın
3. Netlify otomatik SSL ekler (1-5 dakika)

---

## 🔍 Sorun Giderme

### Domain çalışmıyor

1. **DNS yayılmasını kontrol edin:**
   ```bash
   nslookup yourdomain.com
   ```

2. **Vercel/Netlify dashboard'da durumu kontrol edin**

3. **DNS kayıtlarını doğrulayın:**
   - A Record doğru IP'ye işaret ediyor mu?
   - CNAME doğru değere işaret ediyor mu?
   - TTL değeri çok yüksek değil mi? (3600 önerilir)

### SSL sertifikası yüklenmiyor

1. DNS kayıtlarının doğru olduğundan emin olun
2. 5-10 dakika bekleyin
3. Vercel/Netlify dashboard'da SSL durumunu kontrol edin
4. Gerekirse manuel olarak "Renew Certificate" yapın

### www subdomain çalışmıyor

1. CNAME kaydının doğru olduğundan emin olun
2. DNS yayılmasını bekleyin (1-2 saat)
3. Vercel/Netlify'da www domain'ini ayrıca eklediğinizden emin olun

### Cloudflare kullanıyorsanız

- **Proxy (turuncu bulut) açık olmalı**
- Cloudflare SSL/TLS ayarları: **"Full"** veya **"Full (strict)"** olmalı
- Vercel/Netlify'ın verdiği IP adreslerini kullanın

---

## ✅ Başarı Kontrol Listesi

- [ ] Domain Vercel/Netlify'a eklendi
- [ ] DNS kayıtları domain sağlayıcısında ayarlandı
- [ ] DNS yayılması tamamlandı (nslookup ile kontrol)
- [ ] SSL sertifikası aktif
- [ ] Site https://yourdomain.com adresinde açılıyor
- [ ] www subdomain çalışıyor (varsa)
- [ ] Redirect ayarları doğru (www → non-www veya tersi)

---

## 📞 Destek

Sorun yaşarsanız:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://www.netlify.com/support)

---

**Not**: DNS değişiklikleri global olarak yayılması 1-48 saat sürebilir. Genelde 1-2 saat içinde aktif olur.

