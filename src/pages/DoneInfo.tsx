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
  IonList,
  IonInput,
  IonLabel,
  IonButton,
  IonToast,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonCardContent,
  IonBadge,
  IonText
} from '@ionic/react';



const MyPage: React.SFC<any> = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>ParserInfo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src="/assets/soccershow.jpg"/>
        <IonToolbar>
          <IonItem>축구화</IonItem>
          <IonItem>내가 신은 축구화</IonItem>
          <IonItem>주문처 : 쿠팡</IonItem>
          <IonItem>주문일 : 2018.12.31.</IonItem>
          <IonItem>수령일 : 2019.01.01.</IonItem>
          <IonItem>배송 기사 : 이원준</IonItem>
        </IonToolbar>
      </IonContent>
    </>
  );
};

export default MyPage;
