export default function Weather({
  weather,
  location,
  getWeatherIcon,
  formatDay,
}) {
  // const {
  //   temperature_2m_max: maxTemp,
  //   temperature_2m_min: minTemp,
  //   time: dates,
  //   weathercode: codes,
  // } = weather;

  console.log("max temp");

  console.log(weather);

  return (
    <div>
      <h2>Weather {location}</h2>
      <ul className="weather">
        {weather.time?.map((date, i) => (
          <Day
            date={date}
            max={weather.temperature_2m_max.at(i)}
            min={weather.temperature_2m_min.at(i)}
            code={weather.weathercode.at(i)}
            key={date}
            isToday={i === 0}
            getWeatherIcon={getWeatherIcon}
            formatDay={formatDay}
          />
        ))}
      </ul>
    </div>
  );
}

function Day({ date, max, min, code, isToday, getWeatherIcon, formatDay }) {
  return (
    <li className="day">
      <span>{getWeatherIcon(code)}</span>
      <p>{isToday ? "Today" : formatDay(date)}</p>
      <p>
        {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
      </p>
    </li>
  );
}
