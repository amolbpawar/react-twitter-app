import { useRef, useState, useEffect } from 'react';
import Tweets from './Tweets';

function SearchUsersTweets() {
  let userName = useRef(null);
  let [recentTweets, setRecentTweets] = useState([]);
  let [twitterUserName, setTwitterUserName] = useState('Platform9Sys');

  let searchTweetsByUsername = () => {
    let twitterUserName = (userName.current.value === '') ? 'Platform9Sys' : userName.current.value;
    const apiUrl = `https://api.twitter.com/2/tweets/search/recent?query=from:${twitterUserName}`;
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAADlFOAEAAAAAB%2FdX3%2BbRgf4myKX2EDKUd%2FivNU4%3DXp7AscnDqxi1lvabaNNY3YZaODvOCEp02MAsuGCHkwLGMb6SNJ',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('This is your data', data)
        setRecentTweets(data);
      });
  }

  useEffect(() => {
    searchTweetsByUsername()
  }, [twitterUserName]);

  return (
    <div >
      <nav className="navbar navbar-light bg-light mb-sm-2">
        <form className="form-inline">
          @<input type="text" name="username" ref={userName} value={twitterUserName} onChange={e => setTwitterUserName(e.target.value)} placeholder='Search recent tweets by user name' className="form-control mr-sm-2" />
        </form>
      </nav>
      <Tweets recentTweets={recentTweets} />
    </div>
  );
}

export default SearchUsersTweets;

