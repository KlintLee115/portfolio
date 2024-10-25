import { Dispatch, SetStateAction } from "react";
import { TabOptions } from "./MainSection";

export default function Tabs({tab, setTab}:{tab: TabOptions, setTab:  Dispatch<SetStateAction<TabOptions>>}) {

    const tabs: TabOptions[] = ['projects', 'articles']

    const handleClick = (selectedTab: TabOptions) => () => {
        setTab(selectedTab);
    };

    const getClassName = (currentTab: TabOptions) => 
        `cursor-pointer text-3xl mb-10 ${tab === currentTab ? "underline underline-offset-8" : ""}`;

    return (
        <section className="flex gap-20">
            {tabs.map((t) => (
                <h1 key={t} onClick={handleClick(t)} className={getClassName(t)}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                </h1>
            ))}
        </section>
    )
}