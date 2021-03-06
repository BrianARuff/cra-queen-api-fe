import * as React from "react";
import { useState } from "react";

type IFormData = {
  filter: string;
};

export default function useForm() {
  const [formData, setFormData] = useState<IFormData>({
    filter: "",
  });

  function handleFilterSongs(e: React.BaseSyntheticEvent) {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  return { formData, handleFilterSongs };
}
