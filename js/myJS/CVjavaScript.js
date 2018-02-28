//Language skills levels
var lat = ["dzimtā", "teicami", "ļoti labi", "labi", "sākumlīmenis"];
var eng = ["native", "near native", "fluent", "intermediate", "basic"];
var rus = ["родной", "отлично", "очень хорошо", "хорошо", "начальный уровень"];
var ger = ["Muttersprache", "fließend", "sehr gut", "gut", "Grundlagen"];
var jap = ["母国語", "とても良い", "良い", "基本"];


//Language setups
var latviski = {
/* h2 span */ h2s: "Curriculum Vitae / ",
/* h2 a */ h2a: "Motivācijas vēstule",
/* headings */ panelTitle: ["Darba pieredze", "Izglītība", "Papildus izglītība", "Valodu prasmes", "Citas prasmes", "Intereses"],
/* periods */ period: ["2017. gada 1. decembris –<br>šis brīdis", "2016.gada 25. janvāris –<br>2017. gada 5. septembris", "2015. gada 5. maijs −<br>2015. gada 26. oktobris", "2017. gada septembris −<br>šis brīdis", "2013. gada septembris  −<br>2017. gada jūnijs", "2001. gada septembris −<br>2013. gada maijs", "2017. gada aprīlis –<br>2017. gada maijs", "2017. gada maijs –<br>šis brīdis", "2016. gada oktobris"],
/* class="amats" */ amats: ["RPA izstrādātājs", "Grāmatvedis", "Tehniskā palīdzība", "1. līmeņa profesionālās augstākās izglītības programma “Programmēšana un datortīklu administrēšana”", "Bakalaura studiju programma “Finanses”", "Vidusskolas izglītība", "Kurss “Datorprogrammēšana”", "Kurss “Programmēšana”", "Kurss “Finanšu grāmatvedibas pamati”", "Datorprasmes", "Autovadītāja apliecība"],
/* text of the links */ links: ["Accenture Latvijas filiāle", "Tieto Latvia, SIA", "Domenika Latvia, SIA", "Latvijas Universitāte", "Banku augstskola", "Puškina licejs"],
/* class="pienakumi" */ pienakumi: ["Pienākumi", "Pienākumi:", "Pienākumi:", "Priekšmeti:", "Priekšmeti:", "Prasmes:", "Prasmes:", "Prasmes:", "Web programmēšana:", "Web servera programmēšana:", "Citas:", "Kategorija:"],
/* table headers */ tabHeader: ["Valoda", "Runāju", "Saprotu", "Rakstu"],
/* table content */ tabCont: ["Krievu", lat[0], lat[0], lat[0], "Angļu", lat[1], lat[1], lat[1], "Latviešu", lat[2], lat[1], lat[2], "Vācu", lat[3], lat[2], lat[3], "Japāņu", lat[4], lat[4], lat[4]],
/*remainign stuff */ misc: ["Procesu automatizācija (.NET programmēšana)", "Debitoru un naudas plūsmas grāmatvedība", "Palīdzība IT administratoram, līgumu un līgumu pielikumu tulkošana, datu bāzes objektu aprakstu izveide", "vēl nav zināms", "Finanšu grāmatvedība, nodokļi, finanšu analīze, svešvalodas (angļu un vācu)", "un", "un", "sadarbībā ar Tieto Latvia, SIA", "Pilns grāmatvedības cikls", "kopš", "Futbola fristails, snūkers, Japāna, skriešana"],
};

