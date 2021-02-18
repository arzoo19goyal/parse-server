// Cloud Code entry point
Parse.Cloud.define('hello', req => {
    // req.log.info(req);
    console.log(req);
    return 'Hi';
  });
  
Parse.Cloud.define('asyncFunction', async req => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  // req.log.info(req);
  console.log(req);
  return 'Hi async';
});

Parse.Cloud.beforeSave('Test', () => {
  throw new Parse.Error(9001, 'Saving test objects is not available.');
});


Parse.Cloud.define("averageStars", async (request) => {
  const query = new Parse.Query("Review");
  query.equalTo("movie", request.params.movie);
  const results = await query.find();
  let sum = 0;
  for (let i = 0; i < results.length; ++i) {
    sum += results[i].get("stars");
  }
  return sum / results.length;
  },{
  fields : {
    movie : {
      required: true,
      type: String,
      options: val => {
        return val.length < 20;
      },
      error: "Movie must be less than 20 characters"
    }
  },
  requireUserKeys: {
    accType : {
      options: 'reviewer',
      error: 'Only reviewers can get average stars'
    }
  }
});
