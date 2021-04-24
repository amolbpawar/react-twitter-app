function Tweets(props) {
  let tweets = props.recentTweets.data?.map((tweet) => <li className="list-group-item" key={tweet.id}>{tweet.text}</li>)
  return (
    <div className='card'>
      <ul className="list-group">
        {tweets}
      </ul>
    </div>
  )
}

export default Tweets;