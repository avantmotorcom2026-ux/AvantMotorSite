
const translations = {
    ro: {
        "nav.back": "← Înapoi la Site",
        "nav.back_blog": "← Înapoi la Blog",
        "blog.meta": "Ianuarie 2026 • Avant Motor Blog",
        "booking.cta": "SUNĂ ACUM",
        "booking.cta_online": "PROGRAMARE ONLINE",
        "footer.rights": "© 2026 Avant Motor Com. Toate drepturile rezervate.",
        "nav.blog": "BLOG"
    },
    ru: {
        "nav.back": "← Назад на сайт",
        "nav.back_blog": "← Назад в блог",
        "blog.meta": "Январь 2026 • Блог Avant Motor",
        "booking.cta": "ПОЗВОНИТЬ",
        "booking.cta_online": "ОНЛАЙН ЗАПИСЬ",
        "footer.rights": "© 2026 Avant Motor Com. Все права защищены.",
        "nav.blog": "БЛОГ"
    },
    en: {
        "nav.back": "← Back to Site",
        "nav.back_blog": "← Back to Blog",
        "blog.meta": "January 2026 • Avant Motor Blog",
        "booking.cta": "CALL NOW",
        "booking.cta_online": "BOOK ONLINE",
        "footer.rights": "© 2026 Avant Motor Com. All rights reserved.",
        "nav.blog": "BLOG"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('preferred-language', lang);

    // Toggle Content Blocks (for whole article bodies or list items)
    document.querySelectorAll('.lang-content').forEach(el => {
        if (el.getAttribute('data-lang') === lang) {
            el.style.display = 'block';
            // Trigger a re-flow or animation if needed
            setTimeout(() => el.style.opacity = 1, 10);
        } else {
            el.style.display = 'none';
            el.style.opacity = 0;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Language
    const savedLang = localStorage.getItem('preferred-language') || 'ro';
    setLanguage(savedLang);

    // Attach Click Listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
