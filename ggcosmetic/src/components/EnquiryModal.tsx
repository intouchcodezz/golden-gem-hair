import React, { useState, useRef, useEffect } from "react";
import { User, Mail, Phone, Calendar, CheckCircle, X, Loader2 } from "lucide-react";
import { createPortal } from "react-dom";
import posterImg from "../assets/poster.png";

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
  treatment?: string;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ isOpen, onClose, onSubmit, treatment = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointment_date: "",
    treatment: treatment || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        appointment_date: "",
        treatment: treatment || "",
      });
      setErrors({});
      setSubmitMessage(null);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen, treatment]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === "Escape" && isOpen) onClose(); };
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

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Please enter a valid 10-digit phone number";

    if (!formData.appointment_date) newErrors.appointment_date = "Appointment date is required";

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('https://thegoldengemhairclinic.com/backend/submit-appointment.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({ type: 'success', text: 'Appointment booked successfully!' });
        if (onSubmit) onSubmit({ ...formData, appointmentId: result.appointmentId });
        setTimeout(() => onClose(), 2000);
      } else {
        setSubmitMessage({ type: 'error', text: result.message || 'Failed to book appointment' });
      }
    } catch (error) {
      console.error(error);
      setSubmitMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="
          relative bg-white rounded-2xl shadow-xl
          w-[95%] sm:w-[90%]
          md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
          max-h-[90vh] overflow-y-auto
          flex flex-col md:flex-row
          transition-all duration-300
        "
      >
        {/* Left poster - fully responsive */}
        <div
          className="
            hidden md:flex
            md:w-[40%] lg:w-[45%] xl:w-[50%]
            bg-white relative overflow-hidden
          "
        >
          <img
            src={posterImg}
            alt="Hair Dermatology Consultation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side form */}
        <div className="w-full md:w-[60%] lg:w-[55%] xl:w-[50%] flex flex-col">
          <div className="px-5 py-4 md:px-8 md:py-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Book Appointment</h2>
            <button onClick={onClose} disabled={isSubmitting} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="px-5 py-4 md:px-8 md:py-6 flex-1 overflow-y-auto">
            {submitMessage && (
              <div
                className={`mb-4 p-4 rounded-xl ${
                  submitMessage.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {submitMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-600" /> Full Name *
                </label>
                <input
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border-2 rounded-xl outline-none 
                    ${errors.name ? "border-red-300" : "border-gray-200"}`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" /> Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border-2 rounded-xl outline-none 
                    ${errors.email ? "border-red-300" : "border-gray-200"}`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600" /> Phone Number *
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border-2 rounded-xl outline-none 
                    ${errors.phone ? "border-red-300" : "border-gray-200"}`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Appointment Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" /> Appointment Date *
                </label>
                <input
                  name="appointment_date"
                  type="date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full px-4 py-3 border-2 rounded-xl outline-none 
                    ${errors.appointment_date ? "border-red-300" : "border-gray-200"}`}
                />
                {errors.appointment_date && <p className="text-red-500 text-sm">{errors.appointment_date}</p>}
              </div>

              {/* Treatment */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Treatment</label>
                <input
                  name="treatment"
                  placeholder="Enter treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border-2 rounded-xl outline-none border-gray-200"
                />
              </div>
            </form>
          </div>

          <div className="px-5 py-4 md:px-8 md:py-6 border-t border-gray-100 flex justify-end gap-3 flex-wrap">
            <button
              onClick={onClose}
              disabled={isSubmitting}
              className="px-6 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all font-semibold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" /> Confirm Booking
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default EnquiryForm;
