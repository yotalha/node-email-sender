const express = require("express")
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey("your_api_key")
// const nodemailer = require("nodemailer")
// const sendgridTransport = require("nodemailer-sendgrid-transport")


const app = express()

const msg = {
    to: "talha.coder9@gmail.com",
    from: "talha.work101@gmail.com",
    subject: "Sending mail from node",
    text: "test with node",
    html: "<h1>This is a mail from me!</h1>"
}

app.post("/sendMail", (req, res) => {
    sgMail.send(msg)
        .then(() => {
            console.log("Email Sent")
            res.send("Email Sent")
        }
    )
        .catch((err) => {
            console.log("err ", err)
            res.send("cannot Send Email")
    })
})

// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth: {
//         api_key: "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"
//     }
// }))

// app.post('/sendMail', (req, res) => {
//     transporter.sendMail({
//         to: "talha.work101@gmail.com",
//         from: "test@node-mail.com",
//         subject: "Sending mail from node",
//         html: "<h1>Hi how are you</h1>"
//     }).then(res => {
//         console.log("success ", res)
//     }).catch(err => {
//         console.log("err ", err.message)
//     })
// })



app.listen(3000, () => {
    console.log("listening on port 3000")
})