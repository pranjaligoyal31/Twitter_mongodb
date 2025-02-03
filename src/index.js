const express = require('express');
const connect = require('./config/database');
const app = express();

const Tweet = require('./models/tweet');

const TweetRepository = require('./repository/tweet-repository');

app.listen(3000, async() => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    //const tweet = await Tweet.create({
        //content: 'second  tweet'
    //});
    const tweets = await Tweet.find();
    //const tweets = await Tweet.find({userEmail: 'a@b.com'});==>querying the database using mongoose 
    //const tweet = await Tweet.findById("hsytgdbhsxgbsgxty17yw276");
    //tweet.userEmail='b@c.com';
    //await tweet.save();
    console.log(tweets);
    const tweetRepo = new TweetRepository();
    //const tweet = await tweetRepo.get('67a0a4b87a7df2965c6dc39f');
    const tweet = await tweetRepo.create({content: ' tweet with a comment'});
    console.log(tweet);
    tweet.comments.push({content: 'first comment here'});
    await tweet.save();
    console.log(tweet);
});