const express = require('express');

module.exports = {
    index(request, response){
        let { c, l, a, valorMercadoria, tipo } = request.body;

        if ((c + l + a) <= 200) {

            const fbase = (c * l * a) / 6000;
            const tgris = valorMercadoria * 0.003;
            multiplicador = 0;

            if (tipo == "pac") {
                multiplicador = 1;
            }
            else if (tipo == "sedex") {
                multiplicador = 10;
            }
            else if (tipo == "sedex10") {
                multiplicador = 20;
            }
            else if (tipo == "sedex12") {
                multiplicador = 30;
            }
            else {
                return response.status(400).json({
                    message: "Tipo de postagem invalida"
                })
            }
            const frete = parseFloat((fbase * multiplicador) + tgris);
            return response.status(200).json({frete});
        }
        else {
            return response.status(400).json({
                message: "Dimenções excedidas"
            })
        }
    }

}