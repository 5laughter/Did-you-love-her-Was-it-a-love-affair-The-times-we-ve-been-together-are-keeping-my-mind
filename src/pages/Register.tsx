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
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonLabel position="floating">이름</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">ID</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">PASSWORD</IonLabel>
          <IonInput type="password"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">주소</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonButton href="/home/login" color="secondary" expand="block">회원가입 완료</IonButton>
      </IonContent>
    </>
  );
};

export default Register;
