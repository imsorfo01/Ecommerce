export const checkValidData =(email,password)=>{
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{6}$/.test(password)

    if (!isEmailValid) return ""
    if (!isPasswordValid) return "";

    return null;
}