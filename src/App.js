import React, { useState } from 'react';
import {
    BookOpen,
    MessageCircle,
    Globe,
    CheckCircle,
    Star,
    Menu,
    X,
    ChevronRight,
    Clock,
    Users,
    User,
    ShieldCheck,
    TrendingUp,
    UserCheck,
    Timer,
    Sparkles,
    Layout
} from 'lucide-react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeCategory, setActiveCategory] = useState('quran'); // 'arabic' или 'quran'

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

    const courseCategories = {
        arabic: {
            title: "Арабский язык",
            options: [
                {
                    title: "Мини-группы",
                    subtitle: "до 5 человек",
                    icon: <Users className="w-6 h-6" />,
                    price: "6 900 ₽",
                    description: "Для тех, кому комфортно обучаться в мини-группах.",
                    features: [
                        "Индивидуальный подход каждому ученику в группе до 5 человек",
                        "575 ₽ за одно занятие",
                        "12 живых уроков в месяц",
                        "Поддержка преподавателя на протяжении курса",
                        "Подбор подходящей группы от школы",
                        "Сертификат по уровню"
                    ]
                },
                {
                    title: "Индивидуально",
                    subtitle: "Один на один",
                    icon: <User className="w-6 h-6" />,
                    price: "11 900 ₽",
                    description: "Для тех, кому хочется особого внимания в процессе обучения.",
                    features: [
                        "Полный индивидуальный подход",
                        "991 ₽ за одно занятие",
                        "12 живых уроков в месяц",
                        "Поддержка преподавателя на протяжении курса",
                        "Любой удобный график",
                        "Сертификат по уровню"
                    ]
                }
            ]
        },
        quran: {
            title: "Коран",
            options: [
                {
                    title: "Групповые занятия",
                    subtitle: "до 10 человек",
                    icon: <Globe className="w-6 h-6" />,
                    price: "2 900 ₽",
                    description: "Для тех, кому комфортно обучаться в больших группах.",
                    features: [
                        "Индивидуальный подход каждому ученику в группе до 10 человек",
                        "241 ₽ за одно занятие",
                        "12 живых уроков в месяц",
                        "Поддержка преподавателя на протяжении курса",
                        "Подбор подходящей группы от школы",
                        "Сертификат по уровню"
                    ]
                },
                {
                    title: "Мини-группы",
                    subtitle: "до 5 человек",
                    icon: <Users className="w-6 h-6" />,
                    price: "3 900 ₽",
                    description: "Для тех, кому комфортно обучаться в мини-группах.",
                    features: [
                        "Индивидуальный подход каждому ученику в группе до 5 человек",
                        "325 ₽ за одно занятие",
                        "12 живых уроков в месяц",
                        "Поддержка преподавателя на протяжении курса",
                        "Подбор подходящей группы от школы",
                        "Сертификат по уровню"
                    ]
                },
                {
                    title: "Индивидуально",
                    subtitle: "Персонально",
                    icon: <User className="w-6 h-6" />,
                    price: "5 900 ₽",
                    description: "Для тех, кому хочется особого внимания в процессе обучения.",
                    features: [
                        "Полный индивидуальный подход",
                        "491 ₽ за одно занятие",
                        "12 живых уроков в месяц",
                        "Поддержка преподавателя на протяжении курса",
                        "Любой удобный график",
                        "Сертификат по уровню"
                    ]
                }
            ]
        }
    };

    const testimonials = [
        {
            name: "Амина З.",
            role: "Студентка, курс A2",
            text: "Я думала, арабская вязь — это невозможно сложно. Но методика школы разложила всё по полочкам. Через месяц я уже читала!",
            rating: 5
        },
        {
            name: "Руслан М.",
            role: "Бизнесмен",
            text: "Мне нужен был язык для переговоров в Дубае. Преподаватель-носитель помог освоить деловой этикет и специфическую лексику.",
            rating: 5
        }
    ];

    const faqs = [
        {
            question: "Кто преподаватели по Корану ?",
            answer: "В нашей школе преподают квалифицированные устазы, глубоко изучившие Коран и исламские науки. Каждый из них имеет более 7 лет системного религиозного образования, отлично владеет правилами таджвида и обладает большим опытом обучения. Часть преподавателей проходила обучение и курсы повышения квалификации в разных странах."
        },
        {
            question: "Сложно ли научиться читать Коран?",
            answer: "Научиться читать Коран возможно каждому при правильном подходе и регулярных занятиях. Обучение начинается с основ: букв, огласовок и правил чтения, после чего навык постепенно закрепляется на практике. При системных занятиях и поддержке преподавателя большинство учеников уверенно осваивают чтение Корана."
        },
        // {
        //   question: "Кто преподаватели по арабскому языку?",
        //   answer: "Занятия по арабскому языку ведут квалифицированные преподаватели, получившие профильное образование в местных учебных заведениях. Они имеют большой педагогический опыт, проходят регулярную практику и стажировки в арабских странах, а также преподают в колледжах и профильных высших учебных заведениях. Это позволяет сочетать академический подход с живым, практическим знанием языка."
        // },
        // {
        //   question: "Сложно ли изучить арабский язык?",
        //   answer: "Арабский язык осваивается постепенно и спокойно, шаг за шагом. Обучение начинается с простых и понятных основ, а новые темы добавляются по мере готовности ученика. При регулярных занятиях и поддержке преподавателя процесс обучения становится комфортным и понятным, без лишней нагрузки и спешки."
        // },
        {
            question: "Как проходят уроки?",
            answer: "Уроки проходят онлайн на платформе Контур.Толк. Платформа позволяет проводить занятия в формате живого общения с преподавателем: ученики видят и слышат учителя, могут задавать вопросы и получать обратную связь в реальном времени. Для занятий требуется только стабильный интернет и любое устройство — компьютер, планшет или телефон."
        }
    ];

    return (
        <div className="font-sans text-slate-800 bg-slate-50 min-h-screen selection:bg-[#790000]/30">
            <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

            {/* Navigation */}
            <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                            <div className="">
                                <img src="/logo.png" alt="" className="block w-16"/>
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-[#003049]">Academy Fav</span>
                        </div>

                        <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
                            <a href="#about" className="text-slate-600 hover:text-[#790000] transition">О нас</a>
                            <a href="#courses" className="text-slate-600 hover:text-[#790000] transition">Курсы</a>
                            <a href="#method" className="text-slate-600 hover:text-[#790000] transition">Методика</a>
                            <a href="#reviews" className="text-slate-600 hover:text-[#790000] transition">Отзывы</a>
                            <a href="https://wa.me/79899290505" target={'_blank'} className="bg-[#790000] text-white px-6 py-2.5 rounded-full hover:bg-[#5a0000] transition shadow-lg shadow-[#790000]/20 transform hover:-translate-y-0.5 active:translate-y-0">
                                Пробный урок
                            </a>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} className="text-slate-600 hover:text-[#790000] focus:outline-none p-2">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg z-40">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <a href="#about" onClick={toggleMenu} className="block px-3 py-3 text-slate-600 hover:bg-slate-50 hover:text-[#790000] rounded-md font-medium">О нас</a>
                            <a href="#courses" onClick={toggleMenu} className="block px-3 py-3 text-slate-600 hover:bg-slate-50 hover:text-[#790000] rounded-md font-medium">Курсы</a>
                            <a href="#method" onClick={toggleMenu} className="block px-3 py-3 text-slate-600 hover:bg-slate-50 hover:text-[#790000] rounded-md font-medium">Методика</a>
                            <a href="https://wa.me/79899290505" target={'_blank'} className="w-full mt-4 bg-[#790000] text-white px-6 py-3 rounded-lg font-medium">
                                Записаться бесплатно
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#003049]/5 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-[#790000]/5 rounded-full blur-3xl opacity-50"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-8 z-10">
                            <div className="inline-flex items-center gap-2 bg-white border border-[#790000]/10 px-4 py-1.5 rounded-full text-[#790000] font-medium text-sm shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#790000]/40 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#790000]"></span>
                </span>
                                Идет набор в группы
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#003049] leading-[1.15] tracking-tight">
                                Открой для себя <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#790000] via-[#790000] to-[#003049] pb-2">
                  знания Корана
                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                                Изучайте Коран с опытными педагогами. От первых букв до свободного чтения.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <a href="https://wa.me/79899290505" target={'_blank'} className="px-8 py-4 bg-[#790000] text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-[#790000]/20 flex items-center justify-center gap-2 group hover:bg-[#5a0000] hover:-translate-y-1 hover:scale-105 active:scale-95">
                                    Попробовать бесплатно
                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                {/*<button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:border-[#790000] hover:text-[#790000] hover:-translate-y-1 hover:scale-105 active:scale-95">*/}
                                {/*  <Play size={20} className="fill-current" /> Смотреть видео*/}
                                {/*</button>*/}
                            </div>

                            <div className="pt-6 flex flex-wrap items-center gap-6 sm:gap-8 text-sm text-slate-600 font-medium">
                                <div className="flex items-center gap-2">
                                    <div className="bg-[#790000]/10 p-1 rounded-full"><CheckCircle size={14} className="text-[#790000]" /></div>
                                    500+ учеников
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="bg-[#790000]/10 p-1 rounded-full"><CheckCircle size={14} className="text-[#790000]" /></div>
                                    Сертификат по окончании
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-8 lg:mt-0">
                            <div className="relative z-10 bg-white p-2 rounded-3xl shadow-2xl rotate-1 hover:rotate-0 transition duration-700 ease-out">
                                <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#003049] to-[#001a29] flex items-center justify-center">
                                        <div className="opacity-10 absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                                        <span className="text-9xl text-white/10 font-serif select-none pointer-events-none transform group-hover:scale-110 transition duration-1000" dir="rtl">اقرأ</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                                        <p className="text-3xl font-bold font-serif mb-1" dir="rtl">اللغة العربية</p>
                                        <p className="text-base opacity-90 font-light tracking-wide">Красота и глубина в каждом слове</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating rating card */}
                            <div className="absolute -bottom-8 -left-4 sm:-left-8 z-20 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 animate-bounce-slow max-w-[200px] sm:max-w-none hover:scale-105 transition-transform cursor-default">
                                <div className="bg-[#790000]/10 p-3 rounded-full text-[#790000] shrink-0">
                                    <Star className="fill-current" size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">4.9/5</p>
                                    <p className="text-xs text-slate-500">Рейтинг на основе отзывов</p>
                                </div>
                            </div>

                            <div className="absolute -top-6 -right-6 z-0 w-32 h-32 bg-[#003049]/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Academy Fav? (Features) */}
            <section id="about" className="py-24 bg-white relative text-[#003049]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Почему выбирают Academy Fav?</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">Мы объединили традиционные методики преподавания с современными технологиями, чтобы сделать процесс обучения максимально эффективным.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-stretch">
                        {/* Feature 1 */}
                        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 group flex flex-col justify-center">
                            <div className="w-16 h-16 bg-white shadow-sm text-[#790000] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Проверенный опыт</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Более 5 лет работы и сотни довольных учеников по всему миру. Мы знаем, как довести вас до результата.
                            </p>
                        </div>

                        {/* INTERESTING DESIGN: Confidence Guarantee */}
                        <div className="relative p-[2px] rounded-[2.5rem] bg-gradient-to-br from-[#790000] via-[#003049] to-[#790000] shadow-2xl shadow-[#003049]/10 hover:shadow-[#790000]/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent)] opacity-40"></div>

                            <div className="relative bg-white rounded-[2.4rem] p-8 h-full flex flex-col overflow-hidden">
                                <div className="absolute -top-6 -right-6 text-[#790000] opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                                    <ShieldCheck size={180} />
                                </div>

                                <div className="flex justify-between items-start mb-8 relative">
                                    <div className="w-16 h-16 bg-[#790000]/5 text-[#790000] rounded-2xl flex items-center justify-center shadow-inner group-hover:bg-[#790000] group-hover:text-white transition-all duration-500">
                                        <ShieldCheck size={36} className="group-hover:rotate-12 transition-transform duration-500" />
                                    </div>
                                    <div className="bg-[#790000]/10 text-[#790000] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-[#790000]/20 shadow-sm">
                                        Гарантия
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black mb-4 leading-tight">
                                    Гарантия <br /> уверенности
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                                    Мы уверены в качестве наших уроков. Если формат обучения вам не подойдёт, <strong>мы вернём деньги</strong> без лишних вопросов.
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#790000]/10 flex items-center justify-center text-[#790000]">
                                        <CheckCircle size={16} />
                                    </div>
                                    <span className="text-xs font-bold text-[#790000] uppercase tracking-wider">Безопасно и без риска</span>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 group flex flex-col justify-center">
                            <div className="w-16 h-16 bg-white shadow-sm text-[#003049] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Гибкий график</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Учитесь когда и где удобно. Индивидуальный подбор времени занятий с учителем под ваш ритм жизни.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section with Tabs */}
            <section id="courses" className="py-24 bg-[#003049] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Программы обучения</h2>
                        <div hidden className="inline-flex bg-[#002538] p-1.5 rounded-xl backdrop-blur-sm border border-white/10">
                            <button
                                onClick={() => setActiveCategory('arabic')}
                                className={`px-8 py-3 rounded-lg text-sm font-bold uppercase transition-all duration-300 ${activeCategory === 'arabic' ? 'bg-white text-[#003049] shadow-lg' : 'text-white/60 hover:text-white'}`}
                            >
                                Арабский язык
                            </button>
                            <button
                                onClick={() => setActiveCategory('quran')}
                                className={`px-8 py-3 rounded-lg text-sm font-bold uppercase transition-all duration-300 ${activeCategory === 'quran' ? 'bg-white text-[#003049] shadow-lg' : 'text-white/60 hover:text-white'}`}
                            >
                                Коран
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {courseCategories[activeCategory].options.map((option, index) => (
                            <div key={index} className="bg-white text-[#003049] rounded-3xl p-8 flex flex-col hover:transform hover:scale-105 transition duration-300 shadow-2xl relative overflow-hidden group">
                                <div className="relative h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-[#790000]/5 rounded-xl text-[#790000] group-hover:bg-[#790000] group-hover:text-white transition-colors duration-300">
                                            {option.icon}
                                        </div>
                                        <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                      {option.subtitle}
                    </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#790000] transition-colors">{option.title}</h3>
                                    <div className="text-3xl font-bold text-[#790000] mb-4">{option.price}</div>
                                    <p className="text-slate-600 mb-8 text-sm leading-relaxed">{option.description}</p>
                                    <div className="mt-auto">
                                        <ul className="space-y-3 mb-8">
                                            {option.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-xs text-slate-700">
                                                    <CheckCircle size={16} className="text-[#790000] shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <a href={`https://wa.me/79899290505?text=Ассаламу алейкум, хочу записаться на уроки Корана по тарифу "${option.title}"`} target={'_blank'} className="w-full py-4 bg-[#003049] text-white rounded-xl font-bold transition-all duration-300 hover:bg-[#790000] hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-lg">
                                            Записаться
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section id="method" className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-[#003049]">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Как мы учим?</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Мы разработали систему, которая делает сложное простым, а процесс обучения — увлекательным и понятным для каждого.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Visual Element */}
                        <div className="relative group order-2 lg:order-1">
                            <div className="absolute -inset-4 bg-[#003049]/5 rounded-[3rem] blur-2xl group-hover:bg-[#003049]/10 transition-colors duration-700"></div>
                            <div className="relative aspect-square bg-white rounded-[3rem] shadow-2xl p-10 border border-slate-100 flex flex-col justify-center items-center overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-10">
                                    <Sparkles size={100} className="text-[#003049]" />
                                </div>
                                <div className="w-full space-y-8 relative z-10">
                                    <div className="p-6 bg-[#003049]/5 rounded-3xl border border-[#003049]/10 shadow-sm transform group-hover:scale-[1.02] transition-transform duration-500">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-[#003049] text-white rounded-xl flex items-center justify-center shadow-lg">
                                                <Layout size={20} />
                                            </div>
                                            <p className="text-[#003049] font-black text-xl">Наглядный прогресс</p>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Наша система автоматически отслеживает навыки чтения и пополнение словарного запаса в реальном времени.
                                        </p>
                                    </div>
                                    <div className="flex gap-4 items-center justify-center bg-slate-50 p-4 rounded-2xl border border-slate-200 border-dashed">
                                        <div className="flex -space-x-3">
                                            {[1,2,3,4].map(i => (
                                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-[#003049] flex items-center justify-center text-[10px] font-bold text-white shadow-sm opacity-${100 - i*20}`}>
                                                    {i}
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">+500 активных учеников</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4-Point Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 order-1 lg:order-2">
                            {[
                                {
                                    id: 1,
                                    icon: <BookOpen />,
                                    title: "Понятные объяснения",
                                    text: "Материал объясняется доступно и последовательно, с использованием русского языка."
                                },
                                {
                                    id: 2,
                                    icon: <TrendingUp />,
                                    title: "Пошаговая программа",
                                    text: "Обучение выстроено от простого к сложному. Каждый новый материал закрепляется на практике."
                                },
                                {
                                    id: 3,
                                    icon: <UserCheck />,
                                    title: "Работа с преподавателем",
                                    text: "Занятия проходят в живом формате. Преподаватель следит за прогрессом и исправляет ошибки."
                                },
                                {
                                    id: 4,
                                    icon: <Timer />,
                                    title: "Индивидуальный темп",
                                    text: "Мы учитываем уровень и возможности каждого. Преподаватель подберет темп без спешки и перегрузки."
                                }
                            ].map((item) => (
                                <div key={item.id} className="group p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#003049]/20 transition-all duration-300">
                                    <div className="w-12 h-12 bg-[#003049]/5 text-[#003049] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#003049] group-hover:text-white transition-all duration-500 shadow-inner">
                                        {React.cloneElement(item.icon, { size: 24 })}
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 group-hover:text-[#790000] transition-colors">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section hidden id="reviews" className="py-24 bg-white text-[#003049]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-16 tracking-tight">Что говорят студенты</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((review, i) => (
                            <div key={i} className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:bg-[#790000]/5 transition duration-300 text-left">
                                <div className="flex gap-1 mb-6 text-[#790000]">
                                    {[...Array(review.rating)].map((_, idx) => <Star key={idx} size={18} className="fill-current" />)}
                                </div>
                                <p className="text-slate-700 text-lg italic mb-8 leading-relaxed">"{review.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#003049] rounded-full flex items-center justify-center font-bold text-white text-lg shadow-md">
                                        {review.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold">{review.name}</p>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50 text-[#003049]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Частые вопросы</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-8 py-6 text-left flex justify-between items-center group"
                                >
                                    <span className="font-bold text-lg group-hover:text-[#790000] transition-colors">{faq.question}</span>
                                    <span className={`transform transition-transform duration-500 ${activeFaq === index ? 'rotate-180 bg-[#790000] text-white' : 'bg-[#790000]/10 text-[#790000]'} p-2 rounded-full`}>
                    <ChevronRight size={20} />
                  </span>
                                </button>
                                {activeFaq === index && (
                                    <div className="px-8 py-6 bg-slate-50 text-slate-600 border-t border-slate-100 leading-relaxed text-sm animate-fadeIn">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#003049] text-white pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 tracking-tight">Готовы начать?</h2>
                        <p className="text-white/60 text-lg mb-10 max-w-md">Запишитесь на бесплатный вводный урок. Мы определим ваш уровень и ответим на вопросы.</p>

                        <div className="flex gap-8 sm:gap-12">
                            <a href="https://t.me/academyfav" target={'_blank'} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                                <div className="bg-[#790000]/20 p-3 rounded-full group-hover:bg-[#790000] transition-colors">
                                    <MessageCircle size={24} className="text-[#790000] group-hover:text-white transition-colors" />
                                </div>
                                <span className="font-bold text-xl tracking-wide">Telegram</span>
                            </a>
                            <a href="https://wa.me/79899290505" target={'_blank'} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                                <div className="bg-[#790000]/20 p-3 rounded-full group-hover:bg-[#790000] transition-colors">
                                    <Globe size={24} className="text-[#790000] group-hover:text-white transition-colors" />
                                </div>
                                <span className="font-bold text-xl tracking-wide">WhatsApp</span>
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8 text-center text-white/20 text-xs tracking-widest uppercase">
                        <p>&copy; 2026 Academy Fav. Все права защищены.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
