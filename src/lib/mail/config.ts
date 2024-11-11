import nodemailer from 'nodemailer';

export const businessLocation = {
    name: "Taylor Warren",
    company: "Bear & Sheep Co.",
    street1: "6 Higgin Court",
    city: "Barrie ",
    state: "ON",
    zip: "L4N 0R1",
    country: "CA",
    phone: "+1 705 828 7477",
    email: "taylor@bearandsheep.co",
};


export const smtpConfig = {
    host: 'smtp.mail.me.com',
    port: 587,
    secure: false,
    auth: {
        user: 'moreau.ryan@icloud.com',
        pass: 'julr-unar-ztkj-kdbt',
    }
};

export const transporter = nodemailer.createTransport(smtpConfig);

export const mailOptions = (
    subject: string, 
    message: string
) => ({
    from: `${businessLocation.company} <${smtpConfig.auth.user}>`,
    to: businessLocation.email,
    subject,
    text: message
});

export const sendMail = async (subject: string, message: string) => {
    try {
        const sendable = mailOptions(subject, message);
        const info = await transporter.sendMail(sendable);
        console.log('Message sent:', info);
    } catch (error) {
        console.error('Error sending email: %s', error);
    }
};