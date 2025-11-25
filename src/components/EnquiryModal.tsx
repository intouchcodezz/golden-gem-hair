import React, { useState, useRef, useEffect } from "react";
import { User, Mail, Phone, Calendar, CheckCircle, X, Loader2 } from "lucide-react";
import { createPortal } from "react-dom";
import poster from "@/assets/poster.png";

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
  treatment?: string;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  treatment = ""
}) => {

  // -----------------------------
  // State
  // -----------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointment_date: "",
    treatment: treatment || "",
    website: "",
    captchaAnswer: ""
  });

  const [generatedQuestion, setGeneratedQuestion] = useState({
    text: "",
    answer: ""
  });

  const [formOpenedAt, setFormOpenedAt] = useState<number>(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Show success or error message
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // -----------------------------
  // Generate Internal CAPTCHA
  // -----------------------------
  const generateCaptcha = () => {
    const a = Math.floor(2 + Math.random() * 8);
    const b = Math.floor(2 + Math.random() * 8);
    setGeneratedQuestion({
      text: `What is ${a} + ${b}?`,
      answer: String(a + b)
    });
  };

  // -----------------------------
  // Reset form when opened
  // -----------------------------
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      generateCaptcha();
      setFormOpenedAt(Date.now());
      setErrors({});
      setSubmitMessage(null);

      setFormData({
        name: "",
        email: "",
        phone: "",
        appointment_date: "",
        treatment: treatment || "",
        website: "",
        captchaAnswer: ""
      });

    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen, treatment]);

  // ESC close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) setErrors({ ...errors, [name]: "" });
    if (submitMessage) setSubmitMessage(null);
  };

  // -----------------------------
  // Validation
  // -----------------------------
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Enter a valid 10-digit phone number";

    if (!formData.appointment_date) newErrors.appointment_date = "Select a date";

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";

    if (formData.captchaAnswer.trim() !== generatedQuestion.answer)
      newErrors.captchaAnswer = "Incorrect answer";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // -----------------------------
  // Submit handler
  // -----------------------------
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (formData.website.trim() !== "") return;

    if ((Date.now() - formOpenedAt) / 1000 < 2) return;

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://thegoldengemhairclinic.com/api/submit-appointment.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({ type: "success", text: "Appointment booked successfully!" });

        setTimeout(() => onClose(), 2000);
      } else {
        setSubmitMessage({ type: "error", text: result.message || "Something went wrong" });
      }

    } catch (error) {
      setSubmitMessage({ type: "error", text: "Network error. Try again." });
    }

    setIsSubmitting(false);
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >

      <div
        ref={modalRef}
        className="
          relative bg-white rounded-2xl shadow-xl
          text-xs sm:text-sm
          w-full sm:w-[90%] md:w-[80%] lg:w-[85%] xl:w-[90%]
          max-w-[520px] md:max-w-[620px] lg:max-w-[900px]
          max-h-[75vh] overflow-y-auto scrollbar-none
          flex flex-col lg:flex-row
        "
      >
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-[38%] p-3 border-b lg:border-r border-gray-200 flex items-center justify-center bg-white">
          <img
            src={poster}
            alt="Consultation Poster"
            className="w-full h-auto object-contain max-h-[240px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-full rounded-lg shadow"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col bg-white">

          <div className="px-5 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-bold">Book Appointment</h2>
                <p className="text-[11px] sm:text-xs text-gray-500">Schedule your consultation</p>
              </div>

              <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">

            {submitMessage?.type === "success" && (
              <div className="flex items-center justify-center py-8">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center shadow">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-lg font-bold text-green-700">Thank You!</h2>
                  <p className="text-xs text-gray-600">Your appointment is booked.</p>
                </div>
              </div>
            )}

            {/* SHOW FORM ONLY WHEN NO SUCCESS */}
            {!submitMessage && (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* FULL NAME, EMAIL, PHONE */}
                {[
                  {
                    label: "Full Name *",
                    icon: <User className="w-5 h-5 text-blue-600" />,
                    name: "name",
                    type: "text",
                    placeholder: "Enter your name"
                  },
                  {
                    label: "Email Address",
                    icon: <Mail className="w-5 h-5 text-blue-600" />,
                    name: "email",
                    type: "email",
                    placeholder: "Enter your email"
                  },
                  {
                    label: "Phone Number *",
                    icon: <Phone className="w-5 h-5 text-blue-600" />,
                    name: "phone",
                    type: "tel",
                    placeholder: "Enter phone number"
                  }
                ].map((field) => (
                  <div key={field.name} className="space-y-1.5">
                    <label className="flex items-center gap-2 font-semibold text-gray-700 text-xs">
                      {field.icon} {field.label}
                    </label>

                    <input
                      name={field.name}
                      type={field.type}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder={field.placeholder}
                      className={`
                        w-full px-3 py-2 border rounded-lg text-xs
                        focus:ring-2 focus:ring-blue-100 focus:border-blue-500
                        ${errors[field.name] ? "border-red-400" : "border-gray-300"}
                      `}
                    />

                    {errors[field.name] && <p className="text-red-600 text-[10px]">{errors[field.name]}</p>}
                  </div>
                ))}

                {/* DATE + TREATMENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 font-semibold text-gray-700 text-xs">
                      <Calendar className="w-4 h-4 text-blue-600" /> Appointment Date *
                    </label>

                    <input
                      name="appointment_date"
                      type="date"
                      value={formData.appointment_date}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      min={new Date().toISOString().split("T")[0]}
                      className={`
                        w-full px-3 py-2 border rounded-lg text-xs
                        ${errors.appointment_date ? "border-red-400" : "border-gray-300"}
                        focus:ring-2 focus:ring-blue-100 focus:border-blue-500
                      `}
                    />

                    {errors.appointment_date && (
                      <p className="text-red-600 text-[10px]">{errors.appointment_date}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold text-gray-700 text-xs">Treatment</label>

                    <input
                      name="treatment"
                      type="text"
                      value={formData.treatment}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Enter treatment"
                      className="w-full px-3 py-2 border rounded-lg text-xs border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-gray-700 text-xs">
                    Human Verification: {generatedQuestion.text} *
                  </label>

                  <input
                    name="captchaAnswer"
                    type="text"
                    value={formData.captchaAnswer}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Enter answer"
                    className={`
                      w-full px-3 py-2 border rounded-lg text-xs
                      ${errors.captchaAnswer ? "border-red-400" : "border-gray-300"}
                      focus:ring-2 focus:ring-blue-100 focus:border-blue-500
                    `}
                  />

                  {errors.captchaAnswer && (
                    <p className="text-red-600 text-[10px]">{errors.captchaAnswer}</p>
                  )}
                </div>

                <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" />
              </form>
            )}
          </div>

          {!submitMessage && (
            <div className="px-5 py-4 border-t border-gray-100 flex justify-end gap-3 bg-white">
              <button
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2 bg-white border rounded-lg text-gray-700 text-xs font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Booking…
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Confirm Booking
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default EnquiryForm;
