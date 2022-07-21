import React from 'react'
import { ITab } from "ui-kit/Tabs";
import { useState } from "react";
import { Tabs } from "../../../ui-kit/Tabs/Tabs";

const Tabtree = () => {

  const tabs: ITab[] = [
    { id: "1", label: "Label №1" },
    { id: "2", label: "Label №2" },
    { id: "3", label: "Label №3" },
    { id: "4", label: "Label №4" },
    { id: "5", label: "Label №5" },
  ];

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabClick = (id: string | number) => {
    setSelectedTabId(id);
  };

  return (
    <div>
      <section className="TabsPage">
        <h2>Tabs filled</h2>


        <Tabs variant="filled" selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
        <div className="TabsPage-Content">
          {selectedTabId === tabs[0].id && (
            <div>
              Tab — это компонент, который систематизирует контент, группируя похожую информацию на одной странице. Это позволяет просматривать контент без необходимости уходить с этой страницы.
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
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </div>
          )}
          {selectedTabId === tabs[3].id && (
            <div>
              kmndlfnsaldfnslkfnlasfnlkasnflksadnflkasdnfklasdnfkladsnflksafnlkasnfklasnfklsnfklasdnlfansdlfkansdklnfasklfnl
            </div>
          )}
          {selectedTabId === tabs[4].id && (
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit, ut eligendi eum hic obcaecati maxime necessitatibus quo illum beatae, ipsum molestias aliquid dolores impedit quia doloribus modi, placeat iste.
            </div>
          )}
          <br />
          <hr />

        </div>
      </section>
    </div>
  )
}

export default Tabtree