// header
import { Tree } from 'primereact/tree';
import { Dialog } from 'primereact/dialog';
import { Accordion, AccordionTab } from 'primereact/accordion';
import menu from './menu.module.css'
import {useState} from "react";
import openGatherList from '../../../service/openAI'
import {any} from "prop-types";
export default function Menu() {

    let [visible, setVisible] = useState(false);
    let list = useState([])
    let [listView,setlistView]= useState([])

    const nodes:any[] = [{
        label: '消息队列',
        icon: 'pi pi-comments',
        children:[],
    },{
        label: '账号设置',
        icon: 'pi pi-users',
        children:[]
    },{
        label: '模型预览',
        icon: 'pi pi-box',
        children:[],
        value: 'model'
    }]


    // 获取当前模型类型，并打开dialog
    function openShowDialog(){
        openGatherList.getModelOpenAiList().then((res:any) => {
            console.log(res)
            if(res.status == 200){
                list = res.data.data
                // @ts-ignore
                listView = list.map((item:any, index:number) => {
                    return (
                        <AccordionTab key={index} header={item.id}>
                            <p className='m-0'>
                                暂无详细解释当前模型用途
                            </p>
                        </AccordionTab>
                    )
                })
                setlistView(listView)
                setVisible(true)
            }
        })
    }

    // 根据菜单类型进行事件筛选
    function getCheckItem(e:any){
        switch (e.node.value) {
            case 'model':
                openShowDialog()
                break;
        }
    }



    return (
        <div className={menu.left}>
            <Tree value={nodes} className="w-full md:w-30rem" onNodeClick={(e) => {getCheckItem(e)}} />
            <div className={menu.button}>
                创建消息队列
            </div>

            <Dialog header="模型列表" style={{ width: '50vw' }} visible={visible} onHide={() => setVisible(false)}>
                <Accordion activeIndex={0}>
                    {
                        listView
                    }
                </Accordion>
            </Dialog>
        </div>
    )
}
