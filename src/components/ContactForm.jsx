import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../components/PrimaryButton";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = ({ variant = "light" }) => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const NewSubmit = async (data) => {
    if (!form.current) return;

    emailjs
      .sendForm("service_14yoxzt", "template_cvspgch", form.current, {
        publicKey: "gNhCV7EMmRzIunvDD",
      })
      .then(
        () => {
          toast.success("Thank you! We will contact you soon.");
          reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Something went wrong. Please try again later.");
        }
      );
  };

  const handleInput = (event) => {
    const input = event.target;
    input.value = input.value.replace(/\D/g, "");
  };

  const handleBlur = (event) => {
    const input = event.target;
    if (input.value.length < 10) {
      input.value = "";
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit(NewSubmit)}>
      <div className="grid sm:grid-cols-2 gap-x-10">
        {/* First Name */}
        <div className="input flex flex-col sm:mb-10 mb-5">
          <label
            className={`mb-1 ${
              variant === "dark" ? "text-white" : "text-black"
            }`}
          >
            First Name*
          </label>
          <input
            {...register("user_name", {
              required: "This field is required",
            })}
            type="text"
            className={`mb-2 border-b focus:outline-none  focus:border-blue-500
          ${
            variant === "dark"
              ? "bg-transparent text-white border-white placeholder-gray-400"
              : "bg-transparent text-gray-800 border-gray-300 placeholder-gray-500"
          }`}
          />
          {errors.user_name && (
            <span className="text-red-500 text-sm">
              {errors.user_name.message}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="input flex flex-col sm:mb-10 mb-5">
          <label
            className={`mb-1 ${
              variant === "dark" ? "text-white" : "text-black"
            }`}
          >
            Last Name*
          </label>
          <input
            {...register("last_name", {
              required: "This field is required",
            })}
            type="text"
            className={`mb-2 border-b focus:outline-none focus:border-blue-500 
          ${
            variant === "dark"
              ? "bg-transparent text-white border-white placeholder-gray-400"
              : "bg-transparent text-gray-800 border-gray-300 placeholder-gray-500 "
          }`}
          />
          {errors.last_name && (
            <span className="text-red-500 text-sm">
              {errors.last_name.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="input flex flex-col sm:mb-10 mb-5">
          <label
            className={`mb-1 ${
              variant === "dark" ? "text-white" : "text-black"
            }`}
          >
            Your Email*
          </label>
          <input
            {...register("user_email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            type="email"
            className={`mb-2 border-b focus:outline-none focus:border-blue-500
          ${
            variant === "dark"
              ? "bg-transparent text-white border-white placeholder-gray-400"
              : "bg-transparent text-gray-800 border-gray-300 placeholder-gray-500 "
          }`}
          />
          {errors.user_email && (
            <span className="text-red-500 text-sm">
              {errors.user_email.message}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className="input flex flex-col sm:mb-10 mb-5">
          <label
            className={`mb-1 ${
              variant === "dark" ? "text-white" : "text-black"
            }`}
          >
            Your Mobile Number*
          </label>
          <input
            {...register("user_phone", {
              required: "This field is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number",
              },
            })}
            type="text"
            minLength={10}
            maxLength={10}
            onInput={handleInput}
            onBlur={handleBlur}
            className={`mb-2 border-b focus:outline-none focus:border-blue-500
          ${
            variant === "dark"
              ? "bg-transparent text-white border-white placeholder-gray-400"
              : "bg-transparent text-gray-800 border-gray-300 placeholder-gray-500 "
          }`}
          />
          {errors.user_phone && (
            <span className="text-red-500 text-sm">
              {errors.user_phone.message}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="input flex flex-col sm:mb-10 mb-5 sm:col-span-2">
          <label
            className={`mb-1 ${
              variant === "dark" ? "text-white" : "text-black"
            }`}
          >
            Your Message*
          </label>
          <textarea
            {...register("messages", {
              required: "This field is required",
            })}
            className={`mb-2 border-b focus:outline-none min-h-[100px] focus:border-blue-500
          ${
            variant === "dark"
              ? "bg-transparent text-white border-white placeholder-gray-400"
              : "bg-transparent text-gray-800 border-gray-300 placeholder-gray-500 "
          }`}
          />
          {errors.messages && (
            <span className="text-red-500 text-sm">
              {errors.messages.message}
            </span>
          )}
        </div>
      </div>

      <PrimaryButton type="submit">Submit</PrimaryButton>
    </form>
  );
};

export default ContactForm;
