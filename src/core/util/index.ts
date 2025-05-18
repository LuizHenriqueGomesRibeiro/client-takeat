class Util {
    brl = (value: number): string => {
        if (isNaN(value)) return "R$ 0,00";

        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
}

const util = new Util();
export default util;