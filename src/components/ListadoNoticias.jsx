import { Grid,Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import UseNoticias from '../hooks/UseNoticias'
import Noticia from './Noticia'
 

export default function ListadoNoticias() {

    const { noticias, totalNoticias, handleChangePagina, pagina } = UseNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20)

  return (
    <>
        <Typography textAlign={'center'} marginY={5} variant='h3' component={'h2'}>
            Ultimas Noticias
        </Typography>

        <Grid container spacing={2}>
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>

    <Stack spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{
        marginY: 5
    }}>
        <Pagination count={totalPaginas} color="secondary" onChange={handleChangePagina} page={pagina} />
      </Stack>


    </>
  )
}
