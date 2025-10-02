class Gasto{
    constructor(tipoDeGasto, monto){
        this._tipoDeGasto=tipoDeGasto;
        this._monto=monto;
        
    }
    get tipoDeGasto(){
        return this._tipoDeGasto;
    }
    set tipoDeGasto(tipoDeGasto){
        this._tipoDeGasto=tipoDeGasto;
    }
    get monto(){
        return this._monto;
    }
    set monto(monto){
        this._monto=monto;
    }
}