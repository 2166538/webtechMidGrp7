

$(function () {
  $.ajax({
    type: 'GET',
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${encodeURIComponent(keyword).replace(/%20/g, "+")}&key=AIzaSyDmB6TULhFXqjaAM0mL--3d0iHu3C3IqYc`,
    success: function (res) {
      console.log(res)
    },
    error: function (err) {
      // PUTANG INA WAG MO KAKAILIMUTAN
    }
  })
  
  // prepare the request
//  var request = gapi.client.youtube.search.list({
//    part: "snippet",
//    type: "video",
////      q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
//    q: encodeURIComponent($('#recipeLabel').val()).replace(/%20/g, "+"),
//    maxResults: 1,
//    order: "viewCount",
//    publishedAfter: "2015-01-01T00:00:00Z"
//  });
//  // execute the request
//  request.execute(function (response) {
//    var results = response.result;
//    console.log('testing' + results)
////    resetVideoHeight();
//  });

  $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
  $(".video").css("height", $("#results").width() * 9 / 16);
}

function init() {
  gapi.client.setApiKey("AIzaSyDmB6TULhFXqjaAM0mL--3d0iHu3C3IqYc");
  gapi.client.load("youtube", "v3", function () {
    // yt api is ready
  });
}
