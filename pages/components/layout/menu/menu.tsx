// header
import { PanelMenu } from 'primereact/panelmenu';
export default function Menu() {

    const items = [
        {
            label:'消息列表',
            items:[
                {
                    label:'Bookmark',
                    icon:'pi pi-fw pi-bookmark'
                },
                {
                    label:'Video',
                    icon:'pi pi-fw pi-video'
                }
            ]
        }]

    return (
        <div className="left">
            <PanelMenu model={items} className="w-full md:w-25rem" />
        </div>
    )
}
