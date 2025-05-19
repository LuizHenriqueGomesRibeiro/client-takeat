import { SuccessTemplate } from "../../components/templates";
import { useNavigate } from "react-router-dom";
import pagination from "../../core/pagination";

const Index = () => {
    const navigate = useNavigate();

    return <SuccessTemplate
        onNavegate={() => navigate(pagination.products)}
    />
}

export default Index;