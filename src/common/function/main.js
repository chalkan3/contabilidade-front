export function numberToReal(numb) {
    var numb = numb.toFixed(2).split('.');
    numb[0] = numb[0].split(/(?=(?:...)*$)/).join('.');
    return numb.join(',');
}


export function formatNumberBr(text) {
    if (typeof (text) === "undefined") {
        return 0
    } else {
        const compativelComParseFloat = text.replace(",", ".")
        const val = parseFloat(compativelComParseFloat)
        return val
    }


}

export function calculateApuracao(valorEnt, valorDev) {
    //embaixo - se for negativo
    var valorTotal = (valorEnt - valorDev)

    return valorTotal

}


export function formatCnpj(cnpj){
    return cnpj.replace(/\D/g, '').replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5")
}