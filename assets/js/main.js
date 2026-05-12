document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Logic
    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-i18n]');
    
    const translations = {
        en: {
            "nav-home": "Home",
            "nav-about": "About",
            "nav-app": "App",
            "nav-contact": "Contact",
            "hero-tag": "Available on Google Play",
            "hero-h1": "Discover the Best Places Around You",
            "hero-sub": "Hotels, hostels, restaurants and more — find the perfect spot in Algeria with Mabbiti's intuitive map exploration.",
            "hero-cta-play": "Download App",
            "hero-cta-more": "Learn More",
            "feat-title": "Why Mabbiti?",
            "feat-1-title": "Explore on Map",
            "feat-1-desc": "Find nearby spots visually and get directions instantly.",
            "feat-2-title": "Browse Categories",
            "feat-2-desc": "Hotels, hostels, houses & more organized for you.",
            "feat-3-title": "Read Reviews",
            "feat-3-desc": "Real ratings from real users across Algeria.",
            "app-h2": "Available Now on Android",
            "app-li-1": "Instant booking for hotels and hostels",
            "app-li-2": "Real-time location based recommendations",
            "app-li-3": "Verified user reviews and ratings",
            "app-coming": "Coming Soon",
            "footer-address-h4": "Our Office",
            "footer-address": "Algeria, Algiers",
            "footer-contact-h4": "Contact Us",
            "footer-links-h4": "Legal",
            "footer-social-h4": "Social",
            "lang-label": "Language:",
            "link-privacy": "Privacy Policy",
            "link-terms": "Terms of Use",
            "link-sitemap": "Sitemap",
            "form-name": "Full Name",
            "form-email": "Email Address",
            "form-message": "Your Message",
            "form-send": "Send Message",
            "form-success": "Message sent successfully!",
            "copyright": "© 2025 SPAS Mabbiti. All rights reserved."
        },
        fr: {
            "nav-home": "Accueil",
            "nav-about": "À propos",
            "nav-app": "Application",
            "nav-contact": "Contact",
            "hero-tag": "Disponible sur Google Play",
            "hero-h1": "Découvrez les meilleurs endroits autour de vous",
            "hero-sub": "Hôtels, auberges, restaurants et plus encore — trouvez l'endroit idéal en Algérie avec l'exploration intuitive de Mabbiti.",
            "hero-cta-play": "Télécharger l'App",
            "hero-cta-more": "En savoir plus",
            "feat-title": "Pourquoi Mabbiti ?",
            "feat-1-title": "Explorer sur la Carte",
            "feat-1-desc": "Trouvez visuellement les lieux à proximité et obtenez des directions instantanément.",
            "feat-2-title": "Parcourir les Catégories",
            "feat-2-desc": "Hôtels, auberges, maisons et plus organisés pour vous.",
            "feat-3-title": "Lire les Avis",
            "feat-3-desc": "Évaluations réelles d'utilisateurs réels à travers l'Algérie.",
            "app-h2": "Disponible maintenant sur Android",
            "app-li-1": "Réservation instantanée pour hôtels et auberges",
            "app-li-2": "Recommandations basées sur la localisation en temps réel",
            "app-li-3": "Avis et notes d'utilisateurs vérifiés",
            "app-coming": "Bientôt disponible",
            "footer-address-h4": "Notre Bureau",
            "footer-address": "Algérie, Alger",
            "footer-contact-h4": "Contactez-nous",
            "footer-links-h4": "Légal",
            "footer-social-h4": "Social",
            "lang-label": "Langue :",
            "link-privacy": "Politique de Confidentialité",
            "link-terms": "Conditions d'Utilisation",
            "link-sitemap": "Plan du site",
            "form-name": "Nom Complet",
            "form-email": "Adresse E-mail",
            "form-message": "Votre Message",
            "form-send": "Envoyer le Message",
            "form-success": "Message envoyé avec succès !",
            "copyright": "© 2025 SPAS Mabbiti. Tous droits réservés."
        },
        ar: {
            "nav-home": "الرئيسية",
            "nav-about": "حول",
            "nav-app": "التطبيق",
            "nav-contact": "اتصل بنا",
            "hero-tag": "متوفر على جوجل بلاي",
            "hero-h1": "اكتشف أفضل الأماكن من حولك",
            "hero-sub": "فنادق، نزل ، مطاعم وأكثر - ابحث عن المكان المثالي في الجزائر من خلال استكشاف الخريطة الحدسي من مبيتي.",
            "hero-cta-play": "تحميل التطبيق",
            "hero-cta-more": "تعلم المزيد",
            "feat-title": "لماذا مبيتي؟",
            "feat-1-title": "استكشف على الخريطة",
            "feat-1-desc": "ابحث عن الأماكن القريبة بصريًا واحصل على الاتجاهات فورًا.",
            "feat-2-title": "تصفح الفئات",
            "feat-2-desc": "الفنادق والنزل والمنازل والمزيد منظمة من أجلك.",
            "feat-3-title": "اقرأ التقييمات",
            "feat-3-desc": "تقييمات حقيقية من مستخدمين حقيقيين من جميع أنحاء الجزائر.",
            "app-h2": "متوفر الآن على أندرويد",
            "app-li-1": "حجز فوري للفنادق والنزل",
            "app-li-2": "توصيات تعتمد على الموقع في الوقت الفعلي",
            "app-li-3": "تقييمات ومراجعات مستخدمين موثقة",
            "app-coming": "قريباً",
            "footer-address-h4": "مكتبنا",
            "footer-address": "الجزائر، الجزائر العاصمة",
            "footer-contact-h4": "اتصل بنا",
            "footer-links-h4": "قانوني",
            "footer-social-h4": "تواصل اجتماعي",
            "lang-label": "اللغة:",
            "link-privacy": "سياسة الخصوصية",
            "link-terms": "شروط الاستخدام",
            "link-sitemap": "خريطة الموقع",
            "form-name": "الاسم الكامل",
            "form-email": "البريد الإلكتروني",
            "form-message": "رسالتك",
            "form-send": "إرسال الرسالة",
            "form-success": "تم إرسال الرسالة بنجاح!",
            "copyright": "© 2025 SPAS مبيتي. جميع الحقوق محفوظة."
        }
    };

    function switchLang(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        localStorage.setItem('mabbiti-lang', lang);
        
        // Track language switch
        if (typeof gtag === 'function') {
            gtag('event', 'language_switch', { event_label: lang });
        }
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => switchLang(btn.getAttribute('data-lang')));
    });

    // Initialize Language
    const savedLang = localStorage.getItem('mabbiti-lang') || 'en';
    switchLang(savedLang);

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Form Handling
    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const honeypot = document.getElementById('website_honeypot').value;
            if (honeypot) {
                e.preventDefault();
                return; // Spam detected
            }

            // Client-side validation is mostly handled by HTML5 (required, type="email")
            // We just show a success message for this static demo
            e.preventDefault();
            
            // Analytic Event
            if (typeof gtag === 'function') {
                gtag('event', 'contact_form_submit', { event_category: 'Lead' });
            }

            contactForm.reset();
            successMsg.style.display = 'block';
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);
        });
    }

    // Google Play Click Tracking
    const playStoreLinks = document.querySelectorAll('a[href*="play.google.com"]');
    playStoreLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'playstore_click', { event_category: 'CTA' });
            }
        });
    });
});
