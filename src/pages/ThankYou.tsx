import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calendar } from "lucide-react";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "SubmitApplication");
    }
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open(
      "https://chat.whatsapp.com/KfaeG1TLYwJ6COH26Y5PER?mode=ems_copy_t",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-card to-background flex items-center justify-center px-4 py-12 md:py-20">
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        <div className="space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
          </div>

          {/* Main Message */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              🎉 Parabéns!
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold mb-4 text-foreground">
              Sua inscrição foi realizada com sucesso!
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-lg mx-auto">
              Você está a um passo de transformar sua performance empresarial e se tornar um{" "}
              <span className="text-primary font-semibold">CEO Antifrágil</span>.
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-muted/50 rounded-lg p-4 md:p-6 border border-border">
            <h3 className="text-base md:text-lg font-semibold mb-4 text-foreground">
              Próximos Passos:
            </h3>
            <div className="grid gap-3 md:grid-cols-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 md:gap-3">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span>Acesse nosso grupo exclusivo</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span>Conecte-se com outros empreendedores</span>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="space-y-4">
            <p className="text-base md:text-lg font-medium text-foreground">
              Entre agora no grupo exclusivo do WhatsApp para receber:
            </p>
            <ul className="text-left max-w-sm mx-auto space-y-2 text-sm md:text-base text-muted-foreground">
              <li>✅ Informações sobre a masterclass</li>
              <li>✅ Conteúdos exclusivos de biohacking</li>
              <li>✅ Networking com outros CEOs</li>
              <li>✅ Dicas práticas semanais</li>
            </ul>
          </div>

          {/* Main CTA Button */}
          <div className="pt-4">
            <Button
              onClick={handleWhatsAppRedirect}
              className="w-full md:w-auto h-14 md:h-16 px-6 md:px-12 text-lg md:text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              📱 ENTRAR NO GRUPO DO WHATSAPP
            </Button>
          </div>

          {/* Additional Info */}
          <div className="pt-6 md:pt-8 space-y-2 md:space-y-4">
            <p className="text-xs md:text-sm text-muted-foreground">
              🔒 Grupo privado e exclusivo para participantes da masterclass
            </p>
            <p className="text-xs text-muted-foreground">
              Ao clicar no botão acima, você será redirecionado para o WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
