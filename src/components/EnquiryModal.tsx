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

    // Bot check 1
    if (formData.website.trim() !== "") return;

    // Bot check 2
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
          w-full sm:w-[90%] md:w-[80%] lg:w-[85%] xl:w-[90%]
          max-w-[550px] md:max-w-[650px] lg:max-w-[950px]
          max-h-[70vh] overflow-y-auto scrollbar-none
          flex flex-col lg:flex-row
        "
      >

        {/* POSTER */}
        <div className="
          w-full lg:w-[38%] xl:w-[40%]
          p-4 border-b lg:border-b-0 lg:border-r border-gray-200
          flex items-center justify-center bg-white
        ">
          <img
            src={poster}
            alt="Consultation Poster"
            className="w-full h-auto object-contain rounded-xl border border-gray-200 shadow-md"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col bg-white">

          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
                <p className="text-sm text-gray-500">Schedule your consultation with us</p>
              </div>

              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-xl transition"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </div>

          {/* BODY AREA */}
          <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-none">

            {/* SUCCESS ANIMATION */}
            {submitMessage?.type === "success" && (
              <div className="flex items-center justify-center py-10 animate-pop">
                <div className="text-center space-y-4">
                  <div className="
                    w-20 h-20 mx-auto rounded-full bg-green-600 flex items-center justify-center shadow-lg animate-pop
                  ">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>

                  <h2 className="text-2xl font-bold text-green-700">Thank You!</h2>
                  <p className="text-gray-600 text-lg">
                    Your appointment has been successfully booked.
                  </p>
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
                  <div key={field.name} className="space-y-2">
                    <label className="flex items-center gap-2 font-semibold text-gray-700">
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
                        w-full px-4 py-3 border rounded-xl text-base
                        focus:ring-2 focus:ring-blue-100 focus:border-blue-500
                        ${errors[field.name] ? "border-red-400" : "border-gray-300"}
                      `}
                    />

                    {errors[field.name] && (
                      <p className="text-red-600 text-sm">{errors[field.name]}</p>
                    )}
                  </div>
                ))}

                {/* DATE + TREATMENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-semibold text-gray-700">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      Appointment Date *
                    </label>

                    <input
                      name="appointment_date"
                      type="date"
                      value={formData.appointment_date}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      min={new Date().toISOString().split("T")[0]}
                      className={`
                        w-full px-4 py-3 border rounded-xl text-base
                        ${errors.appointment_date ? "border-red-400" : "border-gray-300"}
                        focus:ring-2 focus:ring-blue-100 focus:border-blue-500
                      `}
                    />

                    {errors.appointment_date && (
                      <p className="text-red-600 text-sm">{errors.appointment_date}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="font-semibold text-gray-700">Treatment</label>

                    <input
                      name="treatment"
                      type="text"
                      value={formData.treatment}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Enter treatment"
                      className="
                        w-full px-4 py-3 border rounded-xl text-base
                        border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500
                      "
                    />
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="space-y-2">
                  <label className="font-semibold text-gray-700">
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
                      w-full px-4 py-3 border rounded-xl text-base
                      ${errors.captchaAnswer ? "border-red-400" : "border-gray-300"}
                      focus:ring-2 focus:ring-blue-100 focus:border-blue-500
                    `}
                  />

                  {errors.captchaAnswer && (
                    <p className="text-red-600 text-sm">{errors.captchaAnswer}</p>
                  )}
                </div>

                {/* Hidden Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="hidden"
                  aria-hidden="true"
                />

              </form>
            )}
          </div>

          {/* FOOTER BUTTONS */}
          {!submitMessage && (
            <div className="px-6 py-5 border-t border-gray-100 flex justify-end gap-4 bg-white">
              <button
                onClick={onClose}
                disabled={isSubmitting}
                className="
                  px-6 py-3 bg-white border-2 border-gray-200 rounded-xl
                  text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300
                "
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="
                  px-8 py-3 bg-green-600 text-white font-semibold rounded-xl
                  hover:bg-green-700 flex items-center gap-2
                "
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Booking…
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
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
