import { SignInButton } from "@clerk/clerk-react";
import {
    IonPage,
    IonContent,
    IonButton,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle
} from "@ionic/react";
import { thermometerOutline, waterOutline, pulseOutline, leafOutline } from "ionicons/icons";
import { FC } from "react";

const LandingPage: FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>BSFly Monitoring</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow className="ion-justify-content-center ion-margin-top">
                        <IonCol size="12" sizeMd="8" sizeLg="6" className="ion-text-center">
                            <IonText color="primary">
                                <h1>Black Soldier Fly Monitoring System</h1>
                            </IonText>
                            <IonText color="medium">
                                <p>Welcome! Sign in to access your dashboard and monitor your farm in real-time.</p>
                            </IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-justify-content-center ion-margin-top">
                        <IonCol size="12" sizeMd="6" sizeLg="4">
                            <SignInButton mode="modal">
                                <IonButton expand="block" size="large" color="primary">
                                    SIGN IN
                                </IonButton>
                            </SignInButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-margin-top">
                        <IonCol size="12" sizeMd="6" sizeLg="3">
                            <IonCard>
                                <IonCardHeader className="ion-text-center">
                                    <IonIcon icon={thermometerOutline} color="danger" size="large" />
                                    <IonCardTitle>Temperature</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent className="ion-text-center">
                                    <IonText color="medium">
                                        Monitor optimal temperature ranges
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                        <IonCol size="12" sizeMd="6" sizeLg="3">
                            <IonCard>
                                <IonCardHeader className="ion-text-center">
                                    <IonIcon icon={waterOutline} color="primary" size="large" />
                                    <IonCardTitle>Humidity</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent className="ion-text-center">
                                    <IonText color="medium">
                                        Track moisture levels in real-time
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                        <IonCol size="12" sizeMd="6" sizeLg="3">
                            <IonCard>
                                <IonCardHeader className="ion-text-center">
                                    <IonIcon icon={pulseOutline} color="warning" size="large" />
                                    <IonCardTitle>Ammonia</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent className="ion-text-center">
                                    <IonText color="medium">
                                        Monitor air quality and ammonia
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                        <IonCol size="12" sizeMd="6" sizeLg="3">
                            <IonCard>
                                <IonCardHeader className="ion-text-center">
                                    <IonIcon icon={leafOutline} color="success" size="large" />
                                    <IonCardTitle>Substrate</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent className="ion-text-center">
                                    <IonText color="medium">
                                        Track substrate moisture levels
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default LandingPage;
