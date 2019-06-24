import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonItem,
  IonIcon,
  IonContent,
  IonList
} from '@ionic/react';

const Parser: React.SFC<any> = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ListItems />
      </IonContent>
    </>
  );
};

const ListItems = () => {
  const icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => {
    return (
      <IonItem key={x} href="/home/doneinfo">
        <IonIcon name={icons[x - 1]} slot="start" />
        택배 {x}
        <div className="item-note" slot="end">
          #{x}
        </div>
      </IonItem>
    );
  });

  return <IonList>{items}</IonList>;
};

export default Parser;
