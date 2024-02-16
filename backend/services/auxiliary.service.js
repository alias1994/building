import Auth from "../models/Auth.js"

const errorHandler = (e) => {
    e = e.toString()
    if (e.includes("E11000")){
        const arr = e.match(/(?<={ )\w+(?=: )/g)
        let result = ""
        arr.forEach(element => {
            result += `${element} قبلا وارد شده است. \n`
        });
        return result        
    }
    else if (e.match(/(?<=`)\w+(?=` is required)/g)){
        const arr = e.match(/(?<=`)\w+(?=` is required)/g)
        let result = ""
        arr.forEach(element => {
            result += `${element} صحیح وارد نشده است \n`
        });
        return result
    } else if (e.includes("Cast")){
        const arr = e.match(/(?<=path \\")\w+(?=\\")/g)
        let result = ""
        arr.forEach(element => {
            result += `${element} صحیح وارد نشده است \n`
        });
        return result
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