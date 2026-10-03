const I18N = {
  ru: {
    brand_sub:"чайхана",
    nav_about:"О нас", nav_menu:"Меню", nav_branches:"Филиалы", nav_visit:"Контакты",
    currency:"сом", bf_time:"Завтраки · 08:00–12:00",
    hero_kicker:"Чайхана · Бишкек",
    hero_sub:"Восточная кухня, завтраки с самого утра и настоящий чай — в тёплом интерьере с арками и плетёными светильниками.",
    hero_cta1:"Наши филиалы", hero_cta2:"Открыть в 2GIS",
    mq1:"Восточная кухня", mq2:"Завтраки 08:00–12:00", mq3:"Настоящий чай", mq4:"9 филиалов", mq5:"Ежедневно до 6 утра",
    about_title:"Место, куда<br>возвращаются",
    about_p1:"Mubarak — одна из любимых чайхан Бишкека. Просторные залы, тёплое дерево и спокойный свет создают место, где приятно завтракать, обедать и разговаривать допоздна.",
    about_p2:"В меню — восточная и кыргызская кухня, фирменные блюда и чайная церемония. Мы работаем почти круглосуточно: с 08:00 утра до 06:00 следующего дня.",
    st1:"филиалов", st2:"рейтинг гостей", st3:"сом · средний чек",
    menu_title:"Меню",
    menu_note:"Цены в сомах · меню может отличаться в филиалах",
    branches_title:"Филиалы",
    b1_addr:"ул. Гоголя, 28",
    b2_name:"Центр", b2_addr:"пр. Чуй, 104",
    b3_name:"Проспект", b3_addr:"ул. Сухэ-Батора, 5/3",
    b4_name:"Запад", b4_addr:"ул. Киевская, 206",
    b5_name:"Восток", b5_addr:"ул. Анкара, 300",
    b6_addr:"ул. Тыналиева, 3/11",
    b7_addr:"ул. Горького, 148 / Абая",
    b8_name:"И Чолпон-Ата", b8_addr:"Иссык-Куль, Чолпон-Ата", b8_meta:"Летний филиал у озера",
    daily:"Ежедневно · 08:00–06:00",
    open_map:"Открыть в 2GIS",
    visit_title:"Ждём вас",
    visit_hours:"Ежедневно · 08:00 — 06:00",
    visit_p:"Завтраки с 08:00 до 12:00. Бронируйте столик по телефону ближайшего филиала или пишите нам в Instagram.",
    visit_cta:"Все филиалы в 2GIS",
    foot:"© 2026 Чайхана Mubarak · Бишкек"
  },
  en: {
    brand_sub:"chaihana",
    nav_about:"About", nav_menu:"Menu", nav_branches:"Locations", nav_visit:"Contact",
    currency:"som", bf_time:"Breakfast · 08:00–12:00",
    hero_kicker:"Chaihana · Bishkek",
    hero_sub:"Eastern cuisine, breakfasts from early morning and proper tea — in a warm interior of arches and woven lamps.",
    hero_cta1:"Our locations", hero_cta2:"Open in 2GIS",
    mq1:"Eastern cuisine", mq2:"Breakfast 08:00–12:00", mq3:"Proper tea", mq4:"9 locations", mq5:"Open daily till 6 am",
    about_title:"A place you<br>return to",
    about_p1:"Mubarak is one of Bishkek's favourite chaihanas. Spacious halls, warm wood and calm light make it a place for slow breakfasts, long lunches and late conversations.",
    about_p2:"The menu features eastern and Kyrgyz cuisine, signature dishes and a tea ceremony. We work almost around the clock: from 08:00 in the morning until 06:00 the next day.",
    st1:"locations", st2:"guest rating", st3:"som · average check",
    menu_title:"Menu",
    menu_note:"Prices in som · menu may vary by location",
    branches_title:"Locations",
    b1_addr:"28 Gogol St.",
    b2_name:"Centre", b2_addr:"104 Chui Ave.",
    b3_name:"Prospect", b3_addr:"5/3 Sükhbaatar St.",
    b4_name:"West", b4_addr:"206 Kievskaya St.",
    b5_name:"East", b5_addr:"300 Ankara St.",
    b6_addr:"3/11 Tynalieva St.",
    b7_addr:"148 Gorky St. / Abai",
    b8_name:"Plus Cholpon-Ata", b8_addr:"Issyk-Kul, Cholpon-Ata", b8_meta:"Summer location by the lake",
    daily:"Daily · 08:00–06:00",
    open_map:"Open in 2GIS",
    visit_title:"We are waiting",
    visit_hours:"Daily · 08:00 — 06:00",
    visit_p:"Breakfast from 08:00 to 12:00. Book a table by calling your nearest location or message us on Instagram.",
    visit_cta:"All locations in 2GIS",
    foot:"© 2026 Mubarak Chaihana · Bishkek"
  }
};

