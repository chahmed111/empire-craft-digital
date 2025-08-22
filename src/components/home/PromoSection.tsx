import { useState, useEffect } from 'react';
import { Clock, Gift } from 'lucide-react';

const PromoSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the target date to March 31st, 2024
    const targetDate = new Date('2024-03-31T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="card-elegant bg-white/95 backdrop-blur-sm border-2 border-accent/20 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gift className="text-accent" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Limited Time Offer
            </h2>
          </div>

          <div className="text-6xl md:text-8xl font-bold text-accent mb-4">
            15% OFF
          </div>

          <p className="text-xl md:text-2xl text-foreground mb-8">
            On all windows and doors installations
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Clock className="text-primary" size={24} />
            <span className="text-lg font-semibold text-foreground">Offer ends in:</span>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-primary text-white rounded-lg p-4">
                <div className="text-2xl font-bold">{item.value.toString().padStart(2, '0')}</div>
                <div className="text-sm">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <button className="btn-hero">
              Claim Your 15% Discount
            </button>
            <p className="text-sm text-muted-foreground">
              * Valid for new orders placed before March 31st, 2024. Cannot be combined with other offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;