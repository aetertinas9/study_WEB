var ioRedis = require('ioredis');
var util = require('util');
var config = require('../../config');

var RedisService = function(){};

RedisService.session = new ioRedis(
{
    port: config.redis.redisPort,
    host: config.redis.redisHost,
    //password: config.redis.redisPassword,
    db: 0,

    retryStrategy: function (times) {
        var delay = Math.min(times * 2, 2000);
        console.log(delay);
        return delay;
    }
});

  console.log(util.format("**** redis start!! *****"));

  var redis = new ioRedis();
  var stream = redis.scanStream();
  var keys = [];
  stream.on('data', function (resultKeys) {
    // `resultKeys` is an array of strings representing key names
    for (var i = 0; i < resultKeys.length; i++) {
      keys.push(resultKeys[i]);
    }
  });
  stream.on('end', function () {
    console.log('done with the keys: ', keys);
  });


  //delete keys
  var stream = redis.scanStream({
    match: 'sample_pattern:*'
  });
  stream.on('data', function (keys) {
    // `keys` is an array of strings representing key names
    if (keys.length) {
      var pipeline = redis.pipeline();
      keys.forEach(function (key) {
        pipeline.del(key);
      });
      pipeline.exec();
    }
  });
  stream.on('end', function () {
    console.log('done');
  });



module.exports = RedisService;
