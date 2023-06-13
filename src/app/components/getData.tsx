export async function getWeather(zipCode: string) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=36071258bb6c4db0bed02249231106&q=${zipCode}&aqi=yes`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
