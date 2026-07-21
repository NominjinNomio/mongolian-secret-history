"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";

type CustomerType = "individual" | "organization";
type PaymentMethod = "digipay" | "happypay" | "socialpay" | "qpay" | "card";

const paymentMethods = [
  { id: "digipay" as PaymentMethod, label: "DigiPay", icon: "D" },
  { id: "happypay" as PaymentMethod, label: "Happy Pay", icon: "H" },
  { id: "socialpay" as PaymentMethod, label: "SocialPay", icon: "S" },
  { id: "qpay" as PaymentMethod, label: "QPay", icon: "Q" },
  { id: "card" as PaymentMethod, label: "Card", icon: "💳" },
];

export default function PaymentPage() {
  const t = useTranslations("payment");
  const router = useRouter();
  const [customerType, setCustomerType] = useState<CustomerType>("individual");
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("qpay");

  const handleCheckPayment = () => {
    alert("Payment check initiated.");
    router.push("/");
  };

  return (
    <InnerPageLayout>
      <div className="min-h-screen bg-primary-dark py-12 px-4">
        <div className="mx-auto max-w-[480px]"
        >
          <div className="bg-primary rounded-[24px] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-end mb-6"
            >
              <button
                onClick={() => router.back()}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="text-center mb-8"
            >
              <p className="text-sm text-white/60 mb-2"
              >Төлөх дүн</p>
              <p className="text-4xl font-bold text-white"
              >$1,200.00</p>
            </div>

            <div className="mb-6"
            >
              <p className="text-sm text-white/70 mb-3"
              >И Баримт авах хэлбэр</p>
              <div className="grid grid-cols-2 gap-3"
              >
                <button
                  onClick={() => setCustomerType("individual")}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors ${
                    customerType === "individual"
                      ? "border-gold bg-white/5"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    customerType === "individual" ? "border-gold" : "border-white/40"
                  }`}
                  >
                    {customerType === "individual" && (
                      <span className="w-2 h-2 rounded-full bg-gold" />
                    )}
                  </span>
                  <span className="text-sm text-white"
                  >Хувь хүн</span>
                </button>

                <button
                  onClick={() => setCustomerType("organization")}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors ${
                    customerType === "organization"
                      ? "border-gold bg-white/5"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    customerType === "organization" ? "border-gold" : "border-white/40"
                  }`}
                  >
                    {customerType === "organization" && (
                      <span className="w-2 h-2 rounded-full bg-gold" />
                    )}
                  </span>
                  <span className="text-sm text-white"
                  >Албан байгууллага</span>
                </button>
              </div>
            </div>

            <p className="text-xs text-gold/80 mb-6"
            >
              *И Баримт таны бүртгэлийн и-мэйл хаягруу илгээгдэнэ
            </p>

            <div className="mb-6"
            >
              <p className="text-sm text-white/70 mb-3"
              >Төлбөр төлөх хэлбэр</p>
              <div className="grid grid-cols-2 gap-3"
              >
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-colors ${
                      selectedMethod === method.id
                        ? "border-gold bg-white/5"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <span className="flex items-center gap-2"
                    >
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedMethod === method.id ? "border-gold" : "border-white/40"
                      }`}
                      >
                        {selectedMethod === method.id && (
                          <span className="w-2 h-2 rounded-full bg-gold" />
                        )}
                      </span>
                      <span className="text-sm text-white"
                      >{method.label}</span>
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white"
                    >
                      {method.icon}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {selectedMethod === "qpay" && (
              <div className="flex flex-col items-center gap-4 mb-6"
              >
                <div className="bg-white p-4 rounded-2xl"
                >
                  <div className="w-48 h-48 bg-background flex items-center justify-center text-sm text-muted-foreground"
                  >
                    QR Code Placeholder
                  </div>
                </div>
                <p className="text-xs text-white/60 text-center"
                >
                  Та QR кодыг өөрийн интернет банкны аппликейшн ашиглан уншуулж төлбөрөө төлөөрэй.
                </p>
              </div>
            )}

            {selectedMethod === "card" && (
              <div className="space-y-3 mb-6"
              >
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold"
                />
                <div className="grid grid-cols-2 gap-3"
                >
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold"
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleCheckPayment}
              className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-4 rounded-xl transition-colors"
            >
              Төлбөр шалгах
            </button>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
