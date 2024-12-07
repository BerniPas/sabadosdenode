

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: GMAIL_USER, 
        pass: GMAIL_PASS,
    },
});

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async (nombre, email) => {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻">', // sender address
        to: `${email}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>Hello world ${nombre}</b> <br> 
        <a href="https://www.educacionit.com/" target="_blank">Visita nuestra página</a>`, // html body
    });

}

export default sendMail;
