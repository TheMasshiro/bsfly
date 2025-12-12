import { IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, RefresherCustomEvent } from '@ionic/react';
import { FC } from 'react';
import CycleButton from '../../components/AppCycleSelector/CycleSelector';
import { UserButton } from '@clerk/clerk-react';

const NotificationsPage: FC = () => {

    const handleRefresh = (event: RefresherCustomEvent) => {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar mode="ios">
                    <IonTitle>Notifications</IonTitle>
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
            <IonContent fullscreen>

                <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
                    <IonRefresherContent>
                    </IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Notifications</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard mode="ios">
                    <IonCardHeader>
                        <IonCardTitle>0 Notification</IonCardTitle>
                        <IonCardSubtitle>Notifications will show here.</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default NotificationsPage;
