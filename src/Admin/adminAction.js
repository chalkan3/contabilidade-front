import { showTabs, selectTab } from '../common/tab/tabAction'

export function InitAdmList(){
    return[
        showTabs('AnuidadeList'),
        selectTab('AnuidadeList')
    ]
}

