var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//var SMTP_PORT =  req"../constants/server";
var sgMail = require("@sendgrid/mail");

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
  /*nodemailer.createTestAccount((err, account) => {
   let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass // generated ethereal password
      }
    });

    let transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: SMTP_PORT,
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
  });*/
  let variable = req.body;

  sgMail.setApiKey(
""  );
  const clientMsg = {
    from: req.body.emailAddress, // sender address
    to: "gremcleo@gmail.com", // replace with tsmcleod@live
    subject: "New Message from " + req.body.firstName + " on www.tsmcleod.com", // Subject line
    text: req.body.comment, // plain text body
    html: "<b>" + req.body.comment + "</b>" // html body
  };
  sgMail
    .send(clientMsg)
    .then(clientMsgResult => {
      console.log("email result to tsmcleod:\n");
      console.log(clientMsgResult);
      //on success of emai sent to tsmcleod send a receipt email to client
      const templateMsg = {
        from: "tsmcleod@live.ca", // sender address
        to: req.body.emailAddress, // replace with tsmcleod@live
        subject:
          req.body.firstName + ", Thank you for contacting us at tsmcleod!", // Subject line
        text:
          "Thanks for filling out our form!, We will look over your message and get back to you by tomorrow. In the meantime, you can look over our new product collection or browse [https://tsmcleod.ca].Your friends at tsmcleod", // plain text body
        html:
          "<b>Thanks for filling out our form!, We will look over your message and get back to you by tomorrow. In the meantime, you can look over our new product collection or browse [https://tsmcleod.ca].Your friends at tsmcleod</b>" // html body
      };
      sgMail
        .send(templateMsg)
        .then(templateMsgResult => {
          //client receipt recived and client email sent
          console.log("email info for client receipt:\n");
          console.log(templateMsgResult);

          res.status(200).json({ info: templateMsgResult, req: variable });
        })
        .catch(templateMsgError => {
          //could not send client a receipt
          //Log friendly error
          console.log("email error info for client receipt:\n");
          console.error(templateMsgError);
          res.status(418).json({ error: templateMsgError, req: variable });

          //Extract error msg
          const { message, code, result } = templateMsgError;

          //Extract response msg
          const { headers, body } = templateMsgResult;
        });

      //res.status(200).json({ info: result, req: variable });
    })
    .catch(clientMsgError => {
      //Log friendly error
      console.log("email info for failed email from client to tsmcleod:\n");
      console.error(clientMsgError);
      res.status(500).json({ error: clientMsgError, req: variable });

      //Extract error msg
      const { message, code, result } = clientMsgError;

      //Extract response msg
      const { headers, body } = templateMsgResult;
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
