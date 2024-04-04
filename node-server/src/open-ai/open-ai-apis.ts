
export function echoGreeting(req: any, res:any) {
    const theDate: Date = new Date()
    return res.send(`Greeting from WRS APIs for wrapping OpenAI operations.  Time: ${theDate.getTime()}`)
}
export function createImage(req: any, res:any) {
    const theDate: Date = new Date()
    return res.send(`Creating Image. Time: ${theDate.getTime()}`)
}

