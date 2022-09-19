let weather={
    "apiKey":"b320dc27886db596d77868c2bb593070",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city + "&units=metric&appid=" 
             + this.apiKey
        ).then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
         const { name }=data;
         const { icon, description }=data.weather[0];
         const { temp, humidity, feels_like, temp_min, temp_max } = data.main;
         const{ speed }=data.wind;
         console.log(name,icon,description, temp, feels_like, humidity, speed);
         document.querySelector(".city").innerText="Current weather in: " + name ;
         document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
         document.querySelector(".description").innerText=description;
         document.querySelector(".temp").innerText=temp + "°C";
         document.querySelector(".temp_min").innerText="Minimum temperature in the city:" + temp_min + "°C";
         document.querySelector(".temp_max").innerText="Maximum temperature in the city:" + temp_max + "°C";
         document.querySelector(".temp").innerText=temp + "°C";
         document.querySelector(".feels_like").innerText="Feels like " + feels_like + "°C"; 
         document.querySelector(".humidity").innerText="Humidity:" + humidity +"%";
         document.querySelector(".wind").innerText="Wind speed: " +speed + "km/h";
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if (event.key=="Enter"){
        weather.search();
    }

})
document.querySelector(".otvori").addEventListener("click",vidljivost);

function vidljivost(){
    karta=document.querySelector(".card");
    tipka=document.querySelector(".otvori");
    tekst=document.querySelector(".tekst");
    karta.style.visibility="visible";
    tekst.style.visibility="hidden";
    karta.style.height="50vh";
    tipka.style.visibility="hidden";

}
document.querySelector(".close").addEventListener("click",nevidljivost);

function nevidljivost(){
    karta=document.querySelector(".card");
    tipka1=document.querySelector(".close");
    tipka=document.querySelector(".otvori");
    tekst=document.querySelector(".tekst");
    karta.style.visibility="hidden";
    tekst.style.visibility="visible";
    tipka.style.visibility="visible";
    karta.style.height="0px";

}

document.querySelector(".pop").addEventListener("click",iskakanje);

function iskakanje(){
    content=document.querySelector(".content");
    tekstou=document.querySelector(".tekstou");
    content.style.visibility="visible";
    content.style.height="50vh";
}
document.querySelector(".close1").addEventListener("click",zatvaranje);
function zatvaranje(){
    content=document.querySelector(".content");
    tekstou=document.querySelector(".tekstou");
    content.style.height="0px";
    content.style.visibility="hidden";
    
}