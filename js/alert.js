fetch("https://api.chensisi.me/qqwj/alert")
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("请求失败");
    }
  })
  .then(function(data) {
    console.log(data);
    // document.getElementById("Alert-content").innerHTML = data.content;
  })
  .catch(function(error) {
    console.log("请求错误:", error);
  });
