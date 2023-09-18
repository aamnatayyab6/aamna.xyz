import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "@/typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  body: string;
};

type Props = { pageInfo: PageInfo };

const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:aamnatayyab6@gmail.com?subject=${formData.subject} &body=Hi, my name is ${formData.name}. ${formData.body}.`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-14 uppercase tracking-[20px] text-heading text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-4">
        <h4 className="text-2xl font-semibold text-timberwolf text-center -mt-20 md:mt-0">
          Get In Touch.{" "}
          <span className="decoration-pale-dogwood/50 underline">
            Lets Talk.
          </span>
        </h4>

        <div className="space-y-7">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-pale-dogwood h-5 w-5 animate-pulse" />
            <p className="text-lg text-timberwolf">{pageInfo.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-pale-dogwood h-5 w-5 animate-pulse" />
            <p className="text-lg text-timberwolf">{pageInfo.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-pale-dogwood h-5 w-5 animate-pulse" />
            <p className="text-lg text-timberwolf">{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 md:w-fit mx-auto"
        >
          <div className="md:flex md:space-x-2 space-y-2 md:space-y-0 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-80 md:w-auto"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-80 md:w-auto"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("body")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-mountbatten-pink py-5 px-10 rounded-md
           text-dark-davys-gray font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
