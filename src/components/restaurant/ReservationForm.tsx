'use client';

import { useState } from 'react';
import { Button } from './Button';

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  const [submitted, setSubmitted] = useState(false);

  const availableTimes = ['5:30 PM', '6:00 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];
  const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="bg-[hsl(var(--card))] rounded-lg p-8 shadow-lg text-center">
        <div className="w-16 h-16 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[hsl(var(--primary-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Reservation Confirmed!
        </h2>
        <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">
          Thank you, {formData.name}! Your table for {formData.guests} guests on {formData.date} at {formData.time} has been reserved.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] mb-8">
          A confirmation email has been sent to {formData.email}
        </p>
        <Button variant="primary" onClick={() => setSubmitted(false)}>
          Make Another Reservation
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[hsl(var(--card))] rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
        Reserve Your Table
      </h2>

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[hsl(var(--foreground))] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[hsl(var(--foreground))] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[hsl(var(--foreground))] mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Date & Time Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-[hsl(var(--foreground))] mb-2">
              Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full"
            />
          </div>

          {/* Time */}
          <div>
            <label htmlFor="time" className="block text-sm font-semibold text-[hsl(var(--foreground))] mb-2">
              Time *
            </label>
            <select
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full"
            >
              <option value="">Select time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className="block text-sm font-semibold text-[hsl(var(--foreground))] mb-2">
            Number of Guests *
          </label>
          <select
            id="guests"
            name="guests"
            required
            value={formData.guests}
            onChange={handleChange}
            className="w-full"
          >
            {guestOptions.map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button type="submit" variant="primary" className="w-full">
            Confirm Reservation
          </Button>
        </div>
      </div>

      <p className="text-sm text-[hsl(var(--muted-foreground))] mt-6 text-center">
        By making a reservation, you agree to our cancellation policy. Please notify us at least 24 hours in advance if you need to cancel.
      </p>
    </form>
  );
}
