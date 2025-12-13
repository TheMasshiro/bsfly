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
    IonCardContent,
    IonIcon
} from "@ionic/react";
import { thermometerOutline, waterOutline, pulseOutline, leafOutline, bugOutline } from "ionicons/icons";
import { FC } from "react";

const LandingPage: FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding" fullscreen>
                <IonGrid>
                    <IonRow className="ion-justify-content-center ion-align-items-center">
                        <IonCol size="12" sizeMd="8" sizeLg="5" className="ion-text-center">
                            <IonIcon icon={bugOutline} color="success" size="large" />

                            <IonText>
                                <h1>
                                    <div>Your gateway</div>
                                    <div>to  <IonText color="success">BSFly</IonText></div>
                                    <div>monitoring</div>
                                </h1>
                            </IonText>

                            <IonText>
                                <p>Monitor
                                    <IonText color="danger"> temperature</IonText>,
                                    <IonText color="primary"> humidity</IonText>,
                                    <IonText color="success"> substrate moisture</IonText>,
                                    and
                                    <IonText color="warning"> ammonia</IonText>
                                    <IonText> in real-time.</IonText>
                                </p>
                            </IonText>

                            <IonText>
                                <p>Join <strong>farmers</strong> today.</p>
                            </IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12" sizeMd="10" sizeLg="8">
                            <IonRow>
                                <IonCol size="6" sizeMd="3">
                                    <IonCard>
                                        <IonCardContent className="ion-text-center">
                                            <IonIcon icon={thermometerOutline} color="danger" size="large" className="ion-margin-bottom" />
                                            <IonText color="danger">
                                                <h2>Temperature</h2>
                                            </IonText>
                                            <IonText color="medium">
                                                <p>Monitor temperature</p>
                                            </IonText>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>

                                <IonCol size="6" sizeMd="3">
                                    <IonCard>
                                        <IonCardContent className="ion-text-center">
                                            <IonIcon icon={waterOutline} color="primary" size="large" className="ion-margin-bottom" />
                                            <IonText color="primary">
                                                <h2>Humidity</h2>
                                            </IonText>
                                            <IonText color="medium">
                                                <p>Track humidity</p>
                                            </IonText>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>

                                <IonCol size="6" sizeMd="3">
                                    <IonCard>
                                        <IonCardContent className="ion-text-center">
                                            <IonIcon icon={leafOutline} color="success" size="large" className="ion-margin-bottom" />
                                            <IonText color="success">
                                                <h2>Substrate</h2>
                                            </IonText>
                                            <IonText color="medium">
                                                <p>Track moisture</p>
                                            </IonText>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>

                                <IonCol size="6" sizeMd="3">
                                    <IonCard>
                                        <IonCardContent className="ion-text-center">
                                            <IonIcon icon={pulseOutline} color="warning" size="large" className="ion-margin-bottom" />
                                            <IonText color="warning">
                                                <h2>Ammonia</h2>
                                            </IonText>
                                            <IonText color="medium">
                                                <p>Monitor air quality</p>
                                            </IonText>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-justify-content-center ion-margin-top">
                        <IonCol size="12" sizeMd="6" sizeLg="4">
                            <SignInButton mode="redirect">
                                <IonButton expand="block" size="large" color="success" strong>
                                    SIGN IN
                                </IonButton>
                            </SignInButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default LandingPage;
