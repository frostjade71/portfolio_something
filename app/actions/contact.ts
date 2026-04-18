'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    try {
        const { name, email, subject, message } = formData;

        // 1. Send notification to Jaderby
        const notification = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['jaderbypenaranda@gmail.com'],
            subject: `New Project Inquiry: ${subject}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #000; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Project Inquiry</h2>
                    <p><strong>From:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
                        <p style="margin-top: 0;"><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `,
        });

        if (notification.error) {
            console.error('Notification Error:', notification.error);
            return { success: false, error: 'Failed to send notification.' };
        }

        return { success: true };
    } catch (error: any) {
        console.error('Contact Action Error:', error);
        return { success: false, error: error.message || 'Something went wrong. Please check your connection.' };
    }
}
