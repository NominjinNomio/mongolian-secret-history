import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";

export default function ContactInfo() {
  const t = useTranslations("contact");

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="font-display text-3xl text-foreground mb-6">{t("infoTitle")}</h2>

        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{t("addressLabel")}</p>
            <p className="text-[15px] text-foreground">{t("addressValue")}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{t("phoneLabel")}</p>
            <p className="text-[15px] text-foreground">{t("phoneValue")}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{t("emailLabel")}</p>
            <p className="text-[15px] text-foreground">{t("emailValue")}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{t("hoursLabel")}</p>
            <p className="text-[15px] text-foreground">{t("hoursValue")}</p>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="font-display text-xl text-foreground mb-2">{t("callTitle")}</h3>
        <p className="text-sm text-muted-foreground mb-4 max-w-[360px]">{t("callDesc")}</p>
        <a
          href={`tel:${t("phoneValue").replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-6 py-3 text-sm font-medium text-white hover:bg-[#C9A227]/90 transition-colors"
        >
          <Phone size={16} />
          {t("callButton")}
        </a>
      </div>
    </div>
  );
}
