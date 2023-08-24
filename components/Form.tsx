"use client";
import style from "@/app/page.module.css";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import useClipboard from "react-use-clipboard";

const formSchema = z.object({
  name: z
    .string({ required_error: "Upss, sepertinya kamu lupa mengisi Nama!" })
    .min(2, {
      message: "Upss, sepertinya anda lupa mengisi Nama",
    })
    .max(50, {
      message: "Nama anda terlihat sangat panjang",
    }),
  whatsapp: z
    .string({ required_error: "Sepertinya nomor WA belum diisi!" })
    .min(12, "Kelihatannya nomor kamu kurang tuh!")
    .max(13, "Kelihatannya nomor kamu kelebihan tuh!"),
  message: z.string(),
});

// 2. Define a submit handler.

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    message:
      "Perkataan tajam sering terlontar menyakiti hati. Perbuatan buruk sering terjadi tanpa disadari. Di hari yang Fitri ini, izinkan kami sekeluarga memohon maaf sebesar-besarnya atas semua kesalahan yang terjadi. Semoga Allah SWT menerima semua amal Ibadah kita di bulan Ramadhan ini.",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      name: values.name.trim().split(" ").join("+"),
      whatsapp: values.whatsapp,
      message:
        values.message != ""
          ? values.message.trim().split(" ").join("+")
          : "Perkataan+tajam+sering+terlontar+menyakiti+hati.+Perbuatan+buruk+sering+terjadi+tanpa disadari.+Di+hari+yang+Fitri+ini,+izinkan+kami+sekeluarga+memohon+maaf+sebesar-besarnya+atas+semua+kesalahan+yang+terjadi.+Semoga+Allah+SWT+menerima+semua+amal+Ibadah+kita+di+bulan+Ramadhan+ini.",
    };
    setIsShow((prev) => !prev);
    setUrl(
      `http://localhost:3000/?name=${data.name}&whatsapp=${data.whatsapp}&message=${data.message}`
    );
    console.log(values);
  }

  const [isShow, setIsShow] = useState(false);
  const [url, setUrl] = useState("");
  const [isCopied, setCopied] = useClipboard(url);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${style.bgBanner} px-5 flex-col`}
    >
      <Form {...form}>
        {isShow ? (
          <div className="alert max-w-[80vw] p-10 shadow-lg ronuded-lg bg-white rounded-lg">
            <h4 className="text-xl text-center font-bold mb-5">
              Selamat, Link Ucapan kamu sudah berhasil dibuat!
            </h4>
            <p className="mt-3 mb-5">
              Simpan Link ini dengan baik untuk kamu berikan kepada teman,
              kerabat, dan sanak saudara kamu!
            </p>
            <div className="flex gap-2">
              <Input readOnly value={url} />
              {!isCopied ? (
                <Button
                  onClick={setCopied}
                  className="bg-green-500 hover:bg-green-600"
                >
                  Copy
                </Button>
              ) : (
                <Button disabled>Copied!</Button>
              )}
            </div>
          </div>
        ) : (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 md:w-5/12 2xl:w-1/2 shadow-lg rounded-lg px-5 py-4 bg-white"
          >
            <h2 className="text-2xl font-extrabold text-green-500 text-center my-5 uppercase">
              Sebelumnya, perkenalkan dirimu!
            </h2>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Kamu</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor WhatsApp</FormLabel>
                  <FormControl>
                    <Input placeholder="628xxxxxxxxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kata Ucapan</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      defaultValue={""}
                      placeholder="Pesan dan Kata Ucapan untuk kerabat kamu"
                    />
                  </FormControl>
                  <FormDescription>
                    <i>Jika enggak diisi, bakalan dibuatin otomatis!</i>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-green-500 hover:bg-green-600">
              Submit
            </Button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default MyForm;
