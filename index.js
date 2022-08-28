// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const tweet = [
  {
    username: 'bobesponja',
    tweet: 'eu amo o hub',
  },
  {
    username: 'bobesponja',
    tweet: 'eu amo o hub',
  },
  {
    username: 'bobesponja',
    tweet: 'eu amo o hub',
  },
  {
    username: '10',
    tweet: 'eu amo o hub',
  },
  {
    username: '9',
    tweet: 'eu amo o hub',
  },
  {
    username: '8',
    tweet: 'eu amo o hub',
  },
  {
    username: '7',
    tweet: 'eu amo o hub',
  },
  {
    username: '6',
    tweet: 'eu amo o hub',
  },
  {
    username: '5',
    tweet: 'eu amo o hub',
  },
  {
    username: '4',
    tweet: 'eu amo o hub',
  },
  {
    username: '3',
    tweet: 'eu amo o hub',
  },
  {
    username: '2',
    tweet: 'eu amo o hub',
  },
  {
    username: '1',
    tweet: 'eu amo o hub',
  },
];

const login = [];

app.get('/sign-up', (req, res) => {
  res.send(login);
});

app.get('/tweet', (req, res) => {
  const novoTweet = [];
  const perfil = login[0].avatar;
  let x = 0;
  let i = tweet.length;
  while (x < 10) {
    novoTweet.push({
      ...tweet[i - 1],
      avatar: perfil,
    });
    i -= 1;
    x += 1;
  }
  res.send(novoTweet);
});

app.post('/sign-up', (req, res) => {
  const nova = req.body;
  login.push(nova);
  res.send('foi');
});

app.post('/tweet', (req, res) => {
  const nova = req.body;
  tweet.push(nova);
  res.send('foi');
});

app.listen(5000);
