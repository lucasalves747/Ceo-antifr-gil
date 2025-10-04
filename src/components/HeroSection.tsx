import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('final-cta');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-4 py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(51_100%_50%/0.1)_0%,transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-hero bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent px-2 md:px-0">
            Seu corpo está limitando o crescimento da sua empresa?
          </h1>
          
          <p className="text-hero-sub text-muted-foreground max-w-3xl mx-auto px-4 md:px-0">
            Participe da masterclass exclusiva do Dr. Santiago Vecina e descubra os segredos de biohacking 
            que transformam empreendedores esgotados em <span className="text-primary font-semibold">CEOs antifrágeis</span>
          </p>

           {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-5">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Calendar className="w-5 h-5 text-primary" />

              <div className="text-left">
                <div className="font-semibold text-sm">Data</div>
                <div className="text-sm text-muted-foreground">
                  16/10/25 às 19H USA / 20H BRA
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Users className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-sm">Formato</div>
                <div className="text-sm text-muted-foreground">
                  Evento Online ao Vivo
                </div>
              </div>
            </div>
          </div>

          
          <div className="pt-6 md:pt-8 px-4 md:px-0">
            <Button 
              onClick={scrollToForm}
              className="btn-hero hover:shadow-2xl transform hover:scale-110 transition-all duration-300 w-full md:w-auto"
              size="lg"
            >
              QUERO ACESSO GRATUITO AGORA
            </Button>
          </div>
          
          <div className="pt-8 md:pt-12 text-sm text-muted-foreground px-4 md:px-0">
            <p>Inscrição gratuita por tempo limitado</p>
            <p className="mt-2">Junte-se a centenas de empresários que transformaram sua performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;