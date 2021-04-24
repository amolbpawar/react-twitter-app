const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const axios = require('axios');

const PORT = process.env.PORT || 5000;

app.use(cors());

app
  .use(express.static(path.join(__dirname, '/client/build')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.get('/search_tweet_by_usernsme', (req, res) => {
  axios.get(`https://api.twitter.com/2/tweets/search/recent?query=from:${req.query.username}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAADlFOAEAAAAAB%2FdX3%2BbRgf4myKX2EDKUd%2FivNU4%3DXp7AscnDqxi1lvabaNNY3YZaODvOCEp02MAsuGCHkwLGMb6SNJ',
      }
    })
    .then(function (response) {
      console.log("tweets: ", response.data);
      res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
      res.send(response.data);
    });
})