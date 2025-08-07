import React from "react";
import { VayuBanner } from "../utils/utils";
import { useForm } from "react-hook-form";
import Section from "../components/Section";
import PrimaryHeading from "../components/PrimaryHeading";
import SectionTitle from "../components/SectionTitle";
import PrimaryButton from "../components/PrimaryButton";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // add your form submission logic here
  };

  const handleInput = (event) => {
    event.target.value = event.target.value.replace(/\D/g, "");
  };

  const handleBlur = (event) => {
    if (event.target.value.length < 10) {
      event.target.value = "";
    }
  };

  return (
    <>
      {/* Banner Section */}
      <Section
        bgImage={VayuBanner}
        className="h-screen flex items-center justify-center"
      >
        <PrimaryHeading className="text-center text-white">
          Contact Us
        </PrimaryHeading>

        {/* Form Section */}
      </Section>

      <Section>
        <SectionTitle className="mb-24 text-center">
          Please fill in the form below
        </SectionTitle>

        <div className="form-container md:w-[65%] mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-2 gap-x-10">
              {/* First Name */}
              <div className="input flex flex-col sm:mb-10 mb-5">
                <label className="text-[#000000] mb-1">First Name*</label>
                <input
                  {...register("firstNameRequired", { required: true })}
                  type="text"
                  className="bg-transparent mb-2 border-b text-[#2c2c2c8a] border-primary focus:outline-none"
                />
                {errors.firstNameRequired && (
                  <span className="text-[red] text-sm">
                    This field is required
                  </span>
                )}
              </div>

              {/* Last Name */}
              <div className="input flex flex-col sm:mb-10 mb-5">
                <label className="text-[#000000] mb-1">Last Name*</label>
                <input
                  {...register("lastNameRequired", { required: true })}
                  type="text"
                  className="bg-transparent mb-2 border-b text-[#2c2c2c8a] border-primary focus:outline-none"
                />
                {errors.lastNameRequired && (
                  <span className="text-[red] text-sm">
                    This field is required
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="input flex flex-col sm:mb-10 mb-5">
                <label className="text-[#000000] mb-1">Your Email*</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email format",
                    },
                  })}
                  type="email"
                  className="bg-transparent mb-2 border-b text-[#2c2c2c8a] border-primary focus:outline-none"
                />
                {errors.email && (
                  <span className="text-[red] text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="input flex flex-col sm:mb-10 mb-5">
                <label className="text-[#000000] mb-1">
                  Your Mobile Number*
                </label>
                <input
                  {...register("mobileRequired", { required: true })}
                  type="text"
                  minLength={10}
                  maxLength={10}
                  onInput={handleInput}
                  onBlur={handleBlur}
                  className="bg-transparent mb-2 border-b text-[#2c2c2c8a] border-primary focus:outline-none"
                />
                {errors.mobileRequired && (
                  <span className="text-[red] text-sm">
                    This field is required
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="input flex flex-col sm:mb-10 mb-5 sm:col-span-2">
                <label className="text-[#000000] mb-1">Your Message*</label>
                <textarea
                  {...register("messageRequired", { required: true })}
                  className="bg-transparent mb-2 border-b text-[#2c2c2c8a] border-primary focus:outline-none"
                />
                {errors.messageRequired && (
                  <span className="text-[red] text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            <PrimaryButton type="submit">Submit</PrimaryButton>
          </form>
        </div>
      </Section>
    </>
  );
};

export default ContactUs;
