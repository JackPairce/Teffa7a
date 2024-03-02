const { fetchData } = require("./DB_server");
const { cols } = require("./sharedConst.model");

/* 
## processing the data



I - sending articles depending user history

    1- get history of user 
    if he is a simple user get him some article like his history
    else  if he is a doctor get him some article like his specialty

    fetch votes where userid == ??
    from this votes => posts
    from this posts => submedic

    2- get articles depending on the returned data
    get all post with that submedic 24h earlier 
    (without user id)
    
    3- get only the last 5 articles

*/
async function getArticles(userid) {
  var votes = await fetchData(cols.vote, { user: userid });
  var userNames = await fetchData(cols.user, {
    _id: {
      $in: votes.map((vote) => vote.user),
    },
  });
  var posts = Array.from(new Set(votes.map((vote) => vote.postId)));
  var submedics = await fetchData(cols.post, { _id: { $in: posts } });
  var submedicID = submedics.map((submedic) => submedic.submedic);
  var TargetPosts = await fetchData(cols.post, {
    submedic: { $in: submedicID },
  });
  TargetPosts = TargetPosts.map((post) => {
    return {
      ...post,
      user: userNames.find((user) => user._id == post.user).username,
    };
  });

  return {
    articles: TargetPosts.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }).slice(0, 5),
    submedics: await fetchData(cols.submedic, {
      _id: {
        $in: submedicID,
      },
    }),
  };
}

module.exports = {
  getArticles,
};
