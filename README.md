# WMB Tracker - Website

Modern restoran ve yemekhane yönetim sistemi için landing page.

## 🚀 Hızlı Başlangıç

### Geliştirme Ortamı

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Production build'i önizle
npm run preview
```

## 📦 Deployment (Canlıya Alma)

Bu proje birçok platforma kolayca deploy edilebilir. En popüler seçenekler:

### 1. Vercel (Önerilen - En Kolay)

**Adımlar:**

1. GitHub'a projeyi push edin:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. [Vercel](https://vercel.com) hesabı oluşturun ve GitHub ile giriş yapın

3. "New Project" butonuna tıklayın

4. GitHub repository'nizi seçin

5. Vercel otomatik olarak ayarları algılayacak:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

6. "Deploy" butonuna tıklayın

7. Birkaç dakika içinde siteniz canlıda olacak! 🎉

**Vercel CLI ile:**
```bash
npm i -g vercel
vercel
```

### 2. Netlify

**Adımlar:**

1. GitHub'a projeyi push edin (yukarıdaki adımlar)

2. [Netlify](https://www.netlify.com) hesabı oluşturun

3. "Add new site" > "Import an existing project"

4. GitHub repository'nizi seçin

5. Build ayarları otomatik algılanacak (netlify.toml dosyası sayesinde)

6. "Deploy site" butonuna tıklayın

**Netlify CLI ile:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### 3. Cloudflare Pages

1. GitHub repository'nizi Cloudflare Pages'e bağlayın
2. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Deploy edin

### 4. GitHub Pages

1. `package.json`'a deploy script ekleyin:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

2. `gh-pages` paketini yükleyin:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy edin:
   ```bash
   npm run deploy
   ```

## 🔧 Build Optimizasyonları

Proje aşağıdaki performans optimizasyonları ile yapılandırılmıştır:

- ✅ Code splitting (lazy loading)
- ✅ React.memo optimizasyonları
- ✅ Vendor chunk separation
- ✅ Tree-shaking
- ✅ Production build optimizasyonları

## 🌐 Custom Domain Bağlama (Domain Atama)

### Vercel ile Custom Domain

1. **Vercel Dashboard'a gidin**
   - Projenizi seçin
   - "Settings" > "Domains" sekmesine gidin

2. **Domain ekleyin**
   - "Add Domain" butonuna tıklayın
   - Domain adresinizi girin (örn: `wmb-tracker.com` veya `www.wmb-tracker.com`)

3. **DNS Ayarları**
   Vercel size DNS kayıtlarını gösterecek. Domain sağlayıcınızda (GoDaddy, Namecheap, vb.) şu kayıtları ekleyin:

   **A Record için:**
   ```
   Type: A
   Name: @ (veya boş)
   Value: 76.76.21.21
   ```

   **CNAME için (www subdomain):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **Veya Vercel'in verdiği özel kayıtları kullanın**

4. **SSL Sertifikası**
   - Vercel otomatik olarak Let's Encrypt SSL sertifikası ekler
   - Birkaç dakika içinde aktif olur

5. **Doğrulama**
   - DNS yayılması 24-48 saat sürebilir (genelde 1-2 saat)
   - Vercel dashboard'da durumu kontrol edebilirsiniz

### Netlify ile Custom Domain

1. **Netlify Dashboard'a gidin**
   - Projenizi seçin
   - "Domain settings" > "Add custom domain"

2. **Domain ekleyin**
   - Domain adresinizi girin

3. **DNS Ayarları**
   Netlify size DNS kayıtlarını gösterecek:

   **A Record için:**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

   **CNAME için:**
   ```
   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```

4. **SSL Sertifikası**
   - Netlify otomatik olarak SSL ekler
   - "HTTPS" sekmesinden durumu kontrol edin

### Domain Sağlayıcılarına Özel Talimatlar

#### GoDaddy
1. GoDaddy hesabınıza giriş yapın
2. "My Products" > "DNS" > "Manage DNS"
3. Vercel/Netlify'ın verdiği kayıtları ekleyin
4. Kaydet ve bekleyin (1-24 saat)

#### Namecheap
1. Namecheap hesabınıza giriş yapın
2. "Domain List" > Domain'inizin yanındaki "Manage"
3. "Advanced DNS" sekmesine gidin
4. Vercel/Netlify'ın verdiği kayıtları ekleyin

#### Cloudflare
1. Cloudflare hesabınıza giriş yapın
2. Domain'inizi seçin
3. "DNS" sekmesine gidin
4. "Add record" ile kayıtları ekleyin
5. **Önemli**: Cloudflare'de "Proxy" (turuncu bulut) açık olmalı

### Domain Doğrulama ve Test

```bash
# DNS yayılmasını kontrol et
nslookup yourdomain.com
dig yourdomain.com

# SSL sertifikasını kontrol et
curl -I https://yourdomain.com
```

## 📝 Önemli Notlar

- **Base Path**: Eğer site bir alt dizinde çalışacaksa (örn: `/wmb-website`), `vite.config.ts` dosyasına `base: '/wmb-website/'` ekleyin
- **Environment Variables**: Gerekirse `.env` dosyası oluşturun ve deployment platformunda environment variables ayarlayın
- **DNS Propagation**: DNS değişiklikleri 1-48 saat sürebilir (genelde 1-2 saat)
- **SSL**: Vercel ve Netlify otomatik SSL sağlar (Let's Encrypt)
- **Subdomain**: `www` subdomain'i de ekleyebilirsiniz (CNAME kaydı ile)

## 🛠️ Teknolojiler

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## 📄 Lisans

Private project