let CURRENT_LANG = 'ru';
function setLang(lang){
  CURRENT_LANG = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.dataset.i18n;
    if(I18N[lang][k] !== undefined) el.innerHTML = I18N[lang][k];
  });
  document.getElementById('btnRu').classList.toggle('active', lang==='ru');
  document.getElementById('btnEn').classList.toggle('active', lang==='en');
  if(typeof renderMenuTabs === 'function'){ renderMenuTabs(); renderMenuList(); renderBreakfast(); }
  try{ localStorage.setItem('mubarak-lang', lang); }catch(e){}
}
const saved = (()=>{ try{ return localStorage.getItem('mubarak-lang'); }catch(e){ return null; } })();

/* ---------- menu ---------- */
const MENU = [
  { id:'oriental',
    tab:{ru:'Восточная кухня', en:'Oriental'},
    items:[
      {ru:'Плов Ташкентский', en:'Tashkent plov', w:'470 г', p:310},
      {ru:'Бешбармак из конины', en:'Horse-meat beshbarmak', w:'650 г', p:350},
      {ru:'Казан-кебаб из говядины', en:'Beef kazan kebab', w:'250 г', p:350},
      {ru:'Куурдак', en:'Kuurdak', w:'600 г', p:440},
      {ru:'Босо лагман', en:'Boso lagman', w:'450 г', p:300},
      {ru:'Гюро лагман', en:'Gyro lagman', w:'550 г', p:300},
      {ru:'Ганфан', en:'Ganfan', w:'500 г', p:280},
      {ru:'Манты с мясом', en:'Manti with meat', w:'', p:270},
      {ru:'Жареный джусай с мясом', en:'Fried djusai with meat', w:'300 г', p:270},
      {ru:'Мушуру', en:'Mushuru', w:'350 г', p:310},
    ]},
  { id:'mains',
    tab:{ru:'Горячие блюда', en:'Mains'},
    items:[
      {ru:'Мубарак', en:'Mubarak', w:'650 г', p:870, sig:true},
      {ru:'Бон-филе на гриле', en:'Grilled bon fillet', w:'400 г', p:700},
      {ru:'Мясное трио', en:'Meat trio', w:'580 г', p:620},
      {ru:'Бефстроганов из бон-филе с пюре', en:'Beef stroganoff with mashed potato', w:'450 г', p:540},
      {ru:'Кесадилья с говядиной', en:'Beef quesadilla', w:'400 г', p:370},
      {ru:'Курица под сыром с пюре', en:'Chicken under cheese with mash', w:'550 г', p:370},
      {ru:'Форель запечённая', en:'Baked trout', w:'350 г', p:430},
      {ru:'Котлеты из телятины в сливочном соусе', en:'Veal cutlets in cream sauce', w:'430 г', p:400},
    ]},
  { id:'soups',
    tab:{ru:'Супы', en:'Soups'},
    items:[
      {ru:'Шорпо', en:'Shorpo', w:'480 г', p:240},
      {ru:'Чучвара', en:'Chuchvara', w:'400 г', p:240},
      {ru:'Суп по-казахски', en:'Kazakh-style soup', w:'450 г', p:240},
      {ru:'Солянка', en:'Solyanka', w:'480 г', p:240},
      {ru:'Мампар', en:'Mampar', w:'420 г', p:240},
      {ru:'Чечевичный крем-суп', en:'Lentil cream soup', w:'420 г', p:220},
    ]},
  { id:'salads',
    tab:{ru:'Салаты', en:'Salads'},
    items:[
      {ru:'Салат Мубарак', en:'Mubarak salad', w:'330 г', p:330, sig:true},
      {ru:'Цезарь с курицей', en:'Chicken Caesar', w:'320 г', p:360},
      {ru:'Тёплый салат из баклажана', en:'Warm eggplant salad', w:'310 г', p:300},
      {ru:'Хрустящие баклажаны в кисло-сладком соусе', en:'Crispy eggplant, sweet & sour', w:'300 г', p:320},
      {ru:'Греческий', en:'Greek salad', w:'300 г', p:270},
      {ru:'Шакарап', en:'Shakarap', w:'250 г', p:170},
    ]},
  { id:'bakery',
    tab:{ru:'Выпечка и десерты', en:'Bakery & Desserts'},
    items:[
      {ru:'Самса с мясом', en:'Meat samsa', w:'120 г', p:70},
      {ru:'Слоёная самса с курицей и сыром', en:'Puff samsa, chicken & cheese', w:'120 г', p:70},
      {ru:'Боорсок', en:'Boorsok', w:'200 г', p:90},
      {ru:'Лепёшка', en:'Flatbread', w:'100 г', p:40},
      {ru:'Мубарак десерт', en:'Mubarak dessert', w:'', p:270, sig:true},
    ]},
];

