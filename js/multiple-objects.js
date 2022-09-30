function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms =rooms;
    this.booked =booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}
var quayHotel = new Hotel(name: 'Quay', rooms: 40, booked: 25);
var parkHotel = new Hotel(name: 'Park', rooms: 120, booked: 77);
var details1 = quayHotel.name + 'rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById(elementld: 'hotel1');
elHotel1.textContent = details1;
var details2 = parkHotel.name + 'rooms:';
    details2 += quayHotel.checkAvailability();
var elHotel2 = document.getElementById(elementld: 'hotel2');
elHotel2.textContent = details2;