var english = {
/* h2 span */ h2s: "Curriculum Vitae / ",
/* h2 a */ h2a: "Cover letter",
/* headings */ panelTitle: ["Work experience", "Education", "Additional education", "Language skills", "Other skills", "Hobbies"],
/* periods */ period: ["25 January 2016 –<br>today", "5 May 2015 −<br>26 October 2015", "September 2017 −<br>today", "September 2013  −<br>June 2017", "September 2001 −<br>May 2013", "April 2017 −<br>May 2017", "May 2017 −<br>today", "October 2016"],
/* class="amats" */ amats: ["Accountant", "Technical support", "First-level professional higher education programme “Programming and computer network administration”", "Bachelor programme “Financial Management”", "High school education", "Course “Computer Programming”", "Course “Programming”", "Course “Financial Accounting Basics”", "Computer skills", "Driving licence"],
/* text of the links */ links: ["Tieto Latvia, SIA", "Domenika Latvia, SIA", "University of Latvia", "BA School of Business and Finance", "Pushkin lyceum"],
/* class="pienakumi" */ pienakumi: ["Responsibilities:", "Responsibilities:", "Subjects:", "Subjects:", "Skills:", "Skills:", "Skills:", "Web programming:", "Web server programming:", "Miscellaneous:", "Category:"],
/* table headers */ tabHeader: ["Language", "Speaking", "Comprehension", "Writing"],
/* table content */ tabCont: ["Russian", eng[0], eng[0], eng[0], "English", eng[2], eng[2], eng[2], "Latvian", eng[2], eng[2], eng[2], "German", eng[3], eng[3], eng[2], "Japanese", eng[4], eng[4], eng[4]],
/*remainign stuff */ misc: ["Accounts receivable and cash accounting", "Assisting the IT administrator, transleting of agreements and their appendices, creating descriptions of data base objects", "no data available", "Financial accounting, taxation, financial analysis, foreign languages (English and German)", "and", "and", "in cooperation with Tieto Latvia, SIA", "Complete accounting cycle", "from", "Football freestyle, snooker, Japan, jogging"],
};

var porusski = {
/* h2 span */ h2s: "Резюме / ",
/* h2 a */ h2a: "Мотивационное письмо",
/* headings */ panelTitle: ["Опыт работы", "Образование", "Дополнительное образование", "Знание языков", "Другие умения", "Интересы"],
/* periods */ period: ["25 января 2016 года –<br>сегодня", "5 мая 2015 года −<br>26 октября 2015 года", "сентябрь 2017 года −<br>сегодня", "сентябрь 2013 года −<br>июнь 2017 года", "сентябрь 2001 года −<br>май 2013 года", "апрель 2017 года –<br>май 2017 года", "май 2017 года –<br>сегодня", "октябрь 2016 года"],
/* class="amats" */ amats: ["Бухгалтер", "Техническая помощь", "Программа 1-го уровеня профессионального высшего образования “Программирование и администрация компьютерных сетей”", "Программа бакалавриата “Финансы”", "Образование средней школы", "Курс “Компьютерное программирование”", "Курс “Программирование”", "Курс “Основы Финансовой бухгалтерии”", "Компьютерные умения", "Водительское удостоверение"],
/* text of the links */ links: ["Тието Латвия, SIA", "Доменика Латвия, SIA", "Латвийский университет", "Банковская высшая школа", "Пушкинский лицей"],
/* class="pienakumi" */ pienakumi: ["Обязанности:", "Обязанности:", "Предметы:", "Предметы:", "Умения:", "Умения:", "Умения:", "Веб программирование:", "Программирование веб сервера:", "Разное:", "Категория:"],
/* table headers */ tabHeader: ["Язык", "Говорю", "Понимаю", "Пишу"],
/* table content */ tabCont: ["Русский", rus[0], rus[0], rus[0], "Английский", rus[1], rus[1], rus[1], "Латышский", rus[2], rus[1], rus[2], "Немецкий", rus[3], rus[2], rus[3], "Японский", rus[4], rus[4], rus[4]],
/*remainign stuff */ misc: ["Бухгалтерия дебиторов и денежного потока", "Помощь ИТ администратору, перевод договоров и приложениий, создание описаний объектов базы данных", "ещё неизвестно", "Финансовая Бухгалтерия, налоги, финансовый анализ, иностранные языки (английский и немецкий)", "и", "и", "в сотрудничестве с Тието Латвия, SIA", "Полный бухгалтерский цикл", "с", "Футбольный фристайл, снукер, Япония, бег"],
};

