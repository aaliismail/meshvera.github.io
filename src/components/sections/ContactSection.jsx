import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { CheckCircle, Send } from 'lucide-react';

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Using Formspree for email delivery
        try {
            const response = await fetch('https://formspree.io/f/xwpkqpzr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    company: formData.company,
                    email: formData.email,
                    _replyto: formData.email,
                    _subject: `New inquiry from ${formData.company}`
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
            }
        } catch (error) {
            // Fallback to mailto
            window.location.href = `mailto:support@meshvera.com?subject=Inquiry from ${formData.company}&body=Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AEmail: ${formData.email}`;
        }

        setIsSubmitting(false);
    };

    const handleChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    if (isSubmitted) {
        return (
            <section id="contact" className="py-24 bg-slate-900">
                <div className="max-w-xl mx-auto px-4 text-center">
                    <div className="bg-slate-800 rounded-2xl p-12 border border-slate-700">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                        <p className="text-slate-400">
                            We've received your inquiry and will get back to you within 24 hours.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 bg-slate-900">
            <div className="max-w-xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Get Started Today
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Tell us about your business and we'll show you how Meshvera can help.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                    <div className="space-y-6">
                        <div>
                            <Label htmlFor="name" className="text-white mb-2 block">
                                Your Name
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="John Smith"
                                value={formData.name}
                                onChange={handleChange('name')}
                                required
                                className="h-12 bg-slate-900 border-slate-700 text-white"
                            />
                        </div>

                        <div>
                            <Label htmlFor="company" className="text-white mb-2 block">
                                Company Name
                            </Label>
                            <Input
                                id="company"
                                type="text"
                                placeholder="Acme Inc."
                                value={formData.company}
                                onChange={handleChange('company')}
                                required
                                className="h-12 bg-slate-900 border-slate-700 text-white"
                            />
                        </div>

                        <div>
                            <Label htmlFor="email" className="text-white mb-2 block">
                                Email Address
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@acme.com"
                                value={formData.email}
                                onChange={handleChange('email')}
                                required
                                className="h-12 bg-slate-900 border-slate-700 text-white"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                            <Send className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </form>

                <p className="text-center text-slate-500 text-sm mt-6">
                    We typically respond within 24 hours.
                </p>
            </div>
        </section>
    );
}
