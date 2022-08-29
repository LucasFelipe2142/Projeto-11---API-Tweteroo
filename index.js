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
    username: 'cazuza',
    tweet: 'eu amo o hub',
  },
  {
    username: 'bobesponja',
    tweet: 'eu amo o hub',
  },
  {
    username: 'ted',
    tweet: 'eu amo o hub',
  },
  {
    username: 'bobesponja',
    tweet: 'eu amo o hub',
  },
  {
    username: 'ted',
    tweet: 'eu amo o hub',
  },
  {
    username: 'ted',
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
    username: 'cazuza',
    tweet: 'eu amo o hub',
  },
  {
    username: 'bobesponja',
    tweet: 'eu amo o hub',
  },
  {
    username: 'cazuza',
    tweet: 'eu amo o hub',
  },
  {
    username: 'bobesponja',
    tweet: 'eu amo o hub',
  },
];

const login = [
  {
    username: 'bobesponja',
    avatar: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info',
  },
  {
    username: 'cazuza',
    avatar: 'https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2018/08/destaque-521765-cazuza.jpg',
  },
  {
    username: 'ted',
    avatar: 'https://th.bing.com/th/id/OIP.iyG8od0vOmbsukTw0ZWrSgHaF7?pid=ImgDet&rs=1',
  },

];

app.get('/sign-up', (req, res) => {
  res.send(login);
});

app.get('/tweets', (req, res) => {
  const novoTweet = [];
  let perfil;
  let x = 0;
  let i = tweet.length;

  while (x < 10) {
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < login.length; j++) {
      if (tweet[i - 1].username === login[j].username) {
        perfil = login[j].avatar;
      }
    }
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

app.post('/tweets', (req, res) => {
  const nova = req.body;
  tweet.push(nova);
  res.send('foi');
});

app.listen(5000);
