import { FieldValues, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

interface UseReactHookFormProps {
  schemaZodResolver: any;
  defaultValues?: any;
}

export function UseReactHookForm<T extends FieldValues>({
  schemaZodResolver,
  defaultValues
}: UseReactHookFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    setError,
    getValues,
    trigger,
    getFieldState,
    setValue,
    setFocus
  } = useForm<T>({
    resolver: zodResolver(schemaZodResolver),
    defaultValues: defaultValues
  });

  return {
    register,
    handleSubmit,
    watch,
    errors,
    control,
    setError,
    getValues,
    trigger,
    getFieldState,
    setValue,
    setFocus
  };
}
