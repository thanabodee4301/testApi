var path = require('path');
var unirest = require('unirest');
var use = unirest.get("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues")
.header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
.header("Accept", "application/json")
.end(function (result) {
  result.body.data.leagues
})


const index = {
    auth: false,
    handler: {
      directory: {
        path: path.join(__dirname, '../dist'),
        listing: false,
        index: ['index.html']
      }
    }
  };
  const leagues = {
    findAll: {
      auth: false,
      handler: (request, reply) => {
        return reply({
            data:use
        });
      }
    },
  
    findOne: {
      auth: false,
      handler: (request, reply) => {
        const leagues_slug = request.params.leagues_slug;
        return reply({
          data:unirest.get(`https://sportsop-sports-open-data-v1/leagues/${league_slug}/seasons/18-19`)
          .header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
          .header("Accept", "application/json")
          .end(function(result){
            result.body.standings
          })
  
          //data: mock.filter(hero => hero.id == id)[0]
        });
      }
    }
  }
  
  module.exports = {
    index,
    leagues
  }  