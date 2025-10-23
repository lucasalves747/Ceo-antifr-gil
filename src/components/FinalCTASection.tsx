import { useEffect } from "react";
import { Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalCTASection = () => {
  const navigate = useNavigate();

  // Carregar script externo do Salee apenas uma vez
  useEffect(() => {
    const scriptId = "salee-form-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.salee.ai/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Listener para capturar o submit do form dentro do iframe
useEffect(() => {
  const iframe = document.getElementById("popup-TisgaxvtT31gflLTbBFY");

  const checkRedirect = () => {
    try {
      const url = iframe.contentWindow.location.href;

      // 👉 Troque "pagina-de-sucesso" pelo pedaço da URL que aparece no Salee após o envio
      if (url.includes("https://ceo-antifragil.vercel.app/obrigado")) {
        window.location.href = "/obrigado"; // redireciona fora do iframe
      }
    } catch (e) {
      // Se o domínio for diferente, pode dar erro de cross-domain → ignora
    }
  };

  const interval = setInterval(checkRedirect, 1500); // checa a cada 1.5s
  return () => clearInterval(interval);
}, []);

  return (
    <section
      id="final-cta"
      className="py-16 md:py-32 px-4 bg-gradient-to-br from-card to-background"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in space-y-8">
          {/* Headline */}
          <div>
            <h2 className="text-section-title mb-6">
              Pronto Para se Tornar um CEO Antifrágil?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Participe desta masterclass exclusiva e descubra os segredos de
              biohacking que transformarão sua energia, foco e performance
              empresarial para sempre.
            </p>
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-sm">Data</div>
                <div className="text-sm text-muted-foreground">
                  28/10/25 às 19H USA / 20H BRA
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

          {/* Salee Form */}
          <div className="max-w-lg mx-auto">
            <iframe
              src="https://link.salee.ai/widget/form/TisgaxvtT31gflLTbBFY"
              style={{
                display: "block",
                width: "100%",
                height: "460px",
                border: "none",
                borderRadius: "4px",
              }}
              id="popup-TisgaxvtT31gflLTbBFY"
              title="CEO ANTIFRAGIL"
            />
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>✅ 100% Gratuito</span>
              <span>✅ Sem Spam</span>
              <span>✅ Acesso Instantâneo</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Junte-se a mais de 500 empresários que transformaram sua
              performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
