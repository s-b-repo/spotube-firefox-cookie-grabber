chrome.browserAction.onClicked.addListener((tab) => {
  chrome.cookies.getAll({name: "dc_cookie"}, (cookies) => {
    if (cookies.length > 0) {
      alert(`dc_cookie value: ${cookies[0].value}`);
    } else {
      alert("dc_cookie not found!");
    }
  });
});
