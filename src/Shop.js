
let shopTiming =[
    { dayName:{ Friday : {
      start:"10:00 AM",
      close:"8:00 PM"
    }}},
    {dayName:{Saturday: {
        start:"1:00 PM",
        close:"4:30 PM"
    }}},
    {dayName:{Sunday:{
        start:"10:00 AM",
        close:"8:00 PM"
    }}},
    {dayName:{Monday:{
        start:"10:00 AM",
        close:"8:00 PM"
    }}},
    {dayName:{Tuesday:{
        start:"10:30 AM",
        close:"8:00 PM"
    }}},
    {dayName:{Wednesday:{
        start:"10:30 AM",
        close:"8:00 PM"
    }}},
    {dayName:{Thursday:
    {
        start:"10:30 AM",
        close:"8:00 PM"
    }}},		
    ]

function ShopTimingCheck(dayName,time){


    let currentDay = shopTiming.find(day => day.dayName == dayName)
    
    if(currentDay.starttime >= time || currentDay.close <= time){

        return console.log("shop open");
    }
    else{
        return console.log("closed");
    }
}