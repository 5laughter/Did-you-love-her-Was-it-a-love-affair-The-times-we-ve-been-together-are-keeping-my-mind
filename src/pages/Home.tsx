import {
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonImg,
  IonTitle,
  IonToolbar,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonLabel,
  IonListHeader,
  IonItem,
  IonIcon,
  IonButton,
  IonButtons,
  IonMenuButton
} from '@ionic/react';
import React from 'react';
import './Home.css';

const HomePage: React.SFC<any> = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard class="welcome-card">
          <IonImg src="/assets/ing.png" />
          <IonCardHeader>
            <IonCardSubtitle>쿠팡</IonCardSubtitle>
            <IonCardTitle>Macbook Pro 13inch</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          </IonCardContent>
          <IonButton expand="block" href="/home/item1">
            더 알아보기
          </IonButton>
        </IonCard>
        <IonCard class="welcome-card">
          <IonImg src="/assets/ing2.png"/>
          <IonCardHeader>
            <IonCardSubtitle>옥션</IonCardSubtitle>
            <IonCardTitle>김해 뒷고기</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          </IonCardContent>
          <IonButton expand="block" href="/home/item2">
            더 알아보기
          </IonButton>
        </IonCard>
        <IonButton expand="block" href="/home/add" color="danger">
          택배 추가하기
        </IonButton>
      </IonContent>
    </>
  );
};

export default HomePage;
