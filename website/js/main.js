import { initHero } from './hero.js';

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    ro: {
        "nav.back": "← ACASĂ",
        "hero.headline": "PERFORMANȚĂ FĂRĂ COMPROMIS.",
        "hero.subheadline": "Diagnostic de precizie și reparații la standarde europene. Indiferent dacă conduci pe benzină, diesel, hibrid sau electric, mașina ta merită expertiza noastră.",
        "hero.supporting": "UN SINGUR STANDARD: EXCELENȚA TEHNICĂ.",
        "hero.cta_primary": "PROGRAMARE RAPIDĂ",
        "hero.cta_secondary": "EXPLOREAZĂ SERVICIILE",
        "value.title": "DE CE AVANT MOTOR COM?",
        "value.c1_title": "EXPERTIZĂ TOTALĂ",
        "value.c1_text": "Reparăm orice marcă și orice tip de motorizare. De la motoare clasice cu ardere internă până la cele mai complexe sisteme hibride.",
        "value.c2_title": "PRECIZIE DIGITALĂ",
        "value.c2_text": "Utilizăm echipamente de diagnoză de ultimă generație pentru a identifica problema corect din prima încercare. Fără ghicitori, doar date.",
        "value.c3_title": "INTEGRITATE TEHNICĂ",
        "value.c3_text": "Lucrăm doar cu piese de origine sau premium și specialiști dedicați performanței pe termen lung.",
        "services.title": "SERVICII AUTO COMPLETE",
        "services.s1_title": "Diagnostic Computerizat",
        "services.s1_text": "Scanare electronică avansată și calibrare module pentru orice vehicul.",
        "services.s2_title": "Planuri Mentenanță",
        "services.s2_text": "Servicii de întreținere personalizate pentru a asigura longevitatea motorului tău.",
        "services.s3_title": "Siguranță Activă",
        "services.s3_text": "Verificări riguroase și reparații profesionale pentru sistemele de frânare și rulare.",
        "ev.title": "EXPERTIZĂ EV & HYBRID (ULTRA-TECH)",
        "ev.intro": "Aceleași standarde de rigoare aplicate sistemelor de propulsie ale viitorului.",
        "ev.s1_title": "Diagnostic Sisteme HV",
        "ev.s1_text": "Diagnoză software și hardware pentru sistemele de înaltă tensiune.",
        "ev.s2_title": "Monitorizare Baterie",
        "ev.s2_text": "Testare SOH (State of Health) și optimizarea performanței acumulatorilor.",
        "ev.s3_title": "Thermal Management",
        "ev.s3_text": "Mentenanța circuitelor de răcire vitale pentru eficiența și viața bateriei.",
        "ev.disclaimer": "Expertiza noastră în EV & Hybrid completează service-ul clasic, oferindu-ți o soluție completă sub același acoperiș. Nu intervenim mecanic asupra celulelor bateriei.",
        "corp.title": "SOLUȚII PENTRU FLOTE",
        "corp.s1_title": "Externalizare Mentenanță Parc Auto",
        "corp.s1_text": "Gestionăm reviziile și reparațiile parcului tău auto, pentru ca afacerea ta să nu stea pe loc.",
        "corp.s2_title": "Prioritate Business",
        "corp.s2_text": "Timp de imobilizare redus la minim și programări prioritare pentru persoane juridice.",
        "corp.s3_title": "Raportare Digitală",
        "corp.s3_text": "Transparență totală în costuri și istoric complet al intervențiilor pentru fiecare mașină.",
        "contact.title": "LOCAȚIE & PROGRAM",
        "contact.loc_title": "Locație",
        "contact.address": "Sf. Vineri, 16 A<br>Chișinău, Moldova",
        "contact.hours_title": "Program de Lucru",
        "contact.hours_text": "Luni - Vineri: 09:00 - 18:00<br>Sâmbătă: 09:00 - 14:00<br>Duminică: ÎNCHIS",
        "contact.phone_title": "Asistență Telefonică",
        "contact.phone_b2b": "+373 69 348 908",
        "contact.phone_b2c": "+373 69 188 593",
        "contact.email_title": "Email Management",
        "contact.email": "avantmotorcom2026@gmail.com",
        "contact.rights": "© 2026 Avant Motor Com. Toate drepturile rezervate.",
        "booking.title": "REZERVĂ O PROGRAMARE",
        "booking.message": "Programează-te simplu și rapid prin Google Calendar. Alege ziua și ora potrivită pentru tine, fără apeluri inutile.",
        "booking.cta": "SUNĂ ACUM",
        "booking.cta_online": "PROGRAMARE ONLINE",
        "services_page.title": "EXCELENȚĂ ÎN SERVICII AUTO",
        "services_page.intro": "Mentenanță preventivă și intervenții curative realizate cu precizie tehnică absolută.",
        "services_page.brakes": "Sisteme Frânare",
        "services_page.brakes_text": "Controlul complet al siguranței prin componente premium.",
        "services_page.suspension": "Tren Rulare",
        "services_page.suspension_text": "Stabilitate și confort pe orice suprafață.",
        "services_page.engine": "Propulsie / Injecție",
        "services_page.engine_text": "Putere și eficiență restabilite la parametri nominali.",
        "services_page.electric": "Inginerie Electrică",
        "services_page.electric_text": "Rezolvarea celor mai complexe erori de rețea.",
        "services_page.ac": "Climatizare",
        "services_page.ac_text": "Eficiență termică și igienizare profesională.",
        "services_page.seasonal": "Check-up Sezonier",
        "services_page.seasonal_text": "Pregătire riguroasă pentru condiții meteo extreme.",
        "ev_page.title": "EXPERTIZĂ AVANSATĂ EV & HYBRID",
        "ev_page.intro": "Tehnologie de vârf pentru vehiculele electrificate.",
        "ev_page.bridge": "\"Expertiza noastră în EV & Hybrid nu este un serviciu izolat, ci o extensie a nivelului nostru superior de diagnostic. Aceleași principii de precizie sunt aplicate zilnic și autoturismelor convenționale.\"",
        "ev_page.title_full": "Inginerie și Mentenanță EV / Hybrid",
        "ev_page.scope_title": "Arii de Expertiză:",
        "ev_page.li_1": "Diagnoză completă a sistemului de propulsie hybrid",
        "ev_page.li_2": "Verificarea izolației sistemelor de înaltă tensiune",
        "ev_page.li_3": "Update-uri software și calibrare module",
        "ev_page.li_4": "Mentenanță sistem climatizare (inclusiv răcire baterie)",

        // New Content - Advanced Diagnostics (Home)
        "home.diag_title": "Diagnoză avansată. Reparații mai rapide. Mai puține încercări.",
        "home.diag_text": "Folosim o platformă profesională de diagnoză care comunică în profunzime cu modulele electronice ale mașinii (nu doar „citire de erori”). Asta ne ajută să identificăm cauza reală a problemei și să validăm reparația corect, înainte să pleci din service.",
        "home.diag_benefit1": "Diagnosticul e mai precis → reducem riscul de „schimbat piese pe încercate”.",
        "home.diag_benefit2": "Timp mai scurt până la soluție → scanare completă + date live + verificări țintite.",
        "home.diag_benefit3": "Transparență → îți explicăm ce am găsit și de ce recomandăm anumite intervenții.",
        "home.diag_benefit4": "Validare după reparație → confirmăm prin teste și monitorizare că problema a dispărut.",

        // New Content - Services Block
        "services.diag_title": "Diagnoză la nivel de sistem, nu doar „check engine”",
        "services.diag_text": "Un tester simplu citește coduri. O platformă profesională ne permite să vedem date în timp real, să facem teste active (comenzi către componente) și să verificăm mai multe sisteme pentru a ajunge la cauza reală, nu doar la simptom.",
        "services.diag_benefit_list1": "Scanare multi-sistem (nu doar motor)",
        "services.diag_benefit_list2": "Date live & grafice pentru confirmarea comportamentului",
        "services.diag_benefit_list3": "Teste active (acolo unde e relevant) pentru a izola defectul",
        "services.diag_benefit_list4": "Pași clari de remediere și verificare finală (test + confirmare)",
        "services.diag_when_title": "Când e recomandată:",
        "services.diag_when_1": "martori aprinși / „check engine” / erori intermitente",
        "services.diag_when_2": "consum crescut, lipsă putere, vibrații, pornire grea",
        "services.diag_when_3": "probleme electrice, AC, senzori, sisteme de siguranță",
        "services.diag_when_4": "verificare înainte de drum lung / înainte de cumpărare (pre-check)",

        // New Content - EV/Hybrid Block
        "ev.adv_title": "EV & Hybrid: diagnoză avansată, proceduri de siguranță",
        "ev.adv_text": "Pentru EV/Hibrid, diagnoza corectă înseamnă proceduri de siguranță și verificări dedicate pentru sisteme de înaltă tensiune, sănătatea bateriei și sistemele conexe — pentru decizii corecte și reparații mai sigure.",
        "ev.adv_benefit1": "identificăm mai rapid sursa unei avertizări (nu doar “ștergem eroarea”)",
        "ev.adv_benefit2": "verificăm parametri relevanți pentru starea bateriei și sistemele de răcire (unde e cazul)",
        "ev.adv_benefit3": "comunicare clară: ce e critic, ce poate aștepta, ce necesită monitorizare",
        "ev.note": "Nu efectuăm lucrări mecanice asupra bateriei; intervențiile sunt orientate pe diagnosticare și sisteme conexe.",

        // New Content - Corporate Block
        "corp.adv_title": "Pentru companii: mai puțin timp în service, decizii mai rapide",
        "corp.adv_text": "Pentru business-uri cu mai multe mașini (de exemplu taxi, leasing, curierat/livrări, echipe de vânzări), contează viteza și predictibilitatea. Diagnoza avansată ne ajută să identificăm rapid cauza, să prioritizăm intervențiile (urgent vs. planificabil) și să comunicăm clar pentru aprobări și programări.",
        "corp.adv_benefit1": "mai puțin timp de staționare (diagnostic mai rapid)",
        "corp.adv_benefit2": "recomandări clare (ce trebuie acum vs. ce poate fi planificat)",
        "corp.adv_benefit3": "status ușor de urmărit pentru administrator parc auto / dispecer / șofer",
        "corp.tagline": "Lucrăm cu companii (B2B).",

        // New Content - FAQ
        "faq.title": "ÎNTREBĂRI FRECVENTE",
        "faq.q1": "De ce nu e suficient un tester simplu?",
        "faq.a1": "Pentru că multe probleme sunt intermitente sau în alte module. O diagnoză avansată folosește date live și teste de control pentru a izola cauza, nu doar simptomul.",
        "faq.q2": "Primesc o explicație clară?",
        "faq.a2": "Da — îți explicăm ce am identificat și care sunt următorii pași recomandați.",
        "faq.q3": "Este utilă și dacă nu am martori aprinși?",
        "faq.a3": "Da, mai ales pentru simptome „ciudate” (tremurat, consum, pierdere de putere) care nu aprind mereu martori.",

        // Twist
        "diff.twist": "Diagnoză bazată pe date, nu pe presupuneri."
    },
    ru: {
        "nav.back": "← НАЗАД",
        "hero.headline": "ПРОИЗВОДИТЕЛЬНОСТЬ БЕЗ КОМПРОМИССОВ.",
        "hero.subheadline": "Точная диагностика и ремонт по европейским стандартам. Будь то бензин, дизель, гибрид или электромобиль — ваш авто заслуживает нашей экспертизы.",
        "hero.supporting": "ЕДИНЫЙ СТАНДАРТ: ТЕХНИЧЕСКОЕ ПРЕВОСХОДСТВО.",
        "hero.cta_primary": "ЗАПИСАТЬСЯ",
        "hero.cta_secondary": "НАШИ УСЛУГИ",
        "value.title": "ПОЧЕМУ AVANT MOTOR COM?",
        "value.c1_title": "ПОЛНАЯ ЭКСПЕРТИЗА",
        "value.c1_text": "Ремонтируем любую марку и любой тип двигателя. От классических ДВС до сложнейших гибридных систем.",
        "value.c2_title": "ЦИФРОВАЯ ТОЧНОСТЬ",
        "value.c2_text": "Мы используем диагностическое оборудование последнего поколения, чтобы выявить проблему с первой попытки. Никаких догадок, только данные.",
        "value.c3_title": "ТЕХНИЧЕСКАЯ ЦЕЛОСТНОСТЬ",
        "value.c3_text": "Мы работаем только с оригинальными или премиальными запчастями и специалистами, нацеленными на долговечность.",
        "services.title": "ПОЛНЫЙ СПЕКТР АВТОУСЛУГ",
        "services.s1_title": "Компьютерная Диагностика",
        "services.s1_text": "Углубленное электронное сканирование и калибровка модулей для любого авто.",
        "services.s2_title": "Планы Обслуживания",
        "services.s2_text": "Индивидуальное техническое обслуживание для обеспечения долголетия двигателя.",
        "services.s3_title": "Активная Безопасность",
        "services.s3_text": "Тщательная проверка и профессиональный ремонт тормозных систем и ходовой части.",
        "ev.title": "ЭКСПЕРТИЗА EV & HYBRID (ULTRA-TECH)",
        "ev.intro": "Те же строгие стандарты, применяемые к силовым установкам будущего.",
        "ev.s1_title": "Диагностика HV Систем",
        "ev.s1_text": "Программная и аппаратная диагностика высоковольтных систем.",
        "ev.s2_title": "Мониторинг Батареи",
        "ev.s2_text": "Тестирование SOH (состояние здоровья) и оптимизация работы аккумуляторов.",
        "ev.s3_title": "Thermal Management",
        "ev.s3_text": "Обслуживание контуров охлаждения, жизненно важных для эффективности батареи.",
        "ev.disclaimer": "Наша экспертиза в EV & Hybrid дополняет классический сервис, предлагая комплексное решение. Мы не проводим механические работы с ячейками батареи.",
        "corp.title": "КОРПОРАТИВНЫЕ РЕШЕНИЯ",
        "corp.s1_title": "Аутсорсинг Автопарка",
        "corp.s1_text": "Мы берем на себя полное управление обслуживанием вашего автопарка, чтобы ваш бизнес не останавливался.",
        "corp.s2_title": "Бизнес Приоритет",
        "corp.s2_text": "Минимальный простой и приоритетная запись для юридических лиц.",
        "corp.s3_title": "Цифровая Отчетность",
        "corp.s3_text": "Полная прозрачность затрат и детальная история обслуживания для каждого автомобиля.",
        "contact.title": "МЕСТОПОЛОЖЕНИЕ И ГРАФИК",
        "contact.loc_title": "Адрес",
        "contact.address": "Sf. Vineri, 16 A<br>Кишинев, Молдова",
        "contact.hours_title": "График Работы",
        "contact.hours_text": "Пн - Пт: 09:00 - 18:00<br>Сб: 09:00 - 14:00<br>Вс: ЗАКРЫТО",
        "contact.phone_title": "Телефонная Поддержка",
        "contact.phone_b2b": "+373 69 348 908",
        "contact.phone_b2c": "+373 69 188 593",
        "contact.email_title": "Email Менеджмент",
        "contact.email": "avantmotorcom2026@gmail.com",
        "contact.rights": "© 2026 Avant Motor Com. Все права защищены.",
        "booking.title": "ЗАБРОНИРОВАТЬ ВИЗИТ",
        "booking.message": "Запишитесь просто и быстро через Google Calendar. Выберите удобный день и время, без лишних звонков.",
        "booking.cta": "ПОЗВОНИТЬ СЕЙЧАС",
        "booking.cta_online": "ОНЛАЙН ЗАПИСЬ",
        "services_page.title": "СОВЕРШЕНСТВО В АВТОСЕРВИСЕ",
        "services_page.intro": "Профилактическое обслуживание и точный ремонт, выполненные с абсолютной технической точностью.",
        "services_page.brakes": "Тормозные Системы",
        "services_page.brakes_text": "Полный контроль безопасности с использованием премиальных компонентов.",
        "services_page.suspension": "Ходовая Часть",
        "services_page.suspension_text": "Стабильность и комфорт на любом покрытии.",
        "services_page.engine": "Двигатель / Инжекция",
        "services_page.engine_text": "Мощность и эффективность, восстановленные до заводских параметров.",
        "services_page.electric": "Электротехника",
        "services_page.electric_text": "Решение самых сложных сетевых и программных ошибок.",
        "services_page.ac": "Климат-контроль",
        "services_page.ac_text": "Термическая эффективность и профессиональная дезинфекция.",
        "services_page.seasonal": "Сезонный Check-up",
        "services_page.seasonal_text": "Тщательная подготовка к экстремальным погодным условиям.",
        "ev_page.title": "ПРОДВИНУТАЯ ЭКСПЕРТИЗА EV & HYBRID",
        "ev_page.intro": "Передовые технологии для электрифицированного транспорта.",
        "ev_page.bridge": "\"Наша экспертиза в EV & Hybrid — это не изолированная услуга, а продолжение нашего высшего уровня диагностики. Те же принципы точности ежедневно применяются и к обычным автомобилям.\"",
        "ev_page.title_full": "Инженерия и Обслуживание EV / Hybrid",
        "ev_page.scope_title": "Области экспертизы:",
        "ev_page.li_1": "Полная диагностика гибридной силовой установки",
        "ev_page.li_2": "Проверка изоляции высоковольтных систем",
        "ev_page.li_3": "Обновление ПО и калибровка модулей",
        "ev_page.li_4": "Обслуживание системы климата (включая охлаждение АКБ)",

        // New Content - Advanced Diagnostics (Home) RU
        "home.diag_title": "Продвинутая диагностика. Быстрый ремонт. Меньше ошибок.",
        "home.diag_text": "Мы используем профессиональную диагностическую платфому, которая глубоко взаимодействует с электронными модулями (не просто «читает ошибки»). Это помогает найти реальную причину и подтвердить ремонт до выдачи авто.",
        "home.diag_benefit1": "Точный диагноз → меньше риска замены исправных деталей наугад.",
        "home.diag_benefit2": "Быстрое решение → полное сканирование + живые данные + целевые проверки.",
        "home.diag_benefit3": "Прозрачность → объясняем, что нашли и почему рекомендуем ремонт.",
        "home.diag_benefit4": "Проверка после ремонта → тестами подтверждаем, что проблема ушла.",

        // New Content - Services Block RU
        "services.diag_title": "Системная диагностика, а не просто «check engine»",
        "services.diag_text": "Простой сканер читает коды. Профессиональная платформа позволяет видеть данные в реальном времени, проводить активные тесты и проверять системы комплексно, чтобы найти причину, а не симптом.",
        "services.diag_benefit_list1": "Мультисистемное сканирование (не только мотор)",
        "services.diag_benefit_list2": "Живые данные и графики для подтверждения поведения",
        "services.diag_benefit_list3": "Активные тесты (где применимо) для изоляции дефекта",
        "services.diag_benefit_list4": "Четкие шаги ремонта и финальная проверка",
        "services.diag_when_title": "Когда рекомендуется:",
        "services.diag_when_1": "горят индикаторы / «check engine» / плавающие ошибки",
        "services.diag_when_2": "повышенный расход, нет тяги, вибрации, плохой запуск",
        "services.diag_when_3": "проблемы с электрикой, кондиционером, датчиками, безопасностью",
        "services.diag_when_4": "проверка перед дальней дорогой / покупкой (pre-check)",

        // New Content - EV/Hybrid Block RU
        "ev.adv_title": "EV & Hybrid: продвинутая диагностика, безопасность",
        "ev.adv_text": "Для EV/Hybrid правильная диагностика означает процедуры безопасности и проверки высоковольтных систем, здоровья батареи и смежных узлов — для верных решений и безопасного ремонта.",
        "ev.adv_benefit1": "быстрее находим источник предупреждения (не просто «сбрасываем»)",
        "ev.adv_benefit2": "проверяем параметры здоровья батареи и охлаждения",
        "ev.adv_benefit3": "ясная коммуникация: что критично, что терпит, что наблюдать",
        "ev.note": "Мы не проводим механические работы внутри батареи; фокус на диагностике и смежных системах.",

        // New Content - Corporate Block RU
        "corp.adv_title": "Для бизнеса: меньше простоя, быстрее решения",
        "corp.adv_text": "Для компаний с автопарком (такси, лизинг, доставка, торговые представители) важна скорость и предсказуемость. Продвинутая диагностика помогает быстро найти причину, приоритизировать ремонт (срочно vs планово) и ясно общаться для согласований.",
        "corp.adv_benefit1": "меньше времени в сервисе (быстрая диагностика)",
        "corp.adv_benefit2": "четкие рекомендации (что нужно сейчас vs что можно спланировать)",
        "corp.adv_benefit3": "статус понятен для управляющего автопарком / диспетчера / водителя",
        "corp.tagline": "Работаем с компаниями (B2B).",

        // New Content - FAQ RU
        "faq.title": "ЧАСТЫЕ ВОПРОСЫ",
        "faq.q1": "Почему недостаточно простого сканера?",
        "faq.a1": "Потому что многие проблемы плавающие или скрыты в других блоках. Продвинутая диагностика использует живые данные и тесты для поиска причины, а не симптома.",
        "faq.q2": "Я получу ясное объяснение?",
        "faq.a2": "Да — мы объясним, что нашли и какие шаги рекомендуем.",
        "faq.q3": "Это полезно без горящих ошибок?",
        "faq.a3": "Да, особенно при странных симптомах (вибрация, расход, потеря тяги), которые не всегда зажигают лампочку.",

        // Twist RU
        "diff.twist": "Диагностика на основе данных, а не догадок."
    },
    en: {
        "nav.back": "← HOME",
        "hero.headline": "PERFORMANCE WITHOUT COMPROMISE.",
        "hero.subheadline": "Precision diagnostics and European-standard repairs. Whether you drive gasoline, diesel, hybrid, or electric, your car deserves our expertise.",
        "hero.supporting": "ONE STANDARD: TECHNICAL EXCELLENCE.",
        "hero.cta_primary": "BOOK NOW",
        "hero.cta_secondary": "VIEW SERVICES",
        "value.title": "WHY AVANT MOTOR COM?",
        "value.c1_title": "TOTAL EXPERTISE",
        "value.c1_text": "We repair every brand and engine type. From classic internal combustion to the most complex hybrid systems.",
        "value.c2_title": "DIGITAL PRECISION",
        "value.c2_text": "We use next-generation diagnostic equipment to identify the issue correctly on the first try. No guesswork, just data.",
        "value.c3_title": "TECHNICAL INTEGRITY",
        "value.c3_text": "We work exclusively with original or premium parts and specialists dedicated to long-term performance.",
        "services.title": "COMPREHENSIVE AUTO SERVICES",
        "services.s1_title": "Diagnostic Systems",
        "services.s1_text": "Advanced electronic scanning and module calibration for any vehicle type.",
        "services.s2_title": "Maintenance Plans",
        "services.s2_text": "Personalized maintenance services to ensure your engine's maximum longevity.",
        "services.s3_title": "Active Safety",
        "services.s3_text": "Rigorous checks and professional repairs for braking and suspension systems.",
        "ev.title": "EV & HYBRID EXPERTISE (ULTRA-TECH)",
        "ev.intro": "The same rigorous standards applied to the propulsion systems of the future.",
        "ev.s1_title": "HV System Diagnostics",
        "ev.s1_text": "Software and hardware diagnostics for high-voltage systems.",
        "ev.s2_title": "Battery Monitoring",
        "ev.s2_text": "SOH (State of Health) testing and battery performance optimization.",
        "ev.s3_title": "Thermal Management",
        "ev.s3_text": "Maintenance of cooling circuits vital for battery efficiency and life.",
        "ev.disclaimer": "Our EV & Hybrid expertise complements classic service, providing a complete solution under one roof. We do not mechanically intervene on battery cells.",
        "corp.title": "FLEET SOLUTIONS",
        "corp.s1_title": "Maintenance Outsourcing",
        "corp.s1_text": "We handle all maintenance and repairs for your fleet, keeping your business in motion.",
        "corp.s2_title": "Executive Priority",
        "corp.s2_text": "Minimized downtime and priority scheduling for our corporate partners.",
        "corp.s3_title": "Digital Reporting",
        "corp.s3_text": "Total cost transparency and complete intervention history for every vehicle.",
        "contact.title": "LOCATION & HOURS",
        "contact.loc_title": "Location",
        "contact.address": "Sf. Vineri, 16 A<br>Chisinau, Moldova",
        "contact.hours_title": "Opening Hours",
        "contact.hours_text": "Mon - Fri: 09:00 - 18:00<br>Sat: 09:00 - 14:00<br>Sun: CLOSED",
        "contact.phone_title": "Phone Support",
        "contact.phone_b2b": "+373 69 348 908",
        "contact.phone_b2c": "+373 69 188 593",
        "contact.email_title": "Email Management",
        "contact.email": "avantmotorcom2026@gmail.com",
        "contact.rights": "© 2026 Avant Motor Com. All rights reserved.",
        "booking.title": "BOOK AN APPOINTMENT",
        "booking.message": "Book simply and quickly via Google Calendar. Choose the day and time that works for you, without unnecessary calls.",
        "booking.cta": "CALL NOW",
        "booking.cta_online": "BOOK ONLINE",
        "services_page.title": "EXCELLENCE IN AUTO SERVICES",
        "services_page.intro": "Preventative maintenance and precise repairs performed with absolute technical accuracy.",
        "services_page.brakes": "Braking Systems",
        "services_page.brakes_text": "Complete safety control through premium components.",
        "services_page.suspension": "Running Gear",
        "services_page.suspension_text": "Stability and comfort on any road surface.",
        "services_page.engine": "Propulsion / Injection",
        "services_page.engine_text": "Power and efficiency restored to factory specifications.",
        "services_page.electric": "Electrical Engineering",
        "services_page.electric_text": "Solving the most complex network and software errors.",
        "services_page.ac": "Climate Control",
        "services_page.ac_text": "Thermal efficiency and professional sanitization.",
        "services_page.seasonal": "Seasonal Check-up",
        "services_page.seasonal_text": "Rigorous preparation for extreme weather conditions.",
        "ev_page.title": "ADVANCED EV & HYBRID EXPERTISE",
        "ev_page.intro": "Leading technology for electrified vehicles.",
        "ev_page.bridge": "\"Our EV & Hybrid expertise is not an isolated service, but an extension of our superior diagnostic level. The same precision principles are applied daily to conventional cars as well.\"",
        "ev_page.title_full": "EV / Hybrid Engineering & Maintenance",
        "ev_page.scope_title": "Areas of Expertise:",
        "ev_page.li_1": "Complete hybrid powertrain diagnostics",
        "ev_page.li_2": "Insulation testing for high-voltage systems",
        "ev_page.li_3": "Software updates and module calibration",
        "ev_page.li_4": "Climate system maintenance (battery cooling included)",

        // New Content - Advanced Diagnostics (Home) EN
        "home.diag_title": "Advanced Diagnostics. Faster Repairs. Fewer Attempts.",
        "home.diag_text": "We use a professional diagnostic platform that communicates deeply with vehicle electronic modules (not just 'reading errors'). This helps us identify the real root cause and validate the repair correctly before you leave.",
        "home.diag_benefit1": "More precise diagnosis → reducing the risk of 'parts cannon' repairs.",
        "home.diag_benefit2": "Shorter time to solution → full scan + live data + targeted checks.",
        "home.diag_benefit3": "Transparency → we explain what we found and why we recommend specific interventions.",
        "home.diag_benefit4": "Validation after repair → we confirm via tests that the issue is gone.",

        // New Content - Services Block EN
        "services.diag_title": "System-level diagnostics, not just 'check engine'",
        "services.diag_text": "A simple reader sees codes. A professional platform lets us see real-time data, run active tests (component commands), and check multiple systems to get to the root cause, not just the symptom.",
        "services.diag_benefit_list1": "Multi-system scan (not just engine)",
        "services.diag_benefit_list2": "Live data & graphs to confirm behavior",
        "services.diag_benefit_list3": "Active tests (where relevant) to isolate the defect",
        "services.diag_benefit_list4": "Clear repair steps and final verification",
        "services.diag_when_title": "Recommended when:",
        "services.diag_when_1": "warning lights / 'check engine' / intermittent errors",
        "services.diag_when_2": "increased consumption, power loss, vibrations, hard starting",
        "services.diag_when_3": "electrical issues, AC, sensors, safety systems",
        "services.diag_when_4": "pre-trip check / pre-purchase inspection",

        // New Content - EV/Hybrid Block EN
        "ev.adv_title": "EV & Hybrid: advanced diagnostics, safety procedures",
        "ev.adv_text": "For EV/Hybrid, correct diagnostics mean safety procedures and dedicated checks for high-voltage systems, battery health, and related subsystems — for right decisions and safer repairs.",
        "ev.adv_benefit1": "faster identification of warning sources (not just 'clearing codes')",
        "ev.adv_benefit2": "checks of relevant parameters for battery health and cooling",
        "ev.adv_benefit3": "clear communication: what's critical, what can wait, what to monitor",
        "ev.note": "We do not perform mechanical work inside the battery; interventions focus on diagnostics and related systems.",

        // New Content - Corporate Block EN
        "corp.adv_title": "For Companies: Less Downtime, Faster Decisions",
        "corp.adv_text": "For businesses with multiple vehicles (taxi, leasing, delivery/courier, sales teams), speed and predictability matter. Advanced diagnostics help us quickly identify the cause, prioritize interventions (urgent vs. plannable), and communicate clearly for approvals and scheduling.",
        "corp.adv_benefit1": "less time off the road (faster diagnosis)",
        "corp.adv_benefit2": "clear recommendations (what needs doing now vs. what can be planned)",
        "corp.adv_benefit3": "status easy to track for fleet managers / dispatchers / drivers",
        "corp.tagline": "We work with companies (B2B).",

        // New Content - FAQ EN
        "faq.title": "FREQUENTLY ASKED QUESTIONS",
        "faq.q1": "Why isn't a simple scanner enough?",
        "faq.a1": "Because many issues are intermittent or in other modules. Advanced diagnostics use live data and control tests to isolate the cause, not just the symptom.",
        "faq.q2": "Will I get a clear explanation?",
        "faq.a2": "Yes — we explain what we identified and what the recommended next steps are.",
        "faq.q3": "Is it useful without warning lights?",
        "faq.a3": "Yes, especially for 'weird' symptoms (vibrations, consumption, power loss) that don't always trigger a light.",

        // Twist EN
        "diff.twist": "Data-driven diagnostics, not guesswork."
    }
};

