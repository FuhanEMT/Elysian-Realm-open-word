import Image from 'next/image'
import { Inter } from 'next/font/google'

import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import  Header from '../pages/components/layout/header/header'
import Menu from "../pages/components/layout/menu/menu";
import openGatherList from  '../pages/service/openAI'

const inter = Inter({ subsets: ['latin'] })

// 发送一条新的对话
openGatherList.getCreateDialogue('text-davinci-003','你好，你是谁').then(res => {
    console.log(res)
})

export default function Home() {
  return (
      <div className="layout-admin">
          <Header />
          <div className="centent">
              <Menu />
          </div>
      </div>
  )
}
