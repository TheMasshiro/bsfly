import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonNote,
    IonPage,
    IonText,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { informationCircle, codeSlash, bug, mail, logoGithub, peopleOutline } from 'ionicons/icons';
import { FC } from 'react';
import './About.css';

const AboutPage: FC = () => {

    return (
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/more"></IonBackButton>
                    </IonButtons>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonListHeader>
                    <IonIcon icon={informationCircle} className="center-left" />
                    App Information
                </IonListHeader>
                <IonList inset={true}>
                    <IonItem>
                        <IonLabel>Version</IonLabel>
                        <IonText slot="end" color="medium">
                            0.0.1a
                        </IonText>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Build Date</IonLabel>
                        <IonText slot="end" color="medium">
                            December 2025
                        </IonText>
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel class="ion-text-wrap">
                            <IonNote color="medium" className="about-note">
                                BSFly - Black Soldier Fly Monitoring System
                            </IonNote>
                        </IonLabel>
                    </IonItem>
                </IonList>

                <IonListHeader>
                    <IonIcon icon={codeSlash} className="center-left" />
                    Developer
                </IonListHeader>
                <IonList inset={true}>
                    <IonItem>
                        <IonLabel class="ion-text-wrap">
                            <h3>Developer Name</h3>
                            <p className="about-developer-value">John Christian Vicente</p>
                        </IonLabel>
                    </IonItem>
                    <IonItem button={true}>
                        <IonIcon icon={mail} slot="start" />
                        <IonLabel class="ion-text-wrap">
                            <h3>Contact</h3>
                            <p className="about-developer-value">johnc.vicente1@gmail.com</p>
                        </IonLabel>
                    </IonItem>
                    <IonItem button={true} href="https://github.com/TheMasshiro" target="_blank" rel="noopener noreferrer">
                        <IonIcon icon={logoGithub} slot="start" />
                        <IonLabel>GitHub</IonLabel>
                    </IonItem>
                </IonList>

                <IonListHeader>
                    <IonIcon icon={bug} className="center-left" />
                    Support
                </IonListHeader>
                <IonList inset={true}>
                    <IonItem button={true} href="https://github.com/TheMasshiro/black-soldier/issues" target="_blank" rel="noopener noreferrer">
                        <IonLabel>Report an Issue</IonLabel>
                    </IonItem>
                    <IonItem button={true} href="https://github.com/TheMasshiro/black-soldier/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                        <IonLabel>Documentation</IonLabel>
                    </IonItem>
                    <IonItem button={true} href="https://github.com/TheMasshiro/black-soldier/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                        <IonLabel>Licenses</IonLabel>
                    </IonItem>
                </IonList>

                <IonListHeader>
                    <IonIcon icon={peopleOutline} className="center-left" />
                    Researchers
                </IonListHeader>

                <IonList inset={true}>
                    <IonItem>
                        <IonLabel>Advincula, Kristine Joy B.</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Bugarin, Jethro Daniel D.</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Dagsaan, Jed</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Maggay, Nigel Bennett</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Farrales, Mark Neil S.</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Vicente, John Christian</IonLabel>
                    </IonItem>
                </IonList>

                <div className="about-footer">
                    <IonNote color="medium" className="about-note">
                        © 2025 BSFly. All rights reserved.
                    </IonNote>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default AboutPage;
