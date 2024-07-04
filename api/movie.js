import fetch from "node-fetch";

const { APIKEY } = process.env

export default async function handler(request, response) {
  const { title, page, id } = JSON.parse(request.body);
  const url = id 
    ? `http://omdbapi.com?apiKey=${APIKEY}&i=${id}&plot=full&`
    : `http://omdbapi.com?apiKey=${APIKEY}&title=${title}&page=${page}`;
  const res = await fetch(url);
  const json = await res.json();
  response
    .status(200)
    .json(json);
}