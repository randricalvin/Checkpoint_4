/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import send from "../assets/contact/send.svg";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="flex-col">
      <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="name-input flex flex-row">
          <input
            className="w-1/2 mr-5 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg"
            type="text"
            placeholder="Firstname"
            {...register("Firstname", { required: true })}
          />
          <input
            className="w-1/2 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg"
            type="text"
            placeholder="Lastname"
            {...register("Lastname", { required: true })}
          />
        </div>
        <input
          className="w-full my-5 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg"
          type="email"
          placeholder="Email"
          {...register("Email", { required: true })}
        />
        <input
          className="w-full rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg"
          type="tel"
          placeholder="Phone"
          {...register("Phone", { required: false })}
        />
        <textarea
          className="w-full h-40 my-5 resize-none rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg"
          type="message"
          placeholder="Message"
          {...register("Message", {})}
        />
        <div className="page-contact-button flex justify-center">
          <button
            type="submit"
            className="rounded-lg button-send bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out"
          >
            Send
            <img className="ml-3 w-6" src={send} alt="sending message" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
