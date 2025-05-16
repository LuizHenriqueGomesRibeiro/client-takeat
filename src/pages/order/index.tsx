import { OrderTemplate } from "../../components/templates";
import { useNavigate } from "react-router-dom";

import pagination from "../../core/pagination";

const Index = () => {
    const navigate = useNavigate();

    return <OrderTemplate
        onNavigateUser={() => navigate(pagination.profile)}
    />
}

export default Index;