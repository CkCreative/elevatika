var nodemailer = require('nodemailer');
const querystring = require('querystring');


var transporter = nodemailer.createTransport({
    host: process.env.ELEV_SERVER,
    port: Number(process.env.ELEV_PORT),
    secure: true,
    auth: {
        user: process.env.ELEV_USER,
        pass: process.env.ELEV_PASS
    }
});

exports.handler = async function (event, context, callback) {

    var {name, message, email, love} = querystring.parse(event.body)

    var mailOptions = {
        from: `Elevatika Cloud <${process.env.ELEV_SENDER}>`,
        to: process.env.ELEV_RECEIVER,
        subject: 'You Have a New Email From ' + name,
        html: `Name: ${name} <br>
        Email Address: ${email} <br>
        <b>Message: </b> ${message}`
    };

    console.log(name,email,message)
    // context.succeed({statusCode: 302, location: event.headers.origin+"thank-you"});

    if(!love) {
        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    
        callback(null, {
          statusCode: 200,
          location: event.headers.referer + "thank-you",
          body: `<b>Redirecting...</b> <br> Go <a href="/">Back</a> <script>
            setTimeout(() => {
                window.location = "${event.headers.origin}/thank-you"
            }, 2000);
          </script>`
        });
    } else {
        callback(null, {
            statusCode: 500,
            body: `<h1>Internal Server Error!</h1>`
          });
    }

    

}