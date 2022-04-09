import cvt from './other'

export default {
  priceToString(price: string | number){
    if(price && price != ""){
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      return "0"
    }
  },
  getFormattedTelNum(telnum: string, hidden=false){
    let formatNum = '';

    if(typeof telnum == 'undefined' || !telnum) return '-'

    if(telnum.length==11){
        if(hidden){
            formatNum = telnum.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3');
        }else{
            formatNum = telnum.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        }
    }else if(telnum.length==8){
        formatNum = telnum.replace(/(\d{4})(\d{4})/, '$1-$2');
    }else{
        if(telnum.indexOf('02')==0){
            if(hidden){
                formatNum = telnum.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3');
            }else{
                formatNum = telnum.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
            }
        }else{
            if(hidden){
                formatNum = telnum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3');
            }else{
                formatNum = telnum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            }
        }
    }
    return formatNum;
  },
}