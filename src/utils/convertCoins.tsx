export const convertCoins = (val: string): string => {

    const valorNumerico = parseFloat(val);

    const valorFormatado = valorNumerico.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',  
    });

    return valorFormatado;
};