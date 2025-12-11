import Card from "antd/es/card/Card"
import data from '../db/data.json'

export const WeatherInfo = ({ searchValue }) => {

  const cities = data;

  const key = searchValue.trim().toLowerCase();

  const lowerValue = Object.keys(cities).find((el) => el.toLowerCase() === key);

  if (key === "") return null;

  const cityInfo = cities[lowerValue];

  return (
    <>
      {cityInfo ? (
        <Card
          title={lowerValue}
          style={{ width: 300, marginTop: 20 }}
        >
          <p style={{ fontSize: 20 }}>
            {cityInfo.icon} {cityInfo.temp}°
          </p>
          <p>{cityInfo.description}</p>
        </Card>
      ) : (
        <div>Нет данных</div>
      )}

    </>
  );
};
