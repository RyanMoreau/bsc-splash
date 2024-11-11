import type { RequestHandler } from '@sveltejs/kit';
import { sendMail } from '$lib/mail/config';

export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json();
        const formattedMessage = `${body.message}.\n\nMessage sent from ${body.email}`;

    try {
        await sendMail(
            'New message from Bear & Sheep Co.',
            formattedMessage
        )

        return new Response(JSON.stringify({
            message: "Email sent successfully"
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });    
    } catch (e) {
        console.error('Error sending email: %s', e);

        return new Response(JSON.stringify({
            message: "Email not sent"
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });    
    }
};