




const  validatingEmailAdress = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|".+")@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|((-0-9]+\.+2,})$))/;    return re.test(String(email).toLowerCase());
};

export default validatingEmailAdress;