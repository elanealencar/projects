"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("#searchForm > form");
const input = document.querySelector("#searchInput");
const sectionInfos = document.querySelector(".resultado");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !sectionInfos)
        return;
    const localizacao = input.value;
    if (localizacao.length < 3) {
        alert("A cidade precisa ter ao menos 3 letras.");
        return;
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=04444956a58304ad8ded2066234861a0`);
        const data = yield response.json();
        console.log(data);
        const infos = {
            temperatura: Math.round(data.main.temp),
            local: data.name,
            icone: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        };
        const temperaturaCelsius = (infos.temperatura - 273.15).toFixed(1); // Converter para celcius e limitar a uma casa decimal
        sectionInfos.innerHTML = `
                <div class="titulo">${infos.local}</div>
                <div class="info">
                    <div class="temp">
                        <div class="tempTitulo">Temperatura</div>
                        <div class="tempInfo">${temperaturaCelsius} <sup>ºC</sup></div>
                        <img src="${infos.icone}"/>
                    </div>
                </div>`;
    }
    catch (err) {
        alert("Erro na obtenção de dados da API");
    }
}));
