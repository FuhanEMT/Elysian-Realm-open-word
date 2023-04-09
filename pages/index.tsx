import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Configuration , OpenAIApi } from "openai";

const inter = Inter({ subsets: ['latin'] })

// Init OpenAi key or anization
const configuration = new Configuration({
    organization: "org-1X2BuxEsDB6HDg2jU0jeQ3P1",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const response =  openai.listEngines();

console.log(openai , response)

const axiosThen = openai.createCompletion({
    model: "text-davinci-003",
    prompt: "你能帮我写一个js的正则代码吗，严重是否为手机号",
    temperature: 0,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
})
    .then((res) => {
        console.log(res)
    })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Open AI - Javascript</div>
    </main>
  )
}
