
export function echoGreeting(req: any, res:any) {
    const theDate: Date = new Date()
    return res.send(`Greeting from [WRS.OpenAI.API], the time is ${theDate.getTime()}`)
}
export function echoGreeting2(req: any, res:any) {
    const theDate: Date = new Date()
    return res.send(`Greeting from [WRS.OpenAI.API2], the time is ${theDate.getTime()}`)
}

