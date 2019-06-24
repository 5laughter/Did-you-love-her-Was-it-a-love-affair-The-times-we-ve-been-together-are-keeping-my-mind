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
        <IonImg src="/assets/macbook.jpeg"/>
        <IonToolbar>
          <IonItem>MacbookPro 15inch</IonItem>
          <IonItem>사고싶다.</IonItem>
          <IonItem>주문처 : 쿠팡</IonItem>
          <IonItem>주문일 : 2019.06.01.</IonItem>
          <IonItem>현재 상태 : 배송 중</IonItem>
          <IonItem>배송 기사 : 이원준</IonItem>
        </IonToolbar>
      </IonContent>
    </>
  );
};

export default MyPage;
