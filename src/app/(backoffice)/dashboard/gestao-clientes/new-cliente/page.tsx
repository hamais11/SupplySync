"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/backoffice/Forminputs/ImageInput";
import SelectInput from "@/components/backoffice/Forminputs/selectInput";
import SubmitButton from "@/components/backoffice/Forminputs/SubmitButton";
import TextareaInput from "@/components/backoffice/Forminputs/TextAreaInput";
import TextInput from "@/components/backoffice/Forminputs/TextInput";
import { makePostRequest } from "@/lib/apiresquest";
import { da } from "@faker-js/faker";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import {
  tipoCliente,
  ivaCativo,
  paisesDoMundo,
  provinciasDeAngola,
} from "@/utils/data";

export default function NewCategory() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const markets = [
    { id: 1, title: "Sprouts Farmers Market" },
    { id: 2, title: "Whole Foods Market" },
    { id: 3, title: "Trader Joe's" },
    { id: 4, title: "Walmart Neighborhood Market" },
    { id: 5, title: "Safeway" },
    { id: 6, title: "Kroger" },
    { id: 7, title: "Albertsons" },
    { id: 8, title: "Publix" },
    { id: 9, title: "Aldi" },
    { id: 10, title: "Costco Wholesale" },
  ];

  async function onSubmit(data: any) {
    {
      /*
      -id => auto()
      -title
      -slug => auto()
      -description
      -image
     */
    }
    setLoading(true);
    data.imageurl = imageUrl
    console.log(data);

    makePostRequest(setLoading, "api/clients", data, "Cliente", reset);
    setImageUrl("");
  }

  return (
    <div>
      <FormHeader title="Novo Cliente" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full  p-4 bg-white border border-gray-200
      rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
      "
      >
        <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">
          <SelectInput
            label="Tipo de Cliente"
            name="tipoclienteid"
            register={register}
            errors={errors}
            className="w-full"
            options={tipoCliente}
            multiple={false}
          />
          <SelectInput
            label="País"
            name="pais"
            register={register}
            errors={errors}
            className="w-full"
            options={paisesDoMundo}
            multiple={false}
          />

          <SelectInput
            label="Iva Cativo"
            name="ivacativoid"
            register={register}
            errors={errors}
            className="w-full"
            options={ivaCativo}
            multiple={false}
          />
          <SelectInput
            label="Cidade"
            name="cidade"
            register={register}
            errors={errors}
            className="w-full"
            options={provinciasDeAngola}
            multiple={false}
          />
          <TextInput
            label="Nome do cliente"
            name="nomecliente"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Nº de Contribuinte"
            name="contribuinte"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Endereço"
            name="endereco"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="WebSite"
            name="site"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Email"
            name="email"
            register={register}
            errors={errors}
            type="email"
            className="w-full"
          />
          <TextInput
            label="Telefone"
            name="telefone"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Fax"
            name="fax"
            register={register}
            errors={errors}
            className="w-full"
          />

          <ImageInput
            label="Logo do Cliente"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="clientImage"
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Criar Cliente"
          loadingButtonTitle="Criando Cliente aguarde..."
        />
      </form>
    </div>
  );
}
