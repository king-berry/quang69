var hotel = {
    name: 'Park',
    rooms : 120,
    booked : 77
};
hotel.gym = true;
hotel.pool =false;
delete hotel.booked;
var elName = document.getElementById(elementld: 'hotelName');
elName.textContent = hotel.name;
var elPool = document.getElementById(elementld: 'pool');
elPool.className = hotel.pool;
var elGym = document.getElementById(elementld: 'gym');
elGym.className = hotel.gym;