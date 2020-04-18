import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import AddItem from '../AddItem';
import ItemList from '../ItemList';

const Tab1: React.FC = () => {
    const [current, setCurrent] = useState(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Wow</IonTitle>
          </IonToolbar>
        </IonHeader>
        {}
        <IonCard>
          <IonCardHeader><h3>Group list of tasks</h3></IonCardHeader>
          <IonCardContent>
            <AddItem initialValue={current} clear ={()=>setCurrent(null)}/>
          </IonCardContent>
            {}
            <ItemList doEdit={setCurrent}/>


        </IonCard>
        <ExploreContainer name="Wowwie!" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
