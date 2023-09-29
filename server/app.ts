import http from "http";
import { config } from "dotenv";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import Promotions from "../emails/promotions";

config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST as string,
  port: process.env.EMAIL_PORT as unknown as number,
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASSWORD as string,
  },
});

const emailHtml = render(Promotions({ baseUrl: "http://localhost:3000" }));

const options = {
  from: "hello@greenland.co",
  to: "testemail@somewhere.co",
  subject: "Black Friday Sales",
  html: emailHtml,
};

transporter
  .sendMail(options)
  .then((res) => console.log("Email sent successfully", res))
  .catch((err) => console.log("Error sending email", err));

const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
