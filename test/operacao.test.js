const { describe, expect, it } = require('@jest/globals')
const calculadora = require('../src/operacoes')

describe('Teste da calculadora', () => {

    it('Operação de soma', () => {
        let resultado = calculadora.sum(1, 2);
        expect(resultado).toEqual(3)

        resultado = calculadora.sum(-1, 2);
        expect(resultado).toEqual(1)

        resultado = calculadora.sum(10, 10);
        expect(resultado).toEqual(20)

        resultado = () => calculadora.sum("a", 2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.sum(2, "a");
        expect(resultado).toThrow("Não é um número");
    })

    it('Operação de subtração', () => {
        let resultado = calculadora.sub(1, 2);
        expect(resultado).toEqual(-1)

        resultado = calculadora.sub(4, 2);
        expect(resultado).toEqual(2)

        resultado = calculadora.sub(10, 7);
        expect(resultado).toEqual(3)

        resultado = () => calculadora.sub("a", -2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.sub(-2, "a");
        expect(resultado).toThrow("Não é um número");
    })

    it('Operação de divisão', () => {
        let resultado = calculadora.div(2, 2);
        expect(resultado).toEqual(1)

        resultado = calculadora.div(100, 2);
        expect(resultado).toEqual(50)   
        
        resultado = calculadora.div(6, 2);
        expect(resultado).toEqual(3)   

        resultado = calculadora.div(120, 2);
        expect(resultado).toEqual(60)   

        resultado = calculadora.div(10, 2);
        expect(resultado).toEqual(5)   

        resultado = calculadora.div(30, 3);
        expect(resultado).toEqual(10)   

        resultado = () => calculadora.div("a", -2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.div(-2, "a");
        expect(resultado).toThrow("Não é um número");
        
    })

    it('operaçao de multiplicação', () => {
        let resultado = calculadora.mult(2, 2);
        expect(resultado).toEqual(4);

        resultado = calculadora.mult(5, 5);
        expect(resultado).toEqual(25);

        resultado = calculadora.mult(9, 9);
        expect(resultado).toEqual(81);

        resultado = calculadora.mult(40, 2);
        expect(resultado).toEqual(80);

        resultado = calculadora.mult(6, 6);
        expect(resultado).toEqual(36);

        resultado = calculadora.mult(10, 2);
        expect(resultado).toEqual(20) 

        resultado = () => calculadora.mult("a", -2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.mult(-2, "a");
        expect(resultado).toThrow("Não é um número");
        
    })

    it('operaçao de Potencia', () => {
        let resultado = calculadora.Pot(10, 2);
        expect(resultado).toEqual(100);

        resultado = calculadora.Pot(5, 3);
        expect(resultado).toEqual(125);

        resultado = calculadora.Pot(9, 2);
        expect(resultado).toEqual(81);

        resultado = calculadora.Pot(4, 3);
        expect(resultado).toEqual(64);

        resultado = calculadora.Pot(6, 2);
        expect(resultado).toEqual(36);

        resultado = calculadora.Pot(7, 3);
        expect(resultado).toEqual(343) 

        resultado = calculadora.Pot(1, 3);
        expect(resultado).toEqual(1) 

        resultado = () => calculadora.Pot("a", -2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.Pot(-2, "a");
        expect(resultado).toThrow("Não é um número");
        
    })

    it('operaçao de Raiz', () => {
        let resultado = calculadora.Raiz(10, (1/3));
        expect(resultado).toEqual(2.154434690031884);

        resultado = calculadora.Raiz(5, (1/2));
        expect(resultado).toEqual(2.23606797749979);

        resultado = calculadora.Raiz(9, (1/3));
        expect(resultado).toEqual(2.080083823051904);

        resultado = calculadora.Raiz(4, (1/2));
        expect(resultado).toEqual(2);

        resultado = calculadora.Raiz(6, (1/3));
        expect(resultado).toEqual(1.8171205928321397);

        resultado = calculadora.Raiz(7, (1/2));
        expect(resultado).toEqual(2.6457513110645907) 

        resultado = calculadora.Raiz(1, (1/3));
        expect(resultado).toEqual(1) 

        resultado = () => calculadora.Raiz("a", -2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.Raiz(-2, "a");
        expect(resultado).toThrow("Não é um número");
        
    })
    
// Math.sqrt raiz
// Math.pow potencia
})