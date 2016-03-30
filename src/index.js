require("babel-core/register")(/*{ignore: false}*/);

import React from "react";
import moment from "moment";

window.moment = moment;
window.React = React;

require("./Router.jsx");
