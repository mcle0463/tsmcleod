var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

let nodemailer = require("nodemailer");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../tsmcleod/build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../tsmcleod/build", "index.html"));
});

app.post("/", function(req, res) {
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass // generated ethereal password
      }
    });
    let mailOptions = {
      // should be replaced with real recipient's account
      from: req.body.emailAddress, // sender address
      to: "gremcleo@gmail.com", // replace with tsmcleod@live
      subject:
        "New Message from " + req.body.firstName + " on www.tsmcleod.com", // Subject line
      text: req.body.comment, // plain text body
      html: "<b>" + req.body.comment + "</b>" // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      let variable = req.body;
      if (error) {
        res.status(500).json({ error: error, req: variable });
      } else {
        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.status(200).json({ info: info, req: variable });
      }
    });
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
