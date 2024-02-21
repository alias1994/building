import Auth from "../models/Auth.js"

const textErrorResult = arr => {
    let result = ""
    arr.forEach(element => result += `${dict[element] || element} صحیح وارد نشده است \n`);
    return result 
}

const errorHandler = (e) => {
    const dict = {
        firstname: "نام",
        lastname: "نام خانوادگی",
        username:"نام کاربری",
        password:"رمزعبور",
        title:"عنوان",
        _id: "آیدی",
        birthday: "تاریخ تولد",
        title: "عنوان"
    }
    e = e.toString()
    if (e.includes("E11000")){
        const arr = e.match(/(?<={ )\w+(?=: )/g)
        return textErrorResult(arr)
    }
    else if (e.match(/(?<=`)\w+(?=` is required)/g)){
        const arr = e.match(/(?<=`)\w+(?=` is required)/g)
        return textErrorResult(arr)
    } 
    else if (e.includes("Cast") && e.match(/(?<=path \\")\w+(?=\\")/g)){
        const arr = e.match(/(?<=path \\")\w+(?=\\")/g)
        return textErrorResult(arr)
    }
    else if (e.includes("Cast") && e.match(/(?<=path ")\w+(?=")/g)){
        const arr = e.match(/(?<=path ")\w+(?=")/g)
        return textErrorResult(arr)
    }
    else{
        return e.toString()
    }
}

const getIdByToken = async (token) => {
    const authedUser = await Auth.findOne({token: token})
    return authedUser.userId
}

export {
    errorHandler,
    getIdByToken
}