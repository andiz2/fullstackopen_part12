const express = require('express');
const router = express.Router();
const { getAsync, setAsync } = require('../redis');

const configs = require('../util/config')

let visits = getAsync('redis');

(async () => {
  try {
    if (typeof setAsync === 'function') {
      await setAsync('key1', 'value1');
      console.log('Value set');

      const value = await getAsync('key1');
      console.log('Value got:', value);
    } else {
      console.log('Redis is disabled');
    }
  } catch (err) {
    console.log('Redis error:', err);
  }
})();

/* GET index data. */
router.get('/', async (req, res) => {
  visits++
  await setAsync('redis', visits)

  res.send({
    ...configs,
    visits
  });
});

router.get('/redis', async(req, res) => {
  let visits = await getAsync('redis')
  visits++
  await setAsync('redis', visits)

  res.send({
    visits
  })
})

router.get('/statistics', async(req, res) => {
  let getVisits = await getAsync('redis')

  res.json({
    added_todos : Number(getVisits)
  })
})


module.exports = router;