var deutsch = {
/* h2 span */ h2s: "Lebenslauf / ",
/* h2 a */ h2a: "Motivationsschreiben",
/* headings */ panelTitle: ["Berufserfahrung", "Ausbildung", "Zusätzliche Ausbildung", "Sprachkenntnisse", "Besondere Fähigkeiten", "Interessen"],
/* periods */ period: ["25. Jänner 2016 –<br>heute", "5. Mai 2015 −<br>26. Oktober 2015", "September 2017 −<br>heute", "September 2013 −<br>Juni 2017", "September 2001 −<br>Mai 2013", "April 2017 –<br>Mai 2017", "Mai 2017 –<br>heute", "Oktober 2016"],
/* class="amats" */ amats: ["Buchhalter", "Technische Unterstützung", "Studium der “Programmierung und Administrieren der Computernetzwerke” (erste Ebene)", "Studium der “Finanzen” (Bachelor)", "Gymnasium", "Lehrgang “Computerprogrammierung”", "Lehrgang “Programmierung”", "Lehrgang “Grundlagen der finanziellen Buchhaltung”", "Computerfähigkeinten", "Führerschein"],
/* text of the links */ links: ["Tieto Latvia, SIA", "Domenika Latvia, SIA", "Universtität Lettlands", "Bankhochschule", "Puschkin Lyzeum"],
/* class="pienakumi" */ pienakumi: ["Arbeitspflichten:", "Arbeitspflichten:", "Fache:", "Fache:", "Fähigkeiten:", "Fähigkeiten:", "Fähigkeiten:", "Web Programmierung:", "Programmierung des Webservers", "Sonstige Fähigkeiten:", "Kategorie:"],
/* table headers */ tabHeader: ["Sprache", "Sprechen", "Verständnis", "Rechtschreibung"],
/* table content */ tabCont: ["russisch", ger[0], ger[0], ger[0], "englisch", ger[1], ger[1], ger[1], "lettisch", ger[1], ger[1], ger[1], "deutsch", ger[2], ger[2], ger[1], "japanisch", ger[4], ger[4], ger[4]],
/*remainign stuff */ misc: ["Buchhaltung der Forderungen und des Bargeldumlaufes", "Unterstützung des IT Administrators, Übersetzung der Vertrage und ihren Anhänge, Schaffung der Beschreibungen der Datenbasisobjekte", "keine Informationnen verfügbar", "Finanzielle Buchhaltung, Steuern, Finanzielle Analyse, Fremdsprachen (englisch und hochdeutsch)", "und", "und", "in Zusammenarbeit mit Tieto Latvia, SIA", "Kompletter Zyklus der Buchhaltung", "seit", "Fußball Freistyle, Snooker, Japan, Laufen"],
};

var nihongo = {
/* h2 span */ h2s: "履歴書 / ",
/* h2 a */ h2a: "カバーレター",
/* headings */ panelTitle: ["実務経験", "教育", "追加教育", "言語的能力", "特別なスキル", "趣味"],
/* periods */ period: ["２０１６年１月25日 –<br>今日", "２０１５年5月5日 −<br>２０１５年10月26日", "２０１７年9月 −<br>今日", "２０１３年9月  −<br>２０１７年7月", "２００１年9月 −<br>２０１３年5月", "２０１７年4月 –<br>２０１７年5月", "２０１７年5月 –<br>今日", "２０１６年10月"],
/* class="amats" */ amats: ["会計士", "技術サポート", "大学のプログラム「プログラミングとコンピュータネットワーク管理」", "学士プログラム「財政」", "高校", "コース「コンピュータープログラミング」", "コース「プログラミング」", "コース「財務会計の基礎」", "コンピュータのスキル", "運転免許証"],
/* text of the links */ links: ["Tieto Latvia, SIA", "Domenika Latvia, SIA", "ラトビアの大学", "銀行の大学", "プーシキンのリセツム"],
/* class="pienakumi" */ pienakumi: ["責任:", "責任:", "専攻:", "専攻:", "スキル:", "スキル:", "スキル:", "ウェブプログラミング:", "その他:", "カテゴリー:"],
/* table headers */ tabHeader: ["語", "話します", "わかります", "書きます"],
/* table content */ tabCont: ["ラシア語", jap[0], jap[0], jap[0], "英語", jap[1], jap[1], jap[1], "ラトビア語", jap[1], jap[1], jap[1], "ドイツ語", jap[2], jap[2], jap[1], "日本語", jap[3], jap[3], jap[3]],
/*remainign stuff */ misc: ["債務者と現金流量の会計", "それは管理者を手伝う, 契約と付録を翻訳", "知りっていませ", "財務会計, 課税, 財務分析, 外国語 (英語とドイツ語)", "と", "と", "Tieto Latvia, SIA　と協力して", "完全な会計サイクル", "から", "サッカーフリースタイル, スヌーカー, 日本, ジョギング"],
};

