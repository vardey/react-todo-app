import TabButton from "./TabButton";
import { TABS } from "../const";
const Tabs = (props) => {
  const { openTab, currentTab } = props;
  return (
    <div className="tab">
      <TabButton
        className={
          currentTab === TABS.ALL ? "allTab currentActiveButton" : "allTab"
        }
        id="defaultOpen"
        openTab={() => openTab(TABS.ALL)}
        tabContent="All"
      />
      <TabButton
        className={
          currentTab === TABS.ACTIVE
            ? "activeTab currentActiveButton"
            : "activeTab"
        }
        openTab={() => openTab(TABS.ACTIVE)}
        tabContent="Active"
      />
      <TabButton
        className={
          currentTab === TABS.COMPLETED
            ? "Completed currentActiveButton"
            : "Completed"
        }
        openTab={() => openTab(TABS.COMPLETED)}
        tabContent="Completed"
      />
    </div>
  );
};

export default Tabs;
