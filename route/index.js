const { default: axios } = require('axios');
var express = require('express')
var router = express.Router()
// const fetch = require('node-fetch')


router.get('/', async(req, res) => { 
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer D8CRn0C-TLnYG-KoxcHDYLXxed2aIPuAHX2TEn22YdE'
        },
        url: 'https://ext.workable.com/spi/v3/jobs?limit=50'
      };

      try {
        const res = await axios(options);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
      
      
})


router.get('/a', (req, res) => {
    
    res.json({
        "data": {
            name: "Amit"
        }
    })
})

router.post('/', async(req, res) => {
  try {
    let data = req.body
    res.json({data})
  } catch (error) {
    console.log(error)
  }
})


module.exports = router