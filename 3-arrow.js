// ÖRN SİLİNDİR HACMİ HESAPLAMA
// hacim formülü = pi * r * r * h

// const r = +prompt("r:")
// const h = +prompt("h:")
// 
// const volume = (r,h) => Math.PI*r*r*h
// console.log(`${r}, ${h} = volume : ${volume(r,h)}`);

// //? toPrecision(4) aldigi parametreye gore bir sayinin tam ve kesir
// //? kisimlarinin ne kadarini gosterilecegini belirlemek icin
// //? kullanilabilir. 4 degeri tam ve kesir icin toplam 4 basamak kullan demektir.
// console.log(`${r}, ${h} = Volume: ${volume(r, h).toPrecision(4)}`) 

// ÖRN YAŞ HESAPLAMA
// const year = +prompt("yob:")
const calculate = (year) => new Date() .getFullYear() - year;
console.log ("age is", calculate(1990)); 