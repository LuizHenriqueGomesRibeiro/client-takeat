import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { Component } from "./styles";
import themes from '../../../themes';
import { Text } from '../../atoms';

const Index = () => <Component>
    <ReportGmailerrorredIcon
        sx={{ width: '200px', height: '200px', color: themes.grey }}
    />
    <Text name="restaurant-error">Nenhum restaurante conectado</Text>
    <Text name="little-restaurant-error">Um restaurante deve ser adicionado ao contexto </Text>
</Component>

export default Index;