const BREAKFAST = [
  {ru:'Сибирские сырники', en:'Siberian syrniki', d_ru:'с облепиховым кремом и вареньем из сосновых шишек', d_en:'with sea-buckthorn cream & pine-cone jam'},
  {ru:'Скрэмбл с лососем', en:'Scrambled eggs with salmon', d_ru:'нежный, сливочный, с зеленью', d_en:'soft, creamy, with fresh herbs'},
  {ru:'Глазунья с беконом', en:'Fried eggs with bacon', d_ru:'классика большого завтрака', d_en:'a big-breakfast classic'},
  {ru:'Омлет с грибами', en:'Mushroom omelette', d_ru:'ароматные грибы и идеальное начало дня', d_en:'aromatic mushrooms, a perfect start'},
];

let currentCat = 'oriental';

function renderMenuTabs(){
  const tabs = document.getElementById('menuTabs');
  tabs.innerHTML = MENU.map(c=>
    `<button class="menu-tab ${c.id===currentCat?'active':''}" onclick="setCat('${c.id}')">${c.tab[CURRENT_LANG]}</button>`
  ).join('');
}

function renderMenuList(){
  const cat = MENU.find(c=>c.id===currentCat);
  const list = document.getElementById('menuList');
  list.innerHTML = cat.items.map(it=>`
    <div class="dish">
      <div class="dish-name">${it[CURRENT_LANG]}${it.sig?`<small>${CURRENT_LANG==='ru'?'фирменное':'signature'}</small>`:''}</div>
      <div class="dish-dots"></div>
      ${it.w?`<div class="dish-w">${it.w}</div>`:''}
      <div class="dish-price">${it.p} ${I18N[CURRENT_LANG].currency}</div>
    </div>`).join('');
}

function renderBreakfast(){
  const bf = document.getElementById('breakfast');
  bf.innerHTML = BREAKFAST.map(b=>`
    <div class="bf-card">
      <h4>${CURRENT_LANG==='ru'?b.ru:b.en}</h4>
      <p style="font-family:'Cormorant Garamond';font-style:italic;color:var(--ink-soft);font-size:.95rem;margin-top:8px">${CURRENT_LANG==='ru'?b.d_ru:b.d_en}</p>
      <div class="bf-time">${I18N[CURRENT_LANG].bf_time}</div>
    </div>`).join('');
}

function setCat(id){ currentCat = id; renderMenuTabs(); renderMenuList(); }
renderMenuTabs(); renderMenuList(); renderBreakfast();

/* duplicate marquee for seamless loop */
const mq = document.getElementById('marquee');
mq.innerHTML += mq.innerHTML;

/* header shadow */
const header = document.getElementById('header');
addEventListener('scroll', ()=> header.classList.toggle('scrolled', scrollY > 30));

/* mobile menu */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', ()=> navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> navLinks.classList.remove('open')));

/* reveal on scroll */
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=> io.observe(el));
setLang(saved === 'en' ? 'en' : 'ru');
