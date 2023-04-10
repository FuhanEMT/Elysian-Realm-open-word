import { Configuration , OpenAIApi } from "openai";
import { BaseAPI } from "openai/base";

const configuration = new Configuration({
    // organization: "org-1X2BuxEsDB6HDg2jU0jeQ3P1",
    apiKey: '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',
});

const OpenAiPropoyData: any | BaseAPI = new OpenAIApi(configuration);

// 发送一条新的对话 createCompletion
function getCreateDialogue(model:string = "text-davinci-003" , msg:string = '你好'){
    let resoleve = new Promise((resolve: any, reject:any) => {
        OpenAiPropoyData.createCompletion({
            model: model,
            prompt: msg,
        }).then((res:any) => {
            resolve(res)
        })
    })
    return resoleve
}

// 获取可使用模型列表
function getModelOpenAiList(){
    let resoleve = new Promise((resolve , reject) => {
        OpenAiPropoyData.listModels().then((res:OpenAIApi) => {
            resolve(res)
        })
    })

    return resoleve
}

let openGatherList = {
    getCreateDialogue: getCreateDialogue,
    getModelOpenAiList: getModelOpenAiList
}
export default openGatherList
