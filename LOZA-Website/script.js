const WA_NUMBER="212779258966";
const products=[
 {id:"almonds",name:{ar:"اللوز",fr:"Amandes",en:"Almonds"},price:130,img:"images/almonds.jpg",cat:"nuts"},
 {id:"peanuts",name:{ar:"كوكاو",fr:"Cacahuètes",en:"Peanuts"},price:70,img:"images/almonds.jpg",cat:"nuts"},
 {id:"seeds",name:{ar:"زريعة بيضة",fr:"Graines blanches",en:"White seeds"},price:100,img:"images/white-seeds.jpg",cat:"seeds"},
 {id:"honey",name:{ar:"كوكاو معسل",fr:"Cacahuètes caramélisées",en:"Honey-coated peanuts"},price:70,img:"images/honey-peanuts.jpg",cat:"snacks"},
 {id:"pistachios",name:{ar:"بسطاج",fr:"Pistaches",en:"Pistachios"},price:170,img:"images/pistachios.jpg",cat:"nuts"},
 {id:"cashew",name:{ar:"كاجو",fr:"Noix de cajou",en:"Cashews"},price:150,img:"images/cashew.jpg",cat:"nuts"},
 {id:"chickpeas",name:{ar:"حمص",fr:"Pois chiches grillés",en:"Roasted chickpeas"},price:40,img:"images/chickpeas.jpg",cat:"snacks"}
];
const words={
 ar:{navProducts:"المنتجات",navAbout:"من نحن",navContact:"اتصل بنا",cart:"السلة",eyebrow:"طبيعة نقية.. طاقة كل يوم",heroTitle:"الذوق الطبيعي<br><em>في كل حبة</em>",heroText:"اكتشف تشكيلة LOZA من المكسرات والفواكه الجافة، مغلفة بعناية لترافق أجمل لحظاتك.",shopNow:"تسوق الآن",delivery:"التوصيل لجميع مدن المغرب — الثمن حسب المدينة",fresh:"اختيار بعناية",pack:"تغليف أنيق",allMorocco:"توصيل في المغرب",collection:"تشكيلة LOZA",productsTitle:"منتجاتنا",search:"ابحث عن منتج...",all:"الكل",nuts:"مكسرات",seeds:"زريعة",snacks:"تسالي",special:"اختيارات LOZA",promoTitle:"شارك لحظاتك بطعم مميز",promoText:"اختار الوزن والنكهة المناسبة ليك، وطلبك يوصل حتى لباب دارك.",discover:"اكتشف المنتجات",ourStory:"قصتنا",aboutTitle:"لماذا LOZA؟",aboutText:"في LOZA نهتم باختيار المكسرات والفواكه الجافة وتقديمها في أكياس عملية وأنيقة. هدفنا نوفر لك مذاقاً تحبه وتجربة طلب سهلة.",reviewsEyebrow:"رأيكم يهمنا",reviewsTitle:"آراء الزبائن",reviewsText:"قريباً نشارك هنا تجارب زبائن LOZA الحقيقية.",reviewsNote:"التقييمات ستضاف بعد الحصول على آراء العملاء.",contactEyebrow:"نحن قريبون منك",contactTitle:"تواصل مع LOZA",contactText:"المقر: دار بوعزة، المغرب. التوصيل متاح لجميع مدن المملكة، ومصاريفه حسب المدينة.",rights:"جميع الحقوق محفوظة",yourCart:"سلة المشتريات",subtotal:"المجموع",orderDetails:"معلومات الطلب",customer:"الاسم الكامل",phone:"رقم الهاتف",city:"المدينة",address:"العنوان بالتفصيل (اختياري)",shippingHint:"مصاريف التوصيل تُحدد حسب المدينة وتُؤكد عبر WhatsApp.",sendOrder:"إرسال الطلب عبر WhatsApp",add:"أضف للسلة",weight:"الوزن",salt:"النكهة",salted:"مملح",plain:"بدون ملح",empty:"السلة فارغة حالياً",remove:"حذف",perkg:"ثمن الكيلو",currency:"درهم"},
 fr:{navProducts:"Produits",navAbout:"À propos",navContact:"Contact",cart:"Panier",eyebrow:"Nature pure.. énergie chaque jour",heroTitle:"Le goût naturel<br><em>dans chaque bouchée</em>",heroText:"Découvrez la sélection LOZA de fruits secs et de noix, soigneusement emballés.",shopNow:"Acheter",delivery:"Livraison dans toutes les villes du Maroc — frais selon la ville",fresh:"Sélection soignée",pack:"Emballage élégant",allMorocco:"Livraison au Maroc",collection:"Collection LOZA",productsTitle:"Nos produits",search:"Rechercher un produit...",all:"Tout",nuts:"Fruits à coque",seeds:"Graines",snacks:"Snacks",special:"Sélection LOZA",promoTitle:"Partagez des moments savoureux",promoText:"Choisissez le poids et la saveur, puis commandez facilement.",discover:"Découvrir",ourStory:"Notre histoire",aboutTitle:"Pourquoi LOZA ?",aboutText:"Chez LOZA, nous sélectionnons des noix et fruits secs et les proposons dans des emballages pratiques et élégants.",reviewsEyebrow:"Votre avis compte",reviewsTitle:"Avis clients",reviewsText:"Les expériences authentiques des clients LOZA seront bientôt publiées ici.",reviewsNote:"Les avis seront ajoutés après réception des retours clients.",contactEyebrow:"Restons en contact",contactTitle:"Contactez LOZA",contactText:"Adresse : Dar Bouazza, Maroc. Livraison dans toutes les villes du Royaume, frais selon la ville.",rights:"Tous droits réservés",yourCart:"Votre panier",subtotal:"Total",orderDetails:"Détails de commande",customer:"Nom complet",phone:"Téléphone",city:"Ville",address:"Adresse détaillée (facultatif)",shippingHint:"Les frais de livraison dépendent de la ville et seront confirmés sur WhatsApp.",sendOrder:"Envoyer la commande sur WhatsApp",add:"Ajouter au panier",weight:"Poids",salt:"Saveur",salted:"Salé",plain:"Sans sel",empty:"Votre panier est vide",remove:"Supprimer",perkg:"Prix au kilo",currency:"DH"},
 en:{navProducts:"Products",navAbout:"About",navContact:"Contact",cart:"Cart",eyebrow:"Pure nature.. energy every day",heroTitle:"Natural taste<br><em>in every bite</em>",heroText:"Discover LOZA's selection of nuts and dried fruits, carefully packed for your everyday moments.",shopNow:"Shop now",delivery:"Delivery to all Moroccan cities — fee depends on city",fresh:"Carefully selected",pack:"Elegant packaging",allMorocco:"Delivery in Morocco",collection:"LOZA collection",productsTitle:"Our products",search:"Search products...",all:"All",nuts:"Nuts",seeds:"Seeds",snacks:"Snacks",special:"LOZA selection",promoTitle:"Share moments with great taste",promoText:"Choose your preferred weight and flavour, then order with ease.",discover:"Discover products",ourStory:"Our story",aboutTitle:"Why LOZA?",aboutText:"At LOZA, we select nuts and dried fruits and present them in practical, elegant pouches. Our goal is to make ordering simple.",reviewsEyebrow:"Your opinion matters",reviewsTitle:"Customer reviews",reviewsText:"Authentic LOZA customer experiences will be shared here soon.",reviewsNote:"Reviews will be added once customer feedback is received.",contactEyebrow:"We're here for you",contactTitle:"Contact LOZA",contactText:"Location: Dar Bouazza, Morocco. Delivery is available to all Moroccan cities; fees vary by city.",rights:"All rights reserved",yourCart:"Shopping cart",subtotal:"Subtotal",orderDetails:"Order details",customer:"Full name",phone:"Phone number",city:"City",address:"Detailed address (optional)",shippingHint:"Delivery fees depend on the city and will be confirmed on WhatsApp.",sendOrder:"Send order via WhatsApp",add:"Add to cart",weight:"Weight",salt:"Flavour",salted:"Salted",plain:"Unsalted",empty:"Your cart is empty",remove:"Remove",perkg:"Price per kg",currency:"DH"}
};
let lang="ar",cart=[],activeFilter="all";
const $=s=>document.querySelector(s);
function t(key){return words[lang][key]||key}
function priceFor(p,w){return p.price*w/1000}
function money(n){return `${Number(n.toFixed(2))} ${t("currency")}`}
function renderProducts(){
 const q=$("#search").value.trim().toLowerCase();
 const list=products.filter(p=>(activeFilter==="all"||p.cat===activeFilter)&&(!q||p.name[lang].toLowerCase().includes(q)));
 $("#productGrid").innerHTML=list.map(p=>`<article class="product-card"><img src="${p.img}" alt="${p.name[lang]}" loading="lazy"><div class="product-info"><h3>${p.name[lang]}</h3><div class="price">${p.price} DH <small>/ ${t("perkg")}</small></div><div class="options"><select class="weight" aria-label="${t("weight")}"><option value="250">250g</option><option value="500">500g</option><option value="1000" selected>1kg</option></select><select class="salt" aria-label="${t("salt")}"><option value="plain">${t("plain")}</option><option value="salted">${t("salted")}</option></select></div><button class="add" data-id="${p.id}">${t("add")}</button></div></article>`).join("")||`<p class="empty">${t("empty")}</p>`;
}
function renderCart(){
 $("#cartCount").textContent=cart.reduce((a,x)=>a+x.qty,0);
 $("#cartItems").innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-line"><div><strong>${x.name}</strong><small>${x.weight}g · ${x.salt==="salted"?t("salted"):t("plain")} · ${x.qty} × ${money(x.unit)}</small></div><div><b>${money(x.unit*x.qty)}</b><br><button data-remove="${i}">${t("remove")}</button></div></div>`).join(""):`<p class="empty">${t("empty")}</p>`;
 $("#cartTotal").textContent=money(cart.reduce((a,x)=>a+x.unit*x.qty,0));
}
function setLanguage(value){
 lang=value;document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(words[lang][k])el.innerHTML=words[lang][k]});
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
 renderProducts();renderCart();
}
document.addEventListener("click",e=>{
 const add=e.target.closest(".add");if(add){const p=products.find(x=>x.id===add.dataset.id),card=add.closest(".product-card"),weight=Number(card.querySelector(".weight").value),salt=card.querySelector(".salt").value,unit=priceFor(p,weight);const found=cart.find(x=>x.id===p.id&&x.weight===weight&&x.salt===salt);if(found)found.qty++;else cart.push({id:p.id,name:p.name[lang],weight,salt,unit,qty:1});renderCart();return}
 const rem=e.target.closest("[data-remove]");if(rem){cart.splice(Number(rem.dataset.remove),1);renderCart()}
});
$("#language").addEventListener("change",e=>setLanguage(e.target.value));
$("#search").addEventListener("input",renderProducts);
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{activeFilter=b.dataset.filter;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderProducts()}));
function openCart(){$("#cartDrawer").classList.add("open");$("#backdrop").classList.add("show")}
function closeCart(){$("#cartDrawer").classList.remove("open");$("#backdrop").classList.remove("show")}
$("#cartOpen").addEventListener("click",openCart);$("#cartClose").addEventListener("click",closeCart);$("#backdrop").addEventListener("click",closeCart);document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCart()});
$("#orderForm").addEventListener("submit",e=>{
 e.preventDefault();if(!cart.length){alert(t("empty"));return}
 const f=new FormData(e.target),name=f.get("customer"),phone=f.get("phone"),city=f.get("city"),address=f.get("address");
 const lines=cart.map(x=>`- ${x.name}: ${x.weight}g, ${x.salt==="salted"?t("salted"):t("plain")}, ${x.qty} × ${money(x.unit)} = ${money(x.qty*x.unit)}`);
 const total=cart.reduce((a,x)=>a+x.qty*x.unit,0);
 const message=`LOZA Nuts - ${t("orderDetails")}\n${t("customer")}: ${name}\n${t("phone")}: ${phone}\n${t("city")}: ${city}\n${t("address")}: ${address||"-"}\n\n${lines.join("\n")}\n\n${t("subtotal")}: ${money(total)}\n${t("shippingHint")}`;
 window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,"_blank");
});
$("#year").textContent=new Date().getFullYear();renderProducts();renderCart();
