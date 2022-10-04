
import { Typography, styled } from "@mui/material";

const Header = styled(Typography)`
    margin: 2%;
`

const CRUDApp = () =>{
    return(
        <Header variant="h4">Hello Everyone! this is a CRUD Aplication from React.</Header>
    )
}

export default CRUDApp;