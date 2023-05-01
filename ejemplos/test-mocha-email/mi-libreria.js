function validaEmail(email) {
    const regex = /\S+@\S+\.[a-zA-Z]{2,}$/i;
    return regex.test(email);
}