//Get all elements using the DOM selector - headings
var panelTitles = document.querySelectorAll(".panel-title");
var periods = document.querySelectorAll(".period");
var amatsClasses = document.querySelectorAll(".amats");
var linkText = document.querySelectorAll("p a");
var pienakumiClasses = document.querySelectorAll(".pienakumi");
var tableHeaders = document.querySelectorAll("th");
var tableContent = document.querySelectorAll(".language-data");
var miscClasses = document.querySelectorAll(".misc");

//Button click events
$("#btn-lv").on("click", function() {
/*change cv */ $("h2 span").text(latviski.h2s);
/* change to cover letter */ $("h2 a").text(latviski.h2a);
/* change theheadings */for (var i = 0; i < panelTitles.length; i++) {
							panelTitles[i].textContent = latviski.panelTitle[i];
						}
/* change periods */for (var i = 0; i < periods.length; i++) {
							periods[i].innerHTML = latviski.period[i];
						}
/* change "amats" */for (var i = 0; i < amatsClasses.length; i++) {
							amatsClasses[i].textContent = latviski.amats[i];
						}
/* change a */for (var i = 0; i < 5; i++) {
							linkText[i].textContent = latviski.links[i];
						}
/* change "pienakumi"*/for (var i = 0; i < pienakumiClasses.length; i++) {
							pienakumiClasses[i].textContent = latviski.pienakumi[i];
						}
/* change headers of the table */ for (var i = 0; i < tableHeaders.length; i++) {
							tableHeaders[i].textContent = latviski.tabHeader[i];
						}
/* change content of the table */ for (var i = 0; i < tableContent.length; i++) {
							tableContent[i].textContent = latviski.tabCont[i];
						}
/* change "misc" */ for (var i = 0; i < miscClasses.length; i++) {
							miscClasses[i].textContent = latviski.misc[i];
						}
});

$("#btn-en").on("click", function() {
/*change cv */ $("h2 span").text(english.h2s);
/* change to cover letter */ $("h2 a").text(english.h2a);
/* change theheadings */for (var i = 0; i < panelTitles.length; i++) {
							panelTitles[i].textContent = english.panelTitle[i];
						}
/* change periods */for (var i = 0; i < periods.length; i++) {
							periods[i].innerHTML = english.period[i];
						}
/* change "amats" */for (var i = 0; i < amatsClasses.length; i++) {
							amatsClasses[i].textContent = english.amats[i];
						}
/* change a */for (var i = 0; i < 5; i++) {
							linkText[i].textContent = english.links[i];
						}
/* change "pienakumi"*/for (var i = 0; i < pienakumiClasses.length; i++) {
							pienakumiClasses[i].textContent = english.pienakumi[i];
						}
/* change headers of the table */ for (var i = 0; i < tableHeaders.length; i++) {
							tableHeaders[i].textContent = english.tabHeader[i];
						}
/* change content of the table */ for (var i = 0; i < tableContent.length; i++) {
							tableContent[i].textContent = english.tabCont[i];
						}
/* change "misc" */ for (var i = 0; i < miscClasses.length; i++) {
							miscClasses[i].textContent = english.misc[i];
						}
});

