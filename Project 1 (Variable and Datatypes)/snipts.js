let name = document.getElementById('name-in');
let age = document.getElementById('age-in');
let nationality = document.getElementById('country-in');
let fav_col = document.getElementById('favorite-in')
let hobby = document.getElementById('hobby-in');

let name_out = document.getElementById('name-ou');
let age_out = document.getElementById('age-ou');
let nationality_out = document.getElementById('country-ou');
let fav_col_out = document.getElementById('favorite-ou')
let hobby_out = document.getElementById('hobby-ou');




function clickon(){
let getname = name.value;
let getage = age.value;
let getnat = nationality.value;
let getfav = fav_col.value;
let gethobby = hobby.value;

name_out.value = getname;
age_out.value = getage;
nationality_out.value = getnat;
fav_col_out.value = getfav;
hobby_out.value = gethobby;


}
function clean(){
name_out.value = "";
age_out.value = "";
nationality_out.value = "";
fav_col_out.value = "";
hobby_out.value = "";

}