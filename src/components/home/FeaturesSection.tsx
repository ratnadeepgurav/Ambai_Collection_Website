import { Gift, Truck, ShieldCheck, RefreshCw, CreditCard, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Village Delivery',
    description: 'Local delivery to your doorstep',
  },
  {
    icon: CreditCard,
    title: 'COD Available',
    description: 'Pay when you receive',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Checked',
    description: 'Every saree verified',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '7-day easy return policy',
  },
  {
    icon: Gift,
    title: 'Festival Gifts',
    description: 'Free bindi & blouse piece',
  },
  {
    icon: Sparkles,
    title: 'Best Prices',
    description: 'Direct from weavers',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 border-y border-border bg-muted/20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
              <p className="text-muted-foreground text-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
