import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonItem,
  IonContent,
  IonInput,
  IonLabel,
  IonButton
} from '@ionic/react';

const Login: React.SFC<any> = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonLabel position="floating">ID</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">PASSWORD</IonLabel>
          <IonInput type="password"></IonInput>
        </IonItem>
        <IonButton href="/home" expand="block">로그인</IonButton>
        <IonButton href="/home/register" color="secondary" expand="block">회원가입</IonButton>
      </IonContent>
    </>
  );
};

export default Login;
