import { useState, useEffect } from "react";
import { Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalCTASection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ddi: "+55",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updatePhonePlaceholder = (ddi: string) =>
    ddi === "+1" ? "(000) 000-0000" : "(00) 00000-0000";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("ddi", formData.ddi);

      const response = await fetch(
        "https://link.salee.ai/widget/form/TisgaxvtT31gflLTbBFY",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        console.log("Lead capturado!");
        navigate("/obrigado");
      } else {
        console.error("Erro na resposta:", response.status);
        alert("Erro ao enviar formulário. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  16/10/25 às 18h30 USA / 19H30 BRA
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
