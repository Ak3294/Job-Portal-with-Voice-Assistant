const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5000;

const users = [];    //that will store all the users that are signed up
const emailInUse = [];

app.use(express.json());
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});


const emails = ["akshatsharma0610@gmail.com", "akshaykumarhiran2@gmail.com", "adityasinghchouhan724@gmail.com"];
app.post('/api/submitForm', (req, res) => {


    const formData = req.body;
    console.log('Received form data:', formData);
    // Convert form data into email format
    let emailContent = `


Dear HR,
<br>
I hope this email finds you well. We are Team Acube, a growing middleware platform connecting talented individuals like yourself with exceptional job opportunities.<br>
Our platform is dedicated to facilitating seamless connections between top-tier job seekers to companies like yours. With a rigorous vetting process and a vast pool of highly qualified candidates, we ensure that only the most suitable individuals are presented to you for consideration.

<p>Candidate Details is Attached below:</p>

<p><strong>Name:</strong> ${formData.name}</p>
<p><strong>Email:</strong> ${formData.email}</p>
<p><strong>Phone:</strong> ${formData.phone}</p>
<p><strong>Job Role:</strong> ${formData.jobtitle}</p>

The Message Candidate want to convey with yours is:
<p><i>${formData.message}</i></p>

<p>Thank you.</p>

Best regards,<br>
${formData.name}
</p>
`;


    // Send email
    sendEmail('akshaykumarhiran2@gmail.com', "Regarding Job Application", emailContent)
        .then(() => res.status(200).send('Form submitted successfully and email sent'))
        .catch(error => {
            console.error('Error sending email:', error);
            res.status(500).send('An error occurred while sending the email');
        });
});


app.post('/api/signup', (req, res) => {

    const obj = req.body;


    if (emailInUse.includes(obj.email) == true) console.log("already signed up");
    else {
        users.push(obj);
        emailInUse.push(obj.email);
        console.log("user signed up");
        console.log(users);
    }
});

app.post('/contactus', (req, res) => {

    const obj = req.body;
    console.log(obj);

});



function sendEmail(email, subject, message) {

    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "teamacubeonline@gmail.com",
                pass: "viki elwb bfwv iqjh",
            },
        });
        //console.log(message)
        const mail_configs = {
            from: "teamacubeonline@gmail.com",
            to: emails.join(','),
            subject: subject,
            html: message,
        };
        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: `An error has occurred` });
            }
            return resolve({ message: "Email sent successfully" });
        });
    });
}

app.get("/", (req, res) => {
console.log("Server is Running.")


});

app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`);
});



