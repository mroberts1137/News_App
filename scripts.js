const NEWS_API_KEY = process.env;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

async function fetchNews() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

fetchNews();
