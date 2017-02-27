function Telefon(marka, cena, kolor, ekran, system) {
	this.marka=marka;
	this.cena=cena;
	this.kolor=kolor;
	this.ekran=ekran;
	this.system=system;

}
Telefon.prototype.printInfo = function() {
	console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + ' PLN.');
}
Telefon.prototype.techInfo = function() {
	console.log('Dane techniczne: ekran (' + this.ekran + '"); system operacyjny (' + this.system + ').');
}

var samsungGS6 = new Telefon('Samsung', 1800, 'czarny', 5.5 , 'Android 6.0');
var iPhone6S = new Telefon('Apple', 2250, 'srebrny', 5.5, 'iOS 10.0');
var onePlusone = new Telefon('OnePlus', 1300, 'srebrny', 5.5, 'Android 7.0' );

iPhone6S.printInfo();
iPhone6S.techInfo();
