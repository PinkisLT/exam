module.exports = (req, res, next) => {
    const {
        name,
        age,
        email,
        password
    } = req.body

    const  validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|".+")@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|((-0-9]+\.+2,})$))/;
        return re.test(String(email).toLowerCase());
    };

    function errorSend(message) {
        res.send({ success: false, message })
    }
    if(age < 10) {
        return errorSend('Jusu amzius nepataiko i leidziama amziu')
    }
    if(password.length < 5 || password.length > 15) {
        return errorSend('Patikrinkite slaptazodi dar karta')
    }
    if(name.length > 50 || name.length < 2) {
        return errorSend('Esamo vartotojo vardas per trumpas/ilgas')

    }
    if(!validateEmail(email)) {
        return errorSend('Netinkamas el. pasto formatas')

    }

    next()

}