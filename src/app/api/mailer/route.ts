import { NextRequest, NextResponse } from "next/server";

var nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
    try {
        console.log("Sending Mail...")

        const reqBody = await request.json()
        const { firstName, lastName ,company , phone , email , message } = reqBody

        const otpText = `Hey ${firstName},

We sincerely appreciate your decision to engage with our services. A dedicated member of our executive team will be in touch with you shortly to address your inquiries comprehensively.
        
Please prepare any questions or concerns you may have; we are committed to providing you with the highest level of service and the most competitive offers.
        
Thank you for considering Proxium as your trusted partner.

Your details:
Name: "${firstName} ${lastName}"
Message: "${message}"
Company: "${company}"
Phone: "${phone}"
Email: "${email}"
        
Sincerely,
The Proxium Team`

        var transporter = await nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PW,
            },
        });

        var mailOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: email,
            bcc: [process.env.NODEMAILER_EMAIL,"yaryan3087@gmail.com"],
            subject: "Proxium Support",
            text: otpText,
        };

        const sendStatus = await transporter.sendMail(mailOptions);

        if (sendStatus.accepted.length > 0) {
            return NextResponse.json({
                message: "Email sent!",
                status: 200,
            });
        } else {
            throw new Error("Email not accepted for delivery.");
        }

    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}

