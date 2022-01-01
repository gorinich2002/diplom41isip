const config = require("config");


const nodemailer = require('nodemailer')

function mailConstructor(order){

    let str = `
    <span>Заказ на имя: </span><b>${order.clientData.firstName+' ' + order.clientData.surname}</b><br>
    <span>Адрес: </span><b>${order.clientData.address}</b><br>
    <span>Телефон: </span><b>${order.clientData.phone}</b><br>
  
    <table>
    <tr>
        <th>№</th>
        <th>Название</th>
        <th>Стоймость</th>
        <th>Количество</th>
    </tr>
    `
    order.products.forEach((e,i) => {
        let subStr = `<tr>
            <td>${i+1}</td>
            <td>${e.product.name}</td>
            <td>${e.product.price}</td>
            <td>${e.count}</td>
        </tr>
        `
        str += subStr;
    });
    str += '</table>'
    return str;
}
let mailSend = function(mail,order){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:config.get('mailUser'),
            pass:config.get('mailPass')
        }
    })
    const mailOptions={
        from:config.get('mailUser'),
        to:mail,
        subject:'Заказ мяса',
        html:mailConstructor(order)
    }
    transporter.sendMail(mailOptions, err=>{console.log(err)})
}
module.exports = mailSend;