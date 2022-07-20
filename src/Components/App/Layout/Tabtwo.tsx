import React from 'react'
import { ITab } from "ui-kit/Tabs";
import { Tabs } from "../../../ui-kit/Tabs/Tabs";
import { useState } from "react";


const Tabtwo = () => {

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
      <h2>Tabs outlined</h2>

      
      <Tabs variant="outlined" selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
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

export default Tabtwo