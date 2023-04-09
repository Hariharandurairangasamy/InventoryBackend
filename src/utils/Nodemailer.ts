
const nodemailer = require('nodemailer');
import logger from "../Middleware/logger"

export default class NodeMailer{
    public async sentNodemail(getEmail:String){
        try{
            let mailTransporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'haridurai2107@gmail.com',
                    pass: "qxomdxgyqiblmqop"
                }
            });
             
            let mailDetails = {
                from:'haridurai2107@gmail.com',
                to: getEmail,
                subject: 'Buy A Product',
                text: 'Thanks to purchase products'
            };
             
            mailTransporter.sendMail(mailDetails, function(err, data) {
                if(err) {
                    console.log('Error Occurs');
                } else {
                    console.log('Email sent successfully');
                }
            });

        }catch(err){
            logger.error(err)
            console.log(err)
        }
    }
}