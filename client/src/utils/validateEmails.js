const rgx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
export default email => {
    const invalidEmails = email
        .split(',')
        .map(email => email.trim())
        .filter(email => rgx.test(email) === false);

    if(invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`; 
    }

    return;
}