const axios = require('axios');
const cheerio = require('cheerio');

// https://www.amazon.in/gp/bestsellers/beauty/ref=pd_zg_ts_beauty



module.exports = {
   getPostTitles: async () => {
    try {
      const { data } = await axios.get(
        'https://www.amazon.in/gp/bestsellers/beauty/ref=pd_zg_ts_beauty'
      );
      const $ = cheerio.load(data);
      const postTitles = [$];

      $('div > div.a-cardui > div.zg-grid-general-faceout > div.p13n-sc-uncoverable-faceout > a').each((_idx, el) => {
        const postTitle = $(el).text()
        postTitles.push(postTitle)
      })
      return postTitles;
    } catch (error) {
      throw error;
    }
  },
  
}

