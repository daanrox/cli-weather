import axios from "axios";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

const city = process.argv.slice(2).join(" ");
if (!city) {
  console.log(chalk.yellow("Uso: weather <nome da cidade>"));
  process.exit(1);
}

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&lang=pt_br&units=metric`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    console.log(chalk.cyan.bold(`\n🌍 Previsão do Tempo para ${data.name}, ${data.sys.country}\n`));
    console.log(`${chalk.blue("Agora:")} ${new Date().toLocaleString("pt-BR")}`);
    console.log(`${chalk.green("Temperatura:")} ${data.main.temp}°C`);
    console.log(`${chalk.red("Máx:")} ${data.main.temp_max}°C`);
    console.log(`${chalk.blue("Mín:")} ${data.main.temp_min}°C`);
    console.log(`${chalk.magenta("Umidade:")} ${data.main.humidity}%`);
    console.log(`${chalk.yellow("Vento:")} ${data.wind.speed} m/s`);
    console.log(`${chalk.white("Condição:")} ${data.weather[0].description}\n`);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log(chalk.red("Cidade não encontrada."));
    } else {
      console.log(chalk.red("Erro ao buscar os dados do clima."));
    }
  }
}

getWeather(city);
