document.quarySelector('.busca').addEventListener("submit",async (event)=>{
    event.preventDefaut();
    let input = document.querySelector("#searchInput").value;
    if(input !=='')
    {
        clearInfo();
        showWaring('carregando...')
        let url= `https://api.opewathermap.org/data/2.5/weather?q=${encode(input)}&appid=ef60a79c9c3ca99f2edfad01fd9badb3&units=metrica&lag=pt_br`

        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.weather[0].icon,
                tempIcon: json.wind.speed,
                WindSpeed: json.wind.speed,
                descri : json.weather[0].description,
            }
            )
         }
        else{
            clearInfo();
            showWaring('Não encontramos essa localização');
         }   
    }else{
    clearInfo();
}
})
function showInfo(json){
    showWaring("");
    document.quarySelector('.resultado').style.display= 'block';
    document.quarySelector('.titulo').innerHTML=`${json.name}, ${json.country}`
    document.quarySelector('.temperatura').innerHTML = `${json.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.WindSpeed} <span>km/h</span>`;
    document.quarySelector('.tempInfo').innerHTML= `${json.descri}`;
    document.quarySelector('.informacoes img').setAttribute('src',`./img/${json.tempIcon}.gif`);
}
function showWaring(msg)
{
    document.quarySelector('.aviso').innerHTML = msg
}
function clearInfo(){
    showWaring('');
    document.quarySelector('.resultado').style.display = 'none'
}
async function curitiba (){
    let Input = 'curitiba'
    if (input !=='')
    {  
        clearInfo();
        showWaring('carregando...')

        let url= `https://api.openwathermap.org/data/2.5/wather?q=${encodeURI(input)}&appid=ef60a79ca99f2edfad01fd9badb3&units=metric&lang=pr_br`
        let results = await fetch(url);
        let json = await results.json();
        if(json.cod === 200){
            showInfo({
            name: json.name,
            coutry: json.sys.coutry,
            temp: json.main.temp,
            tempIcon: json.weather[0].icon,
            WindSpeed: json.wind.speed,
            descri : json.weather[0].description,
            }
            );
        }
        else{
            clearInfo();
            showWaring('não encontramos essa localização')
        }
    }else{
        clearInfo();
    }
}

curitiba();