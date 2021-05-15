import { useState, useEffect } from 'react';
import Tweets from './Tweets';

function SearchUsersTweets() {
  let [recentTweets, setRecentTweets] = useState([]);
  let [twitterUserName, setTwitterUserName] = useState('BCCI');
  useEffect(() => {
    const apiUrl = `http://localhost:5000/search_tweet_by_usernsme?username=${twitterUserName}`;
    fetch(apiUrl, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('This is your data', data)
        setRecentTweets(data);
      });
  }, [twitterUserName]);

  return (
    <div >
      <nav className="navbar navbar-light bg-light mb-sm-2">
        <form className="form-inline">
          @<input type="text" name="username" value={twitterUserName} onChange={e => setTwitterUserName(e.target.value)} placeholder='Search recent tweets by user name' className="form-control mr-sm-2" />
        </form>
      </nav>
      <Tweets recentTweets={recentTweets} />
    </div>
  );
}

export default SearchUsersTweets;

