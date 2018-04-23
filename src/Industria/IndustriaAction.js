import { showTabs, selectTab } from '../common/tab/tabAction'

export function initXmlIndustria() {
    return [
        showTabs('industriaIncluir'),
        selectTab('industriaIncluir')
    ]
}