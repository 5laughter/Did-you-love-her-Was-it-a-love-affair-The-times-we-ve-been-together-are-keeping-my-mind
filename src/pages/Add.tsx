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
  IonToast
} from '@ionic/react';



const Register: React.SFC<any> = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Add</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonLabel position="floating">송장번호</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonButton href="/home" color="secondary" expand="block">추가 완료 (기능 구현 X)</IonButton>
      </IonContent>
    </>
  );
};

export default Register;
