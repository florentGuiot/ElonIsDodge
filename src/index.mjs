import CONSTANTS from './constants.mjs'
import { TwitterClient } from 'twitter-api-client';

console.log('Welcome to "Follow Elon on DOGE to DEATHH !!!"')
console.log('Let\'s start getting money on meme-coin\n')
console.log(`TWITTER_ELON_MUSK_USER_ID: ${CONSTANTS.TWITTER_ELON_USER_ID}\n`)

if (process.env.NODE_ENV === 'development') {
    console.log(`TWITTER_API_KEY: ${CONSTANTS.TWITTER_API_KEY}`)
    console.log(`TWITTER_API_SECRET: ${CONSTANTS.TWITTER_API_SECRET}`)
    console.log(`TWITTER_ACCESS_TOKEN: ${CONSTANTS.TWITTER_ACCESS_TOKEN}`)
    console.log(`TWITTER_TOKEN_SECRET: ${CONSTANTS.TWITTER_TOKEN_SECRET}`)
}


console.log('Connecting to Twitter API ...')

try {
    const twitter = new TwitterClient({
        apiKey: CONSTANTS.TWITTER_API_KEY,
        apiSecret: CONSTANTS.TWITTER_API_SECRET,
        accessToken: CONSTANTS.TWITTER_ACCESS_TOKEN,
        accessTokenSecret: CONSTANTS.TWITTER_TOKEN_SECRET
    })

    console.log('Connected\n\n')
    console.log('Gettings Elon\'s tweets feed :')
    //const elon = await twitter.accountsAndUsers.usersShow({ user_id: CONSTANTS.TWITTER_ELON_USER_ID})
    const elonTweetsRequest = { 
        user_id: CONSTANTS.TWITTER_ELON_USER_ID, 
        exclude_replies: true, 
        include_rts: false,
        since_id: 
    }

    const elonTweets = await twitter.tweets.statusesUserTimeline(elonTweetsRequest)
    elonTweets.forEach(tweet => {
        console.log(`On ${tweet.created_at.split('+')[0].trim()}, ${tweet.user.name} say ${tweet.text.replace('\n', ' ')} => Action : ${tweet.text.includes('DOGE') ? 'BUY' : 'NOTHING'}`)
    })
    
} catch (error) {
    console.error(error)
}

console.info('Exit...')

