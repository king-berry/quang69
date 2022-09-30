(function ()){
    var hotel = {
        name: 'Park',
        roomRate: 240,
        dicsount: 15,
        offerprice: function () {
            var offerRate = this.roomRate * ((100 - this.dicsount) / 100);
            return offerRate;
        }
    }
};
var hotelName, roomRate, SpecialRate;
hotelName = document.getElementById(elementld: 'hotelName');
roomRate = document.getElementById(elementld: 'roomRate');
specialRate = document.getElementById(elementld: 'SpecialRate');

hotelName.textContent = hotel.Name;
roomRate.textContent = '$' + hotel.roomRate.toFixed(fractionDigits: 2);
specialRate.textContent = '$' + hotel.offerprice();
var expiryMsg;
var today;
var elEnds;
function offerExpires(today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    weekFromToday = new Date(Value: today.getTime()+ 7 * 24 * 60 * 60 * 1000);
    dayNames = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'friday', 'saturday'];
    monthNames = ['January','February', 'March' , 'May', ' June', 'July', 'August']

    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />'(' + date + ' ' month + ' ' + year + ');
    return expiryMsg;
}
today = new date();
elends = document.getElementById(elementld: 'offerEnds');
elends.innerHTML = offerExpires(today);
}());
