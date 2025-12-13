import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import './More.css';
import { FC } from 'react';
import { eyeOutline, informationCircleOutline, saveOutline, settingsOutline } from 'ionicons/icons';
import CycleButton from '../../components/AppCycleSelector/CycleSelector';
import { UserButton } from '@clerk/clerk-react';

const MorePage: FC = () => {
    const router = useIonRouter()

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar mode="ios">
                    <IonTitle>More</IonTitle>
                    <IonButtons slot="start">
                        <CycleButton />
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonItem lines="none">
                            <UserButton />
                        </IonItem>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen={true}>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">More</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonList inset className="ion-margin-top">
                    <IonItem button detail onClick={() => console.log("View Data Clicked")}>
                        <IonIcon aria-hidden="true" icon={eyeOutline} slot="start" color="primary"></IonIcon>
                        <IonLabel>
                            <h2>View Data</h2>
                            <p>View Backed Up Data</p>
                        </IonLabel>
                    </IonItem>
                    <IonItem button detail onClick={() => console.log("Backup Data Clicked")}>
                        <IonIcon aria-hidden="true" icon={saveOutline} slot="start" color="success"></IonIcon>
                        <IonLabel>
                            <h2>Backup Data</h2>
                            <p>Manually backup data</p>
                        </IonLabel>
                    </IonItem>
                </IonList>

                <IonList inset className="ion-margin-top">
                    <IonItem button detail onClick={() => router.push("/more/settings")}>
                        <IonIcon aria-hidden="true" icon={settingsOutline} slot="start" color="medium"></IonIcon>
                        <IonLabel>
                            <h2>Settings</h2>
                            <p>Open settings</p>
                        </IonLabel>
                    </IonItem>
                    <IonItem button detail onClick={() => router.push("/more/about")}>
                        <IonIcon aria-hidden="true" icon={informationCircleOutline} slot="start" color="medium"></IonIcon>
                        <IonLabel>
                            <h2>About</h2>
                            <p>About BSFly</p>
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage >
    );
};

export default MorePage;
