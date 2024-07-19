require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const feedUrl = process.env.FEED_URL;

async function fetchStores() {
  try {
    const storeFeed = await fetch(feedUrl).then(res => res.json());
    return storeFeed;
  } catch (error) {
    console.error('Error fetching the feed:', error);
    throw error;
  }
}

function countStoresByState(stores) {
  const storeCountByState = {};
  
  Object.entries(stores).forEach((entry) => {
    const [storeId, store] = entry;
    // console.log(`${key}: ${value}`);
    const state = store.state;

    if (storeCountByState[state]) {
      storeCountByState[state]++;
    } else {
      storeCountByState[state] = 1;
    }
  });

  return storeCountByState;
}

function formatStoreCount(storeCountByState) {
  const states = Object.keys(storeCountByState).sort();
  let result = '';

  states.forEach(state => {
    result += `${state}: ${storeCountByState[state]}\n`;
  });

  return result;
}

app.get('/stores', async (req, res) => {
  try {
    const stores = await fetchStores();
    const storeCountByState = countStoresByState(stores);
    const formattedResult = formatStoreCount(storeCountByState);
    console.log(formattedResult);
    res.send(stores);
  } catch (error) {
    res.status(500).send('Error retrieving store counts.');
  }
});

app.listen(4000, () => {
  console.log('v1');
  console.log('Listening on 4000');
});
