import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            		console.log("The payment was succeeded!", payment);
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
                    this.props.tranSuccess(payment)
                }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = this.props.total; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    'AWsOKe9cnx3AnaYFBcpiCeAq3KsY1uJJgPgHUWfVsYrY6MoLEewxE4WusqZ9ub-6trw-XVNoEj9qaCn8',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // Để nhận được ID ứng dụng của sản xuất, trước tiên bạn sẽ phải gửi ứng dụng của mình đến Paypal để được phê duyệt
        // Đối với ID ứng dụng hộp cát (sau khi đăng nhập vào tài khoản nhà phát triển của bạn, vui lòng tìm phần "Ứng dụng API REST", nhấp vào "Tạo ứng dụng"):
        // => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // Đối với ID ứng dụng sản xuất:
        // => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. Bạn cũng có thể có nhiều nút thanh toán nhanh Paypal trên trang, chỉ cần chuyển đúng số tiền và chúng sẽ hoạt động!
        let style = {
            size: 'small',
            color: 'blue',
            shape: 'rect',
            label: 'checkout',
            tagline: false
        }
     
        return (
            <PaypalExpressBtn
             env={env} client={client} 
             currency={currency}
              total={total} onError={onError} 
              onSuccess={onSuccess} onCancel={onCancel} 
              style={style}/>
        );
    }
}