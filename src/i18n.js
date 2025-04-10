import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "welcome": "Home",
      "about": "About Us",
      "services": "Services",
      "team": "Our Team",
      "pricing": "Pricing",
      "blog": "Blog",
      "contact": "Contact us",
      "login": "Login",
      "signup": "Sign Up",
      "language": "Language",
      "about": "About Us",
      "aboutContent": "At Elara Tarım, we inspire the future with sustainable and innovative farming models that are in harmony with nature. With our zero-carbon footprint production system, we operate entirely on renewable energy sources, ensuring that we make the most efficient use of the fertility that the soil provides without causing any harm to nature.",
      "readMore": "Read More",
      "ourServices": "Respect for Nature, A Legacy for the Future",
      "ourServicesContent": "At Elara Tarım, we produce for the future. We place our respect for nature at the core of our production to leave behind clean, fertile, and productive lands for future generations.",
      "services": {
        "item1": {
          "title": "Zero-carbon footprint farming",
          "description": "We produce using renewable energy while protecting nature."
        },
        "item2": {
          "title": "Geothermal energy-based production",
          "description": "We utilize natural energy sources without consuming fossil fuels."
        },
        "item3": {
          "title": "Value-added production",
          "description": "We offer high-quality and healthy products with our berry group fruits."
        },
        "item4": {
          "title": "Reducing imports, supporting exports",
          "description": "We strengthen local agriculture and expand into global markets."
        }
      },
      "whyElara": "Why Elara Tarım?",
      "whyElaraContent": "On our journey to shape the future of agriculture, reduce dependence on imports, and support local production, we carry out value-added production using innovative agricultural technologies.",
      "whyElaraContent2": "With a zero-carbon footprint goal, Elara practices sustainable agriculture by utilizing geothermal energy. While producing delicious and nutritious fruits, Elara embraces a respectful approach to both nature and the future bringing local production to global markets",
      "howstudy": "How We Work?",
      "howstudyDesc": "We practice agriculture with eco-friendly solutions, working to leave a cleaner world for future generations.",
      "geothermalEnergy": "Geothermal Energy Utilization",
      "geothermalEnergyDesc1": "Our entire production process is powered by renewable energy sources.",
      "geothermalEnergyDesc2": "No fossil fuel consumption, ensuring zero carbon emissions.",
      "sustainableFarming": "Sustainable Farming Practices",
      "sustainableFarmingDesc1": "Efficient production with minimal water consumption, preserving natural resources.",
      "sustainableFarmingDesc2": "An environmentally friendly model that positively impacts climate change.",
      "highValueProduction": "High Value-Added Production",
      "highValueProductionDesc1": "We cultivate berry group fruits such as blackberries, raspberries, and currants.",
      "highValueProductionDesc2": "We produce according to high nutritional value and quality standards.",
      "localProduction": "Local Production and Global Trade",
      "localProductionDesc1": "We reduce dependence on imports.",
      "localProductionDesc2": "We introduce our products to international markets, expanding our export capacity.",
      "contactUs": "Contact Us!",
      "footerText": "At Elara Tarım, we continue to offer quality and healthy products while protecting nature.",
      "footerText2": "You can contact us to get more information about our nature-friendly agricultural solutions.", 
      "contactPhone": "Phone",
      "contactFax": "Fax",
      "contactWhatsapp": "Whatsapp",
      "contactEmail": "Email",
      "contactAddress": "Address",
      "buyNow": "Buy Now"
    }
  },
  tr: {
    translation: {
      "welcome": "Ana Sayfa",
      "about": "Hakkımızda",
      "services": "Hizmetlerimiz",
      "team": "Ekibimiz",
      "pricing": "Fiyatlandırma",
      "blog": "Blog",
      "contact": "İletişim",
      "login": "Giriş",
      "signup": "Kayıt Ol",
      "language": "Dil",
      "about": "Hakkımızda",
      "aboutContent": "Elara Tarım olarak, doğayla uyumlu, sürdürülebilir ve yenilikçi tarım modelleriyle geleceğe ilham veriyoruz. Karbon ayak izi olmayan üretim sistemimizle doğaya zarar vermeden, tamamen yenilenebilir enerji kaynaklarıyla çalışıyor; toprağın bize sunduğu bereketi en verimli şekilde değerlendiriyoruz.",
      "readMore": "Daha Fazlası",
      "ourServices": "Doğaya saygı, Geleceğe miras",
      "ourServicesContent": "Elara Tarım olarak, yarınlarımız için üretiyoruz. Gelecek nesillere temiz, bereketli ve verimli topraklar bırakmak için doğaya duyduğumuz saygıyı üretimimizin merkezine koyuyoruz.",
      "services": {
        "item1": {
          "title": "Karbon ayak izi olmayan tarım",
          "description": "Doğayı koruyarak, yenilenebilir enerji ile üretim yapıyoruz."
        },
        "item2": {
          "title": "Jeotermal enerjiyle üretim",
          "description": "Fosil yakıt tüketmeden, doğal enerji kaynaklarından faydalanıyoruz."
        },
        "item3": {
          "title": "Katma değerli üretim",
          "description": "Berry grubu meyvelerle kaliteli ve sağlıklı ürünler sunuyoruz."
        },
        "item4": {
          "title": "İthalata engel, ihracata destek",
          "description": "Yerli tarımın gücünü artırıyor, dünyaya açılıyoruz."
        }
      },
     
      "whyElara": "Neden Elara Tarım?",
      "whyElaraContent": "Tarımın geleceğini şekillendirmek, ithalata olan bağımlılığı azaltmak ve yerli üretimi desteklemek için çıktığımız bu yolculukta, yenilikçi tarım teknolojileriyle katma değerli üretimler gerçekleştiriyoruz.",
      "whyElaraContent2": "Sıfır karbon ayak izi hedefiyle jeotermal enerji kullanarak sürdürülebilir tarım yapan Elara, lezzetli ve besleyici meyveler üretirken doğaya ve geleceğe saygılı bir anlayışla yerel üretimi küresel pazarlara taşımaktadır.",
      "howstudy": "Nasıl Çalışıyoruz?",
      "howstudyDesc": "Doğaya zarar vermeyen çözümlerle tarım yapıyor, gelecek nesillere temiz bir dünya bırakmak için çalışıyoruz.",
      "geothermalEnergy": "Jeotermal Enerji Kullanımı",
      "geothermalEnergyDesc1": "Tüm üretim sürecimizde yenilenebilir enerji kaynakları kullanılıyor.",
      "geothermalEnergyDesc2": "Fosil yakıt tüketimi bulunmamakta, sıfır karbon emisyonu.",
      "sustainableFarming": "Sürdürülebilir Tarım Uygulamaları",
      "sustainableFarmingDesc1": "Doğal kaynakları koruyan, minimum su tüketimi ile verimli üretim.",
      "sustainableFarmingDesc2": "İklim değişikliğine olumlu etki sağlayan çevreci model.",
      "highValueProduction": "Yüksek Katma Değerli Üretim",
      "highValueProductionDesc1": "Böğürtlen, ahududu ve frenk üzümü gibi berry grubu meyveler yetiştiriyoruz.",
      "highValueProductionDesc2": "Yüksek besin değeri ve kalite standartlarıyla üretim yapıyoruz.",
      "localProduction": "Yerel Üretim ve Global Ticaret",
      "localProductionDesc1": "İthalata olan bağımlılığı azaltıyoruz.",
      "localProductionDesc2": "Ürünlerimizi uluslararası pazarlara sunarak, ihracat hacmimizi büyütüyoruz.",
      "contactUs": "Bize Ulaşın!",
      "footerText": "Elara Tarım olarak, doğayı koruyarak kaliteli ve sağlıklı ürünler sunmaya devam ediyoruz.",
      "footerText2" : "Siz de bizimle iletişime geçerek, doğaya saygılı tarım çözümlerimiz hakkında daha fazla bilgi alabilirsiniz.",
      "contactPhone": "Telefon",
      "contactFax": "Fax",
      "contactWhatsapp": "Whatsapp",
      "contactEmail": "E-posta",
      "contactAddress": "Adres",
      "buyNow": "Sipariş Ver"
    }
  }
};

const defaultLanguage = 'tr';

const i18nConfig = {
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  debug: false,
  interpolation: {
    escapeValue: false,
  }
};

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      ...i18nConfig,
      detection: {
        order: ['querystring', 'localStorage', 'navigator'],
        lookupQuerystring: 'lng',
        caches: ['localStorage'],
      }
    });
} else {
  i18n
    .use(initReactI18next)
    .init(i18nConfig);
}

export default i18n; 