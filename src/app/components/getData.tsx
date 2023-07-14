export async function getWeather(zipCode: string) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=099f765622b74ac88fd02752232806&q=${zipCode}&aqi=yes&days=2`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