$("#btn-ru").on("click", function() {
/*change cv */ $("h2 span").text(porusski.h2s);
/* change to cover letter */ $("h2 a").text(porusski.h2a);
/* change theheadings */for (var i = 0; i < panelTitles.length; i++) {
							panelTitles[i].textContent = porusski.panelTitle[i];
						}
/* change periods */for (var i = 0; i < periods.length; i++) {
							periods[i].innerHTML = porusski.period[i];
						}
/* change "amats" */for (var i = 0; i < amatsClasses.length; i++) {
							amatsClasses[i].textContent = porusski.amats[i];
						}
/* change a */for (var i = 0; i < 5; i++) {
							linkText[i].textContent = porusski.links[i];
						}
/* change "pienakumi"*/for (var i = 0; i < pienakumiClasses.length; i++) {
							pienakumiClasses[i].textContent = porusski.pienakumi[i];
						}
/* change headers of the table */ for (var i = 0; i < tableHeaders.length; i++) {
							tableHeaders[i].textContent = porusski.tabHeader[i];
						}
/* change content of the table */ for (var i = 0; i < tableContent.length; i++) {
							tableContent[i].textContent = porusski.tabCont[i];
						}
/* change "misc" */ for (var i = 0; i < miscClasses.length; i++) {
							miscClasses[i].textContent = porusski.misc[i];
						}
});

$("#btn-de").on("click", function() {
/*change cv */ $("h2 span").text(deutsch.h2s);
/* change to cover letter */ $("h2 a").text(deutsch.h2a);
/* change theheadings */for (var i = 0; i < panelTitles.length; i++) {
							panelTitles[i].textContent = deutsch.panelTitle[i];
						}
/* change periods */for (var i = 0; i < periods.length; i++) {
							periods[i].innerHTML = deutsch.period[i];
						}
/* change "amats" */for (var i = 0; i < amatsClasses.length; i++) {
							amatsClasses[i].textContent = deutsch.amats[i];
						}
/* change a */for (var i = 0; i < 5; i++) {
							linkText[i].textContent = deutsch.links[i];
						}
/* change "pienakumi"*/for (var i = 0; i < pienakumiClasses.length; i++) {
							pienakumiClasses[i].textContent = deutsch.pienakumi[i];
						}
/* change headers of the table */ for (var i = 0; i < tableHeaders.length; i++) {
							tableHeaders[i].textContent = deutsch.tabHeader[i];
						}
/* change content of the table */ for (var i = 0; i < tableContent.length; i++) {
							tableContent[i].textContent = deutsch.tabCont[i];
						}
/* change "misc" */ for (var i = 0; i < miscClasses.length; i++) {
							miscClasses[i].textContent = deutsch.misc[i];
						}
});

$("#btn-jp").on("click", function() {
/*change cv */ $("h2 span").text(nihongo.h2s);
/* change to cover letter */ $("h2 a").text(nihongo.h2a);
/* change theheadings */for (var i = 0; i < panelTitles.length; i++) {
							panelTitles[i].textContent = nihongo.panelTitle[i];
						}
/* change periods */for (var i = 0; i < periods.length; i++) {
							periods[i].innerHTML = nihongo.period[i];
						}
/* change "amats" */for (var i = 0; i < amatsClasses.length; i++) {
							amatsClasses[i].textContent = nihongo.amats[i];
						}
/* change a */for (var i = 0; i < 5; i++) {
							linkText[i].textContent = nihongo.links[i];
						}
/* change "pienakumi"*/for (var i = 0; i < pienakumiClasses.length; i++) {
							pienakumiClasses[i].textContent = nihongo.pienakumi[i];
						}
/* change headers of the table */ for (var i = 0; i < tableHeaders.length; i++) {
							tableHeaders[i].textContent = nihongo.tabHeader[i];
						}
/* change content of the table */ for (var i = 0; i < tableContent.length; i++) {
							tableContent[i].textContent = nihongo.tabCont[i];
						}
/* change "misc" */ for (var i = 0; i < miscClasses.length; i++) {
							miscClasses[i].textContent = nihongo.misc[i];
						}
});
