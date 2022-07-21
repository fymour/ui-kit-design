import React, { useState } from 'react'
import Tabs, { ITab } from 'ui-kit/Tabs'

const TabsPage = () => {

    const tabs: ITab[] = [
        { id: "1", label: "Label №1" },
        { id: "2", label: "Label №2" },
        { id: "3", label: "Label №3" },
    ];

    const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

    const handleTabClick = (id: string | number) => {
        setSelectedTabId(id);
    };

    return (
        <div>
            <section className="TabsPage">
                <h2>Tabs</h2>
                <Tabs selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
                <div className="TabsPage-Content">
                    {selectedTabId === tabs[0].id && (
                        <div>
                            Sed ut perspiciatis unde omnis iste natus error sit voltage
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo
                        </div>
                    )}
                    {selectedTabId === tabs[1].id && (
                        <div>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt in culpa qui officia deserunt mollitia
                            animi, id est laborum et dolorum fuga.
                        </div>
                    )}
                    {selectedTabId === tabs[2].id && (
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis vero autem aliquid perferendis asperiores itaque voluptatibus dolore iusto non veritatis. Cum adipisci fuga quibusdam doloremque nobis animi obcaecati autem, sit tenetur recusandae, optio saepe, provident corporis voluptatum quam. Et, molestias sed illo ut quisquam incidunt facilis dolor consectetur ad fuga!
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default TabsPage