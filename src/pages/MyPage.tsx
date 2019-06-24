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
  IonBadge
} from '@ionic/react';



const MyPage: React.SFC<any> = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>MyPage</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonImg src="/assets/lwj.png"/>
          <IonCardHeader>
            <IonCardTitle>이원준</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              울산광역시 중산로 48 101동 1304호
            </p>
          </IonCardContent>
        </IonCard>
        <IonItem href="/home">
          <IonLabel>현재 택배 수</IonLabel>
          <IonBadge color="primary">2</IonBadge>
        </IonItem>
        <IonItem href="/home/parser">
          <IonLabel>누적 택배 수</IonLabel>
          <IonBadge color="secondary">10</IonBadge>
        </IonItem>
      </IonContent>
    </>
  );
};

export default MyPage;
