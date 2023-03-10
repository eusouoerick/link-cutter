import axios from 'axios';
import { FormEvent, useRef, useState } from 'react';
import { toast } from 'react-toastify';

const useLink = (id: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const passRef = useRef<HTMLInputElement>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(`/api/link/${id}`, {
        password: passRef.current?.value,
      });
      toast.success('Success');
      window.location.href = data.link;
    } catch (error: any) {
      console.error(error.message);
      toast.error('Invalid password');
    }
    setIsLoading(false);
  };

  return {
    passRef,
    isLoading,
    submit,
  };
};

export default useLink;