// ============================================
// LANGUAGE SWITCHING
// ============================================
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

    document.documentElement.lang = lang;
    localStorage.setItem('preferred-language', lang);
}

// ============================================
// MOTION & REVEAL SYSTEM
// ============================================
function initRevealSystem() {
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // If it's a grid, stagger the children
                if (entry.target.classList.contains('service-grid')) {
                    const cards = entry.target.querySelectorAll('.service-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('is-visible');
                        }, index * 100);
                    });
                }
            }
        });
    }, revealOptions);

    // Observe sections and grids
    document.querySelectorAll('section, .service-grid').forEach(el => {
        revealObserver.observe(el);
    });
}

// ============================================
// PERFORMANCE SMOOTH SCROLL
// ============================================
function initPrecisionScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// INITIALIZATION LAYER
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Image Sequence Hero (Technical Focal Point)
    initHero();

    // 2. High-Fidelity Reveal Animation
    initRevealSystem();

    // 3. Precision Navigation
    initPrecisionScroll();

    // 4. Language State Management
    const savedLang = localStorage.getItem('preferred-language') || 'ro';
    setLanguage(savedLang);

    // 5. Attach Language Button Click Listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Handle initial scroll state for transparent elements
    handleScrollEffects();
});

window.addEventListener('scroll', handleScrollEffects);

function handleScrollEffects() {
    // 1. Navbar Glassmorphism
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // 2. Scroll Progress Bar
    const progress = document.getElementById('scroll-progress');
    if (progress) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progress.style.width = scrolled + "%";
    }
}
