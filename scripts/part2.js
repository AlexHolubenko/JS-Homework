 function current() {
 var euros = prompt('Euro?', );	
 var dollars = prompt('How many dollars do you need?', );
 var euroRate = 30.48;
 var dollarRate = 25.57;
 var euroInGrn = (euros*euroRate).toFixed(2);
 var dollarInGrn = (dollars*dollarRate).toFixed(2);
 var dollarInEuro = (euroRate/dollarRate).toFixed(2);
 alert(euros + ' euros are equal '+ euroInGrn  + ' grns, ' + dollars + ' dollars are equal ' + dollarInGrn + ', one euro is equal ' + dollarInEuro + ' dollars ');
 alert(' Дякую за перегляд!');
 alert(' Підписуйся на мій GitHub та став Star ');
 alert(' P.S.Посилання на GitHub внизу сторінки');
}