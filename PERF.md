# Performans Baseline ve Test Rehberi

Bu dokümantasyon, WMB Tracker landing page'inin performans metriklerini ölçmek ve izlemek için kullanılır.

## 🎯 Hedef Metrikler (Mobile)

Aşağıdaki metrikler Lighthouse tarafından ölçülür ve hedeflenen değerlerin altında olmalıdır:

| Metrik | Açıklama | Hedef Değer |
|--------|----------|-------------|
| **LCP** | Largest Contentful Paint | < 2.5s |
| **CLS** | Cumulative Layout Shift | < 0.1 |
| **INP** | Interaction to Next Paint | < 200ms |
| **TBT** | Total Blocking Time | < 200ms |
| **JS (gzip)** | JavaScript Bundle Boyutu | < 200KB |

## 📋 Performans Test Checklist

### Yerel Test (Localhost)

- [ ] Production build oluştur: `npm run build`
- [ ] Preview sunucusunu başlat: `npm run preview`
- [ ] Chrome DevTools'u aç (F12)
- [ ] Lighthouse sekmesine git
- [ ] "Mobile" cihaz seçeneğini seç
- [ ] "Performance" kategorisini seç
- [ ] "Analyze page load" butonuna tıkla
- [ ] Metrikleri kaydet ve hedef değerlerle karşılaştır

### Deploy Edilmiş URL Testi

- [ ] Deploy edilmiş URL'i hazırla (örn: `https://your-site.vercel.app`)
- [ ] Terminal'de şu komutu çalıştır:
  ```bash
  npx lighthouse https://your-site.vercel.app --view --only-categories=performance --preset=mobile
  ```
- [ ] HTML raporunu incele
- [ ] Metrikleri kaydet ve hedef değerlerle karşılaştır

### Detaylı Lighthouse Analizi

Tam bir Lighthouse analizi için (tüm kategoriler):

```bash
# Deploy edilmiş URL için
npx lighthouse https://your-site.vercel.app --view --preset=mobile

# Yerel preview için
npx lighthouse http://localhost:4173 --view --preset=mobile
```

### JSON Rapor Oluşturma

Metrikleri programatik olarak analiz etmek için:

```bash
npx lighthouse https://your-site.vercel.app --output=json --output-path=./lighthouse-report.json --preset=mobile
```

## 🔧 Kullanılabilir NPM Script'leri

### Bundle Analizi

```bash
npm run analyze
```

Bu script, production build oluşturur ve bundle boyutlarını gösterir. Vite build çıktısında her chunk'ın boyutunu görebilirsiniz.

**Gelişmiş Bundle Görselleştirme (Opsiyonel):**

Daha detaylı görselleştirme için `rollup-plugin-visualizer` kullanabilirsiniz:

1. Paketi yükleyin:
   ```bash
   npm install --save-dev rollup-plugin-visualizer
   ```

2. `vite.config.ts` dosyasına plugin'i ekleyin (opsiyonel, build'i etkilemez)

## 📊 Metrik Takibi

Her deployment sonrası:

1. Lighthouse raporunu çalıştırın
2. Metrikleri kaydedin
3. Hedef değerlerin altında kaldığından emin olun
4. Performans regresyonları varsa, bundle analizi yapın

## 🚨 Performans Sorunları

Eğer metrikler hedef değerlerin üzerindeyse:

1. **LCP yüksekse:**
   - Görselleri optimize edin (WebP formatı, lazy loading)
   - Critical CSS'i inline edin
   - Font loading stratejisini optimize edin

2. **CLS yüksekse:**
   - Görsellere width/height attribute'ları ekleyin
   - Font-display: swap kullanın
   - Dinamik içerik için placeholder'lar kullanın

3. **INP/TBT yüksekse:**
   - JavaScript bundle'ı optimize edin
   - Code splitting kullanın
   - Gereksiz re-render'ları önleyin (React.memo)

4. **JS bundle büyükse:**
   - `npm run analyze` ile büyük paketleri tespit edin
   - Tree-shaking'i kontrol edin
   - Lazy loading kullanın

## 📚 Ek Kaynaklar

- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)
- [Web Vitals](https://web.dev/vitals/)
- [Vite Performance Guide](https://vitejs.dev/guide/performance.html)

