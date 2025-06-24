import * as S from './style';
import { Box, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { useLoading } from '@/providers/loadingProvider';
import { NormalizedClient } from '@/interfaces/clients';
import getFirstMissingLetter from '@/hooks/useFirstMissingLetter';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useClients } from '@/providers/clientsProvider';
import { useRef } from 'react';

interface ICustomTable {
  clients: NormalizedClient[];
}

const CustomTable = ({ clients }: ICustomTable) => {
  const { loading } = useLoading();
  const { setClients } = useClients();
  const isMobile = useMediaQuery(1023);

  const clientsRef = useRef<NormalizedClient[] | null>(null);

  if (!clientsRef.current && clients.length > 0) {
    clientsRef.current = [...clients];
  }

  const listClients = clientsRef.current ?? [];

  const handleSelect = (client: NormalizedClient) => {
    setClients([client]);
  };

  return (
    <S.Container>
      <TableContainer
        sx={{
          overflowX: 'auto',
          width: isMobile ? '350px' : '710px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          backgroundColor: 'var(--grey-10)',
        }}
      >
        <Table
          size={'small'}
          sx={{
            borderSpacing: '0',
            borderCollapse: 'separate',
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: 'var(--color-profile-2)',
              }}
            >
              <TableCell
                align="center"
                sx={{
                  fontWeight: 600,
                  fontSize: '16px',
                  color: 'var(--color-white)',
                  borderBottom: '2px solid #e0e0e0',
                  padding: '16px',
                  borderRadius: '6px 0 0 6px',
                }}
              >
                Tag
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 600,
                  fontSize: '16px',
                  color: 'var(--color-white)',
                  borderBottom: '2px solid #e0e0e0',
                  padding: '12px',
                }}
              >
                Nome Completo
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 600,
                  fontSize: '16px',
                  color: 'var(--color-white)',
                  borderBottom: '2px solid #e0e0e0',
                  padding: '12px',
                  whiteSpace: 'nowrap',
                }}
              >
                Valor em Vendas
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 600,
                  fontSize: '16px',
                  color: 'var(--color-white)',
                  borderBottom: '2px solid #e0e0e0',
                  padding: '12px',
                  whiteSpace: 'nowrap',
                  borderRadius: '0 6px 6px 0',
                }}
              >
                Quantidade de Vendas
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              listClients.map((_, i) => (
                <TableRow key={`skeleton-${i}`}>
                  <TableCell colSpan={4}>
                    <Skeleton variant="rounded" height={50} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>
                {listClients.map((client: NormalizedClient, i) => {
                  const saleTotal = client.sales.reduce((acc, sale) => acc + sale.amount, 0);

                  return (
                    <TableRow
                      key={i}
                      sx={{
                        backgroundColor: '#fff',
                        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: 'var(--color-brand-1)',
                          transform: 'scale(1.01)',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                      onClick={() => handleSelect(client)}
                    >
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: 'var(--font-size-20)',
                          padding: '16px',
                          width: '60px',
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: 'var(--color-profile-1)',
                            color: '#fff',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 500,
                            fontSize: '18px',
                            textTransform: 'capitalize',
                          }}
                        >
                          {getFirstMissingLetter(client.fullName)}
                        </Box>
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: 'var(--font-size-20)' }}>
                        {client.fullName}
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: 'var(--font-size-20)' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: 'var(--lexend)',
                          }}
                        >
                          R$ {saleTotal.toFixed(2)}
                        </Box>
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: 'var(--font-size-20)' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: 'var(--lexend)',
                          }}
                        >
                          {client.sales.length}
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </S.Container>
  );
};

export default CustomTable;
