import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import dayjs from 'dayjs';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { IClientRequest } from '@/interfaces/clients';
import { clientCreateSchema } from '@/schemas/clientSchema';
import CustomButton from '../../button';
import { Checkbox, FormControlLabel, FormGroup, FormHelperText } from '@mui/material';

interface ClientModalProps {
  handleClose: () => void;
  handleConfirm: (data: IClientRequest) => void;
  open: boolean;
}

const ClientModal = ({ handleClose, open, handleConfirm }: ClientModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IClientRequest>({
    resolver: yupResolver(clientCreateSchema),
  });

  const onSubmit = (data: IClientRequest) => {
    handleConfirm(data);
    reset();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Novo Cliente</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
        <TextField
          label="Nome Completo"
          {...register('nomeCompleto')}
          error={!!errors.nomeCompleto}
          helperText={errors.nomeCompleto?.message}
          fullWidth
          variant="filled"
        />
        <TextField
          label="Email"
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          variant="filled"
        />
        <Controller
          name="nascimento"
          control={control}
          render={({ field, fieldState }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
              <DatePicker
                label="Data de Nascimento"
                format="DD/MM/YYYY"
                value={field.value ? dayjs(field.value) : null}
                onChange={(date) => {
                  field.onChange(date ? date.format('YYYY-MM-DD') : '');
                }}
                slotProps={{
                  textField: {
                    error: !!fieldState.error,
                    helperText: fieldState.error?.message,
                    fullWidth: true,
                  },
                }}
              />
            </LocalizationProvider>
          )}
        />
        <Controller
          name="vendasAleatorias"
          control={control}
          defaultValue={false}
          render={({ field, fieldState }) => (
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />}
                label="Adicionar vendas aleatórias?"
              />
              {fieldState.error && <FormHelperText error>{fieldState.error.message}</FormHelperText>}
            </FormGroup>
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">
          Cancelar
        </Button>
        <CustomButton label="Criar" onClick={handleSubmit(onSubmit)} variant="contained" padding="4px 30px" />
      </DialogActions>
    </Dialog>
  );
};

export default ClientModal;
