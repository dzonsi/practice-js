"use strict";

var profile = React.createElement("div", null, React.createElement("img", {
  src: "avatar.png",
  className: "profile"
}), React.createElement("h3", null, [user.firstName, user.lastName].join(' ')));
var descriptions = items.map(function (item) {
  return React.createElement(React.Fragment, null, React.createElement("dt", null, item.name), React.createElement("dd", null, item.value));
});
