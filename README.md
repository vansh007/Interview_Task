# Interview-Private
Email Rest API

1. I have used a config.json file to store my personal email and password from which you'll receive an email. If you want to change that, you can do so and also turn on the security settings from gmail which says allow less secure app.

2. I have used npm module nodeemailer to send the email and email-validator to validate the email.

Sample json data to pass in the body of POST request:

{
	"to":"shahvansh123@gmail.com",
	"subject":"Hello from Vansh Shah",
	"body":"Sucess"
}

