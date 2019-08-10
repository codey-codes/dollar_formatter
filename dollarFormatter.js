function dollarFormat(num) {
    num = parseFloat(num);
    if (!num && num !== 0) return 'N/A';
    if (num === 0) return '$0.00';

    num = Math.abs(num);
    let billion = '';
    let million = Math.floor(num / 1000000);
    let thousand = Math.floor(num / 1000);
    let hundred = Math.floor((num / 100) % 10);
    let ten = Math.floor((num / 10) % 10);
    let unit = Math.floor(num % 10);
    let dec = num.toFixed(2).split('.');

    if (num >= 1000) {
        if (million >= 1000) {
            billion = Math.floor(num / 1000000000);
            billion /= 1000;
            billion = ((Math.floor(billion * 10) % 10) === 0 ? "" : (Math.floor(billion * 10) % 10))
            + "" + 
            ((Math.floor(billion * 100) % 10 === 0 && Math.floor(billion * 10) % 10 === 0) ? "" : Math.floor(billion * 100) % 10)
            + "" +
            (Math.floor(billion * 1000) % 10) + ",";
        }

        if (thousand >= 1000) {
            million /= 1000;
			if (million >= 1) million = (Math.floor(million * 10) % 10) + "" + (Math.floor(million * 100) % 10) + "" + (Math.floor(million * 1000) % 10) + ",";
            else million = 
                ((Math.floor(million * 10) % 10) === 0 ? "" : (Math.floor(million * 10) % 10))
                + "" +
                ((Math.floor(million * 100) % 10 === 0 && Math.floor(million * 10) % 10 === 0) ? "" : Math.floor(million * 100) % 10)
                + "" +
                (Math.floor(million * 1000) % 10) + ",";
        } else million = '';

        thousand /= 1000;
        if (thousand >= 1) thousand = (Math.floor(thousand * 10) % 10) + "" + (Math.floor(thousand * 100) % 10) + "" + (Math.floor(thousand * 1000) % 10) + ",";
        else thousand = 
            ((Math.floor(thousand * 10) % 10) === 0 ? "" : (Math.floor(thousand * 10) % 10))
            + "" +
            ((Math.floor(thousand * 100) % 10 === 0 && Math.floor(thousand * 10) % 10 === 0) ? "" : Math.floor(thousand * 100) % 10)
            + "" +
            (Math.floor(thousand * 1000) % 10) + ",";

        return `$${billion}${million}${thousand}${hundred}${ten}${unit}.${dec[1]}`;
    } else return "$" + num.toFixed(2);
};