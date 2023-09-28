import TabButton from "./TabButton";
import {TABS} from "../const";
const Tabs = (props) => {
    const {openTab} = props;
    return (<div className="tab">
        <TabButton className="allTab" id="defaultOpen" openTab={()=>openTab(TABS.ALL)} tabContent="All"/>
        <TabButton className="activeTab" openTab={()=>openTab(TABS.ACTIVE)} tabContent="Active"/>
        <TabButton className="Completed" openTab={()=>openTab(TABS.COMPLETED)} tabContent="Completed"/>
    </div>)
}

export default Tabs;