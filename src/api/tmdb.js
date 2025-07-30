// const apiKey = '3dfb8ea53b1e527a3b1bbcb7933a1d94';
const handleEroor = response => {
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
};

export async function getTrendMovies() {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const options = {
    // method: 'GET',
    headers: {
      // accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGZiOGVhNTNiMWU1MjdhM2IxYmJjYjc5MzNhMWQ5NCIsIm5iZiI6MTYzNTc0MDMwNC4wODYwMDAyLCJzdWIiOiI2MTdmNmE5MGNiNmRiNTAwNDJiNWM3NDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YeJ2HbUGrto2GorQ-GGggg-Dc_V0hEX9w6XTX-78QbM',
    },
  };

  try {
    const response = await fetch(url, options);
    handleEroor(response);
    const json = await response.json();
    // console.log(json.results);
    // setMovies(json.results);

    return json.results;
  } catch (error) {
    console.error(error.message);
  }
}
export async function searchMovies(query) {
  if (!query) {
    return;
  }

  const url = ` https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const options = {
    // method: 'GET',
    headers: {
      // accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGZiOGVhNTNiMWU1MjdhM2IxYmJjYjc5MzNhMWQ5NCIsIm5iZiI6MTYzNTc0MDMwNC4wODYwMDAyLCJzdWIiOiI2MTdmNmE5MGNiNmRiNTAwNDJiNWM3NDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YeJ2HbUGrto2GorQ-GGggg-Dc_V0hEX9w6XTX-78QbM',
    },
  };

  try {
    const response = await fetch(url, options);
    handleEroor(response);
    const json = await response.json();
    // console.log(json.results);
    // setMovies(json.results);

    return json.results;
  } catch (error) {
    console.error(error.message);
  }
}
// getTrendMovies